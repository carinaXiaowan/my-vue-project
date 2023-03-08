import { createApp } from 'vue';
import App from './App.vue';
import { install } from './plugins/install';
import { loadDirectives } from '@/directives';

// 创建实例
const app = createApp(App);
// 全局指令
loadDirectives(app);
// 挂载实例
app.use(install).mount('#app');
