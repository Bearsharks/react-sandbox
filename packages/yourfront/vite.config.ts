import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "yourfront",
      filename: "remoteEntry.js",
      exposes: {
        "./SungPage": "./src/sung/Sung.tsx",
      },
      remotes: {
        myfront: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "mylib"],
    }),
  ],
  server: {
    port: 5002,
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
    port: 5002,
  },
});
