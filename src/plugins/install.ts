import type { App } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import { message, notification, Modal } from 'ant-design-vue'
import DatePicker from 'ant-design-vue/es/date-picker/moment'
import TimePicker from 'ant-design-vue/es/time-picker/moment'
import Calendar from 'ant-design-vue/es/calendar/moment'
import router from '../router'
import 'ant-design-vue/dist/antd.less'

export function install(app: App<Element>) {
  // 状态
  app.use(createPinia())
  // 路由
  app.use(router)
  app.use(Antd)
  // 替换moment为dayjs
  app.use(DatePicker).use(TimePicker).use(Calendar)
  // antd全局配置 （optional API全局使用   或者使用getCurrentInstance获取的proxy去获取）
  app.config.globalProperties.$message = message
  app.config.globalProperties.$notification = notification
  app.config.globalProperties.$confirm = Modal.confirm
  app.config.globalProperties.globalData = {
    name: 'carina'
  }
  // provide/inject全局注册
  // app.provide("$message", message);
  // app.provide("$notification", notification);
  // app.provide("$confirm", Modal.confirm);
}
