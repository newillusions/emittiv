<script lang="ts">
	import { tick } from 'svelte';
	import { page } from '$app/stores';
	import data from '$lib/data/nav.json';

	const navPrimary = data.navPrimary;
	const navSecondary = data.navSecondary;

	let isOpen = $state(false);
	let button: HTMLButtonElement | undefined = $state();
	let overlay: HTMLDivElement | undefined = $state();

	function navToggle() {
		isOpen = !isOpen;
		if (isOpen) focusFirstLink();
	}

	function navClose() {
		isOpen = false;
	}

	async function focusFirstLink() {
		// the overlay is inert until the next render, so wait for it
		await tick();
		overlay?.querySelector<HTMLElement>('a')?.focus();
	}

	function focusables(): HTMLElement[] {
		const links = Array.from(overlay?.querySelectorAll<HTMLElement>('a[href]') ?? []);
		return button ? [...links, button] : links;
	}

	function onWindowKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			navClose();
			button?.focus();
			return;
		}
		if (e.key !== 'Tab') return;
		// keep focus inside the open menu (links + close button), never the page behind it
		const items = focusables();
		if (items.length === 0) return;
		const first = items[0];
		const last = items[items.length - 1];
		const active = document.activeElement;
		if (e.shiftKey && (active === first || !items.includes(active as HTMLElement))) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && (active === last || !items.includes(active as HTMLElement))) {
			e.preventDefault();
			first.focus();
		}
	}
</script>

<svelte:window onkeydown={onWindowKeydown} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div
	bind:this={overlay}
	id="site-nav"
	class="nav-overlay f col center middle"
	class:open={isOpen}
	inert={!isOpen}
	onclick={navClose}
>
	<nav aria-label="Main navigation">
		<div class="split">
			<div class="nav-list v-padding-1 f center left col">
				<ul>
					{#each navPrimary as item}
						<li>
							<a class="navItem" class:active={$page.url.pathname === item.path} href={item.path}
								>{item.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="nav-list wide v-padding-1 f center left col">
				<ul>
					{#each navSecondary as item}
						<li>
							<a
								class="navItem-small"
								class:active={$page.url.pathname === item.path}
								href={item.path}>{item.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</div>
<button
	bind:this={button}
	type="button"
	class="menu-btn"
	class:open={isOpen}
	onclick={navToggle}
	aria-expanded={isOpen}
	aria-controls="site-nav"
	aria-label="Toggle navigation menu"
>
	<span class="menu-btn__burger"></span>
</button>

<style scoped lang="scss">
	.active {
		color: var(--splash);
	}

	.nav-list {
		display: flex;
		min-width: 30%;
	}

	.nav-overlay {
		position: fixed;
		width: 100%;
		height: 0%;
		background-color: rgba(0, 0, 0, 0.9);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: height 0.4s ease-in-out;
		z-index: 10;

		&.open {
			height: 100%;
		}
	}

	.wide {
		width: 100%;
	}

	.navItem {
		display: block;
		font-size: 2rem;
		line-height: 2.5rem;
		padding-left: 1rem;
		margin-bottom: 1rem;
		transition: all 0.2s ease-in-out;
	}

	.navItem-small {
		display: block;
		font-size: 1rem;
		line-height: 2.65rem;
		padding-left: 1rem;
		margin-bottom: 1rem;
		transition: all 0.2s ease-in-out;
	}

	.navItem-small:hover,
	.navItem:hover,
	.navItem-small:focus-visible,
	.navItem:focus-visible {
		text-decoration: underline;
		text-underline-offset: 0.25rem;
	}

	.navItem-small:focus-visible,
	.navItem:focus-visible,
	.menu-btn:focus-visible {
		outline: 2px solid var(--splash);
		outline-offset: 4px;
	}

	.menu-btn {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2em;
		height: 45px;
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
		z-index: 11;
	}

	.menu-btn__burger {
		display: block;
		width: 2em;
		height: 7px;
		background-color: var(--splash);
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}

	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 2em;
		height: 7px;
		background-color: var(--splash);
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}

	.menu-btn__burger::before {
		transform: translateY(-16px);
	}

	.menu-btn__burger::after {
		transform: translateY(16px);
	}

	/* ANIMATION */
	.menu-btn.open .menu-btn__burger {
		transform: translateX(-50px);
		background: transparent;
		box-shadow: none;
	}

	.menu-btn.open .menu-btn__burger::before {
		transform: rotate(45deg) translate(35px, -35px);
	}

	.menu-btn.open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(35px, 35px);
	}
</style>
