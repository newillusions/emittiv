<script lang="ts">
	import IconLinkedIn from '$lib/icons/social/LinkedIn.svelte';
	import data from '$lib/data/staff.json';

	let people = data.pwople;
</script>

{#each people as person}
	<div class="profile f col">
		<h3>{person.name}</h3>
		<ul>
			{#each person.skills as skill}
				<li>{skill}</li>
			{/each}
		</ul>
		<p>{person.p1}</p>
		<p>{person.p2}</p>
		<div class="socials f row">
			{#if person.linkedin}
				<a href={person.linkedin} target="_blank" class="icon">
					<IconLinkedIn size="36" />
				</a>
			{/if}
		</div>
	</div>
{/each}
