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
	function start(){
		introShown = false;
		if(startTour) {
			const tour = micrio.modules.markerTours[0];
			if(!tour) console.error('No tours found!')
			else tour.start();
		}
	}

</script>

{#if introShown}
	<Intro content={micrio && (micrio.custom.intro||{})} micrio={micrio} on:close={start} />
{/if}
