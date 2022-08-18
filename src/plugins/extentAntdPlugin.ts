import type { App } from "vue";
import { message, notification, Modal } from "ant-design-vue";
import DatePicker from "ant-design-vue/es/date-picker/moment";
import TimePicker from "ant-design-vue/es/time-picker/moment";
import Calendar from "ant-design-vue/es/calendar/moment";
import "ant-design-vue/dist/antd.less";

export function getExtentAntdPlugin(app: App<Element>) {
  // 替换moment为dayjs
  app.use(DatePicker).use(TimePicker).use(Calendar);
  // antd全局配置
  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
  app.config.globalProperties.$confirm = Modal.confirm;
}
