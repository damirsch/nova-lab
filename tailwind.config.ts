import type { Config } from "tailwindcss"
import * as tailwindAnim from "tailwindcss-animate"

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			xs: "360px",
			"2xs": "400px",
			"3xs": "500px",
			sm: "640px",
			md: "768px",
			"2md": "900px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1800px",
		},
		extend: {
			colors: {
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				"border-primary": "var(--border-primary)",
				"border-secondary": "var(--border-secondary)",
				accent: "var(--accent)",
				"accent-20": "var(--accent-20)",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "sans-serif"],
				lora: ["var(--font-lora)", "serif"],
			},
		},
	},
	plugins: [tailwindAnim],
}

export default config
