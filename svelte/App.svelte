<script>
	import Intro from './Intro.svelte'

	// The Micrio HTML container element
	export let _micrio;

	// The running, ready-to-use Micrio instance
	let micrio = null;

	// If not fully initialized yet, wait for it
	if(!_micrio.micrio || !_micrio.micrio.camera)
		_micrio.addEventListener('preset', e => micrio = e.detail)

	// Otherwise immediately useable
	else micrio = _micrio.micrio;

	// Show/hide the intro popover
	let introShown = true;

	// Don't show intro when on i.micr.io and deeplinked tour/marker
	if(location.hostname == 'i.micr.io')
		introShown = location.pathname.split('/').length < 5;

	// Force a tour start when the user closes the intro
	const startTour = location.hash.substr(1) == 'tour';

	// User has closed the intro screen
	function start(doTour){
		introShown = false;
		if(doTour === true || startTour) {
			const tour = micrio.modules.markerTours[0];
			if(!tour) console.error('No tours found!')
			else tour.start();
		}
	}

	$: feedbackLink = micrio && micrio.custom.feedbackLink;

</script>

{#if introShown}
	<Intro content={micrio && (micrio.custom.intro||{})} showTourButton={!startTour} micrio={micrio}
		on:close={start} on:tour={() => start(true)} />
{/if}

{#if feedbackLink}<a class="feedback" href={feedbackLink}>Feedback</a>{/if}

<style>
	a.feedback {
		position: absolute;
		bottom: 5px;
		left: 5px;
		display: block;
		background-color: #e11b22;
		border: none;
		color: inherit;
		font: inherit;
		font-weight: bold;
		padding: 10px 25px;
		cursor: pointer;
		margin: 0 10px 10px 10px;
		color: #fff;
		text-decoration: none;
		opacity: .75;
	}

	a.feedback:hover {
		opacity: 1;
	}

</style>
