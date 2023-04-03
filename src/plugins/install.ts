import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import Antd from 'ant-design-vue';
import { message, notification, Modal } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from '../router';

export function install(app: App<Element>) {
  // antd全局配置 （optional API全局使用   或者使用getCurrentInstance获取的proxy去获取）
  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
  app.config.globalProperties.$confirm = Modal.confirm;
  app.config.globalProperties.globalData = {
    name: 'carina'
  };

  // 状态
  const pinia = createPinia();
  pinia.use(piniaPersist); //缓存数据，解决pina刷新数据丢失问题
  app.use(pinia);
  // 路由
  app.use(router);
  app.use(Antd);

  // provide/inject全局注册
  // app.provide("$message", message);
  // app.provide("$notification", notification);
  // app.provide("$confirm", Modal.confirm);
}
