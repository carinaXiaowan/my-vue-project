import { defineStore } from "pinia";

export const aboutPinia = defineStore("aboutPinia", {
  state: () => ({
    message: "我是原始消息",
  }),
  actions: {
    setNewMessage(data: string) {
      this.message = data;
    },
  },
});
