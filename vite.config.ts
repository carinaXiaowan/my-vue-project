import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite'; //导入自定义组件(使用时无需import)
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'; //按需导入Ant Design Vue组件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })]
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
      },
      '/user': {
        //以api3为开始的所有的接口请求
        target: 'http://localhost:3456', //node服务地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/user/, '')
      }
    }
  }
  // build: {
  //   terserOptions: {},
  // },
});
