FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
ENV DOCKER_BUILD=true
RUN npm run build

# ---- Runtime ----
#
# PUID/PGID (Unraid best practice, docs.unraid.net "Managing and Customizing Containers":
# "PUID=99 and PGID=100: These set the user and group IDs for file permissions") - same
# shape as linuxserver.io images and this workspace's watchdog/anchor/ailx entrypoints
# (decision:oc236l222dcnewii0vw6, 2026-09-12). The container starts as root and
# docker-entrypoint.sh drops to PUID:PGID (default 99:100, nobody:users) via `su-exec`
# before exec'ing node. `su-exec` is alpine's lightweight gosu equivalent; `shadow` supplies
# real usermod/groupmod (busybox's own adduser/addgroup applets can create a user but not
# remap an existing one's ids).
FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache su-exec shadow \
  && addgroup -S emittiv && adduser -S emittiv -G emittiv

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

COPY docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

# No USER line here (deliberate): the container must start as root so docker-entrypoint.sh
# can remap the "emittiv" user/group to PUID/PGID and chown /app, then it drops privileges
# itself via su-exec before exec'ing node - see docker-entrypoint.sh.
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["node", "build"]
