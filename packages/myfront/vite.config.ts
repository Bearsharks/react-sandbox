import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "myfront",
      filename: "remoteEntry.js",
      exposes: {
        "./TodoPage": "./src/todo/Todo.tsx",
      },
      remotes: {
        yourfront: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "mylib"],
    }),
  ],
  resolve: {
    alias: {
      "@locales": path.resolve(__dirname, "src/locales"),
    },
  },
  server: {
    port: 5001,
    fs: {
      allow: [".."],
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  preview: {
    port: 5001,
  },
});
