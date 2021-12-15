<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition'

	/*
		For custom fields, create a JSON object "intro" in the "Custom"
		tab under Image settings in the Micrio editor, like this:

		intro: {
			title: 'your title', // Optional custom title
			subtitle: 'subtitle..',
			button: 'button text',
			mouse: 'text under mouse',
			audio: 'audio notice'
		}
	*/

	// The Micrio image instance
	export let micrio;

	// Use custom JSON content from the Micrio editor
	export let content;

	export let showTourButton = false;

	// Event dispatcher
	const dispatch = createEventDispatcher();

	// For fading in
	let shown;

	onMount(() => shown = true);
</script>

{#if shown}
<div class="intro-background" transition:fade>
	{#if micrio}
		<section transition:fade>
			<h1>{content.title || micrio.data.title}</h1>
			{#if content.subtitle}<h2>{content.subtitle}</h2>{/if}
			<div class="buttons">
				<button on:click={() => dispatch('close')}>{showTourButton && content.buttonFreeRoam || content.button || 'start'}</button>
				{#if showTourButton && content.buttonTour}
					<button on:click={() => dispatch('tour')}>{content.buttonTour}</button>
				{/if}
			</div>
			<div class="flex">
				<div>
					<img src="https://b.micr.io/fNwBG/app/img/mouse.png" alt="Mouse" />
					<p>{content.mouse || 'Use your mouse'}</p>
				</div>
				<div>
					<img src="https://b.micr.io/fNwBG/app/img/headphone.png" alt="Sound" />
					<p>{content.audio || 'Turn on your sound'}</p>
				</div>
			</div>
		</section>
	{/if}
</div>
{/if}

<style>
	.intro-background {
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.25);
	}
	section {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 860px;
		max-width: 95vw;
		height: auto;
		box-sizing: border-box;
		transform: translate(-50%,-50%);
		background: rgba(64,113,148,.55);
		background: #164268;
		background: rgba(23,82,134,.65);
		color: #fff;
		padding: 60px;
		text-align: center;
		font-size: .9rem;
		user-select: text;
	}

	h1 {
		font-size: 250%;
		margin: 0;
	}
	h2 {
		font-size: 130%;
		font-weight: 600;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
	div.buttons {
		margin-top: 30px;
	}
	button {
		background-color: #e11b22;
		border: none;
		color: inherit;
		font: inherit;
		font-size: 200%;
		font-weight: bold;
		padding: 10px 25px;
		cursor: pointer;
		margin: 0 10px 10px 10px;
	}
	div.flex {
		display: flex;
		margin-top: 30px;
		justify-content: space-around;
	}
	div.flex div {
		flex: 0 1 240px;
	}
	div.flex div img {
		height: 60px;
	}
	div.flex div p {
		width: 80%;
		margin: 0 auto;
		font-size: 90%;
		line-height: 135%;
	}

	@media screen and (max-width: 768px) {
		button {
			font-size: 150%;
		}
	}
	@media screen and (max-width: 600px) {
		section {
			font-size: .9rem;
			padding: 40px;
		}
		button {
			display: block;
			width: 100%;
			margin-bottom: 10px;
		}
	}
	@media screen and (max-width: 420px) {
		section {
			font-size: .85rem;
		}
		div.flex div p {
			width: 95%;
			font-size: 95%;
		}
	}
	@media screen and (max-width: 375px) {
		section {
			font-size: .75rem;
		}
		button {
			font-size: 150%;
		}
	}

	@media screen and (max-height: 568px) {
		div.flex {
			display: none;
		}
		button {
			font-size: 150%;
		}
	}

</style>
