import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Static SPA build. `npm run build` outputs to dist/ — host as plain static files
// (GitHub Pages, Netlify, S3, etc.). `base: "./"` makes asset URLs relative so
// the app works under any subpath (e.g. https://user.github.io/repo/).
export default defineConfig({
  base: "/deli-demo/",
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
