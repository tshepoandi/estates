import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        react(),
        viteTsConfigPaths(),
        svgr({
            include: '**/*.svg?react',
        })
    ]
})