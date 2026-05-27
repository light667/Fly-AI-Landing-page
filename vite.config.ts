// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
// 1. Force l'injection des variables d'environnement pour Nitro/Vinxi avant tout chargement
process.env.NITRO_PRESET = "vercel";
process.env.SERVER_PRESET = "vercel";

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const config = defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel"
    },
  },
});

// 2. Mutation de l'objet pour écraser toute configuration Cloudflare résiduelle
if (!config.server) config.server = {};
config.server.preset = "vercel";

if (!(config as any).tanstackStart) (config as any).tanstackStart = {};
if (!(config as any).tanstackStart.server) (config as any).tanstackStart.server = {};
(config as any).tanstackStart.server.preset = "vercel";

export default config;
