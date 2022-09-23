/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');

/* Exporting the plugins that are being used on tailwinds */
module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
