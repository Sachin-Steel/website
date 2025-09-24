import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/website/",  // 👈 matches your repo name
    plugins: [react()],
});
