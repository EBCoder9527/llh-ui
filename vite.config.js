import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { join, resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, "./src"),
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
        {
            name: 'handle-pdfjs',
            // 自定义插件处理 pdfjs 相关文件
            transform(code, id) {
                if (id.includes('pdfjs')) {
                    return {
                        code: code,
                        map: null
                    }
                }
            },
            generateBundle(options, bundle) {
                // 处理 pdfjs 文件的输出
                for (const fileName in bundle) {
                    if (fileName.includes('pdfjs')) {
                        bundle[fileName].fileName = `pdfjs/${fileName}`;
                    }
                }
            }
        }
    ],
    devServer: {
        host: '0.0.0.0'
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/pdf/index.js'),
            name: 'llh-pdf',
            fileName: 'llh-pdf'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'style.css';
                    return assetInfo.name;
                }
            }
        },
        assetsDir: '',
        assetsInlineLimit: 0,
        base: './'
    },
    define: {
        __PDFJS_PATH__: JSON.stringify(process.env.PDFJS_PATH || '/pdfjs/web/viewer.html')
    }
})