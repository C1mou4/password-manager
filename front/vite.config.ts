import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(import.meta.dirname, "."),
			"@components": path.resolve(import.meta.dirname, "./components"),
		},
	},
	server: {
		proxy: {
			"/create": {
				target: "http://localhost:3006",
				changeOrigin: true,
			},
		},
	},
});
