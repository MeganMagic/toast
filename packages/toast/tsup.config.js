import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.tsx', "src/**/*.css"],
    format: ['esm', 'cjs'],
    loader: {
        ".css": "copy",
    },
    bundle: true,
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    treeshake: true,
})
