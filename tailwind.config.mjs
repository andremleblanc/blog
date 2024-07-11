/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: { themes: ["retro", "dim"] },
	theme: { extend: {} },
	plugins: [require('daisyui')],
}

// module.exports = {
// 	darkMode: ['variant', '[data-theme="dim"]'],
// }
