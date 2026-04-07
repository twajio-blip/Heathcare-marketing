import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: '/', // Vercel prefers the root base
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                service: resolve(__dirname, 'service.html'),
                process: resolve(__dirname, 'process.html'),
                work: resolve(__dirname, 'work.html'),
                whowehelp: resolve(__dirname, 'whowehelp.html'),
                technology: resolve(__dirname, 'technology.html'),
                login: resolve(__dirname, 'login.html'),
                signup: resolve(__dirname, 'signup.html'),
                'dental-marketing': resolve(__dirname, 'dental-marketing.html'),
                'hospital-growth': resolve(__dirname, 'hospital-growth.html'),
                'telehealth-scaling': resolve(__dirname, 'telehealth-scaling.html'),
            },
        },
    },
})