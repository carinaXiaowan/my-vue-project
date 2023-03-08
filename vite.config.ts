import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite'; //导入自定义组件(使用时无需import)
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'; //按需导入Ant Design Vue组件
import AutoImport from 'unplugin-auto-import/vite'; //自动导入vue的相关组合 Api

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router'], //导入的api
      resolvers: [AntDesignVueResolver()], //导入的antd的相关api组件
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    //指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
        additionalData: `@import "@/assets/global.less"; @import "@/assets/main.less";`
      }
    },
    devSourcemap: true
  },
  server: {
    open: true, //在开发服务器启动时自动在浏览器中打开应用程序
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
  // build: {
  //   terserOptions: {},
  // },
});
