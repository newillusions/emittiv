<script lang="ts">
	import { page } from '$app/stores';
	import data from '$lib/data/nav.json';

	const navPrimary = data.navPrimary;
	const navSecondary = data.navSecondary;

	const menuState = {
		state: 'closed'
	};

	function navToggle() {
		const fnc = menuState.state;
		if (fnc === 'closed') {
			navOpen();
		} else if (fnc === 'open') {
			navClose();
		}
	}

	function navOpen() {
		const div = document.getElementById('nav-overlay');
		const menuBtn = document.querySelector('.menu-btn');
		if (div) {
			div.style.height = '100%';
		}
		if (menuBtn) {
			menuBtn.classList.add('open');
		}
		menuState.state = 'open';
	}

	function navClose() {
		var div = document.getElementById('nav-overlay');
		const menuBtn = document.querySelector('.menu-btn');
		if (div) {
			div.style.height = '0%';
		}
		if (menuBtn) {
			menuBtn.classList.remove('open');
		}
		menuState.state = 'closed';
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="nav-overlay f col center middle" id="nav-overlay" on:click={navClose}>
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
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-btn" class:open={menuState.state === 'open'} on:click={navToggle}>
	<div class="menu-btn__burger" />
</div>
<span class="hidden">
	{menuState.state}
</span>

<style scoped lang="scss">
	.active {
		color: #f8982b;
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
		transition: all 0.4s ease-in-out;
		z-index: 10;
	}

	.hidden {
		display: none;
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
	.navItem:hover {
		text-decoration: underline;
		text-underline-offset: 0.25rem;
	}

	//////////////////////////////////

	.menu-btn {
		position: fixed;
		top: 1rem;
		right: 1rem;
		// position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2em;
		height: 45px;
		// width: 80px;
		// height: 80px;
		cursor: pointer;
		// opacity: 0.5;
		transition: all 0.5s ease-in-out;
		z-index: 11;
	}

	// .menu-btn:hover {
	//     opacity: 1;
	// }

	.menu-btn__burger {
		width: 2em;
		height: 7px;
		// display: inline-block;
		background-color: #f8982b;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
		// margin-top: 8px;
	}

	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 2em;
		height: 7px;
		background-color: #f8982b;
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
