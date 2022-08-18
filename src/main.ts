import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import { getExtentAntdPlugin } from "./plugins/extentAntdPlugin";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";

// 样式
import "./assets/main.css";
// 创建实例
const app = createApp(App);
// 状态
app.use(createPinia());
// 路由
app.use(router);
// 插件(antdesign-vue)
getExtentAntdPlugin(app);
app.use(Antd);
// 挂载实例
app.mount("#app");
