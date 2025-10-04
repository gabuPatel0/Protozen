import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Protozen';
  
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [...mochaPlugins(process.env as any), react(), cloudflare()],
    base: isGitHubPages ? `/${repoName}/` : '/',
    server: {
      host: true,
    },
    build: {
      chunkSizeWarningLimit: 5000,
      outDir: 'dist',
      assetsDir: 'assets',
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
