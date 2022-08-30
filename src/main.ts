import { createApp } from 'vue';
import App from './App.vue';
import {getGlobalComponent} from './components/index'
import { install } from './plugins/install';

// 创建实例
const app = createApp(App);
// 全局组件
getGlobalComponent(app);
// 挂载实例
app.use(install).mount('#app');
