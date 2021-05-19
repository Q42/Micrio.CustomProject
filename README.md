# Custom Micrio project boilerplate

## Setup and running

1. Type `npm i` in the project path
2. Type `npm run dev` to start the development version on `http://localhost:8010`. You can change the port in `package.json`

## Building and linking to your Micrio image
1. Type `npm run build`, this produces `public/build/svelte.js` and `public/build/svelte.css`
2. In the Micrio editor of your main image (make sure you are in *advanced edit mode*, using the menu on the top right), open the `Image` menu, and `Settings` tab in the sidebar
3. Scroll to the bottom, you should see a "Custom JS & CSS"-section there (**note** if you only see CSS listed, your account or organisation doesn't support JS uploads-- please contact support@micr.io). Upload your custom files there, and publish the image
4. Now your JS/CSS get auto-loaded when you use your `<micr-io>` tag. To prevent auto-loading the image JS/CSS, add the `no-externals` attribute to the tag (this is the default in `public/index.html`)
5. See `public/prod.html` for an integration example.

Happy coding!
