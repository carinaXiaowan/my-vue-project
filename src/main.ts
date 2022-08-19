import { createApp } from "vue";
import App from "./App.vue";
import { install } from "./plugins/install";
// 样式
import "./assets/main.css";

// 创建实例
const app = createApp(App);

// 挂载实例
app.use(install).mount("#app");
