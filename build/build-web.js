import path from "path";
import { defineConfig, build } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import {visualizer} from 'rollup-plugin-visualizer';
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url));
// 添加打包入口文件夹 packages（需要手动创建）
const entryDir = path.resolve(__dirname, "../src/web-components");
// 添加出口文件夹 lib（不需要手动创建，会自动生成）
const outDir = path.resolve(__dirname, "../lib-web");

// vite 配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(),
  //   compression({
  //   verbose: true, // 输出压缩日志
  //   disable: false, // 是否禁用压缩
  //   threshold: 10240, // 对超过10KB的文件进行压缩
  //   algorithm: 'gzip', // 使用gzip压缩
  //   ext: '.js', // 压缩后文件的扩展名
  // }),
  // visualizer({
  //   open: true, // 是否自动打开浏览器窗口以显示可视化报告
  //   gzipSize: true, // 是否包含 gzip 压缩后的大小
  //   brotliSize: true // 是否包含 Brotli 压缩后的大小
  // })
  ],
  external:{
    'echarts':'echarts'
  }
});

// rollup 配置（vite 基于 rollup 打包）
const rollupOptions = {
  // 这两个库不需要打包
  external: ["vue", "vue-router","element-plus","vant","pinia"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, "index.js"),
          // 组件库名字
          name: "llh-web-ui",
          fileName: "llh-web-ui",
          // 输出格式
          formats: ["es", "umd"],
        },
        outDir,
      },
    })
  );
};

const buildLib = async () => {
  await buildAll();
};

buildLib();
