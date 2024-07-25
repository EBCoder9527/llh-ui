
import path  from 'path'
import {defineConfig, build} from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))
// 添加打包入口文件夹 packages（需要手动创建）
const entryDir = path.resolve(__dirname, '../src/eb-h5-ui')
// 添加出口文件夹 lib（不需要手动创建，会自动生成）
const outDir = path.resolve(__dirname, '../lib-h5')

// vite 配置
const baseConfig = defineConfig({
	configFile: false,
	publicDir: false,
	plugins: [vue()]
})

// rollup 配置（vite 基于 rollup 打包）
const rollupOptions = {
    // 这两个库不需要打包
	external: ['vue', 'vue-router'],
	output: {
		globals: {
			vue: 'Vue'
		}
	}
}

//全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.js'),
		    // 组件库名字
        name: 'eb-h5-ui',
        fileName: 'eb-h5-ui',
		    // 输出格式
        formats: ['es', 'umd']
      },
      outDir
    }
  }))
}


const buildLib = async () => {
  await buildAll()
}

buildLib()
