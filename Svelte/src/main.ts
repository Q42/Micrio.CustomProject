import App from './App.svelte';

// If this is a script included from the Micrio instance itself, it has .micrioElement
const micrio = document.currentScript && document.currentScript['micrioElement']

	// Otherwise check for the first printed <micr-io> tag
	|| document.querySelector('micr-io');

// Starting function
const app = new App({
	target: micrio,
	props: {micrio}
});

export default app;
