<script lang="ts">
	import { page } from '$app/stores';
	// import * as Icon from '$icons/social';
	import IconFB from '$lib/icons/social/FB.svelte';
	import IconLinkedIn from '$lib/icons/social/LinkedIn.svelte';
	import IconInstagram from '$lib/icons/social/Instagram.svelte';
	import IconTwitter from '$lib/icons/social/Twitter.svelte';
	import IconWhatsApp from '$lib/icons/social/WhatsApp.svelte';
	import data from '$lib/data/nav.json';

	const navPrimary = data.navPrimary;
	const navSecondary = data.navSecondary;

	const current = new Date();
	var year = current.getFullYear().toString();
</script>

<section class="container f row" id="contact" data-label="Contact">
	<div class="split-footer">
		<div class="footer-col order-1">
			<div class="footer-head">Contact</div>
			<div class="footer-body">
				marina, dubai, uae<br />
				hello (at) emittiv.com
			</div>
		</div>
		<div class="footer-col order-2">
			<div class="footer-head">Menu</div>
			<div class="footer-body col">
				{#each navPrimary as item}
					<a class:active={$page.url.pathname === item.path} href={item.path}>{item.title}</a>
				{/each}
			</div>
		</div>
		<div class="footer-col order-3">
			<div class="footer-head">Other Links</div>
			<div class="footer-body col">
				{#each navSecondary as item}
					<a class:active={$page.url.pathname === item.path} href={item.path}>{item.title}</a>
				{/each}
			</div>
		</div>
		<div class="footer-col order-4">
			<div class="footer-head">Connect</div>
			<div class="footer-body row">
				<div class="icons">
					<div class="icon" id="fb">
						<a href="https://www.facebook.com/emittiv" target="_blank" rel="noreferrer">
							<IconFB />
						</a>
					</div>
					<div class="icon" id="linkedin">
						<a href="https://www.linkedin.com/company/emittiv/" target="_blank" rel="noreferrer">
							<IconLinkedIn />
						</a>
					</div>
					<div class="icon" id="instagram">
						<a href="https://www.instagram.com/emittiv" target="_blank" rel="noreferrer">
							<IconInstagram />
						</a>
					</div>
					<!-- <div class="icon" id="youtube">
                            <a href="https://www.instagram.com/emittiv" target="_blank">
                                <IconYouTube/>
                            </a>
                        </div> -->
					<div class="icon" id="twitter">
						<a href="https://twitter.com/emittiv" target="_blank" rel="noreferrer">
							<IconTwitter />
						</a>
					</div>
					<div class="icon" id="whatsapp">
						<a href="https://wa.me/971585855569" target="_blank" rel="noreferrer">
							<IconWhatsApp />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="copyright">
	&copy; {year} emittiv llc-fz. all rights reserved.
</div>

<style lang="scss">
	a {
		display: block;
		margin-bottom: 0.25rem;
		transition: all 0.2s ease-in-out;
	}

	a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25rem;
	}

	.active {
		color: #f8982b;
	}

	.icons {
		flex-direction: row;
		width: 100%;
		align-items: center;
		align-content: center;
		margin-bottom: 1rem;

		.icon {
			height: 2rem;
			width: 2rem;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			color: #999999;
			// background-color: #444;
			padding: 0.15rem;
			margin-right: 0.75rem;
			border-radius: 7px;
			transition: all 0.2s ease-in-out;
		}
		.icon:hover {
			color: #f8982b;
		}
	}
	.copyright {
		width: 100%;
		font-size: small;
		align-items: center;
		text-align: center;
		padding: 1rem;
	}
</style>
