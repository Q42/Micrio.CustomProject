import App from './App.svelte';

// If this is a script included from the Micrio instance itself, it has .micrioElement
const micrio = document.currentScript && document.currentScript['micrioElement']

	// Otherwise check for the first printed <micr-io> tag
	|| document.querySelector('micr-io');

// Starting function
function start(el=micrio){ el && new App({target: el, props: {micrio: el}}) }

// If element, already place, the rest of the Micrio loading is handled inside Svelte
if(micrio) start();

// Otherwise wait for the DOM to load
else addEventListener('DOMContentLoaded', () => start(document.querySelector('micr-io')))
