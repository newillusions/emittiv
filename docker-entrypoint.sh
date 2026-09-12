#!/bin/sh
# emittiv-website container entrypoint.
#
# PUID/PGID privilege drop (Unraid best practice, docs.unraid.net "Managing and Customizing
# Containers": "PUID=99 and PGID=100: These set the user and group IDs for file
# permissions") - same shape as linuxserver.io images and this workspace's
# watchdog/anchor/ailx entrypoints (decision:oc236l222dcnewii0vw6, 2026-09-12). The base
# image is node:22-alpine (musl/busybox); busybox's own addgroup/adduser applets can create
# a user but cannot remap an EXISTING user's ids, so the `shadow` package (apk add shadow,
# see Dockerfile) supplies real usermod/groupmod with the same `-o` (non-unique id)
# semantics glibc/Debian's shadow-utils has. `su-exec` is alpine's lightweight equivalent of
# gosu for the final privilege drop.
#
# Runs as root (see Dockerfile - no USER line in the runtime stage) so it can remap the
# baked-in "emittiv" user/group to PUID/PGID, then execs node as that unprivileged user.
set -eu

PUID="${PUID:-99}"
PGID="${PGID:-100}"

current_uid="$(id -u emittiv)"
current_gid="$(id -g emittiv)"

if [ "$current_gid" != "$PGID" ]; then
    groupmod -o -g "$PGID" emittiv
fi
if [ "$current_uid" != "$PUID" ]; then
    usermod -o -u "$PUID" emittiv
fi

# This container has no persistent volume mounts at all (a Cloudflare-Pages-style SvelteKit
# adapter-node server; no runtime writes found in src/) - /app is plain image content, not
# written to at runtime. Chown it anyway for defense in depth (matches the ailx-platform
# entrypoint's approach), skipping when ownership already matches (cheap top-level stat, not
# a full tree walk on every restart).
if [ -d /app ]; then
    owner="$(stat -c '%u:%g' /app)"
    if [ "$owner" != "${PUID}:${PGID}" ]; then
        chown -R "${PUID}:${PGID}" /app
    fi
fi

exec su-exec "${PUID}:${PGID}" "$@"
