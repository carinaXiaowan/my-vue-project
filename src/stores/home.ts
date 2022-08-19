import { defineStore } from "pinia";

export const homeStore = defineStore("homeStore", {
  state: () => ({
    firstName: "carina",
    lastName: "chen",
  }),
  getters: {
    fullName: (state) => state.firstName + state.lastName,
  },
  actions: {
    setFirstName(data: string) {
      this.firstName = data;
    },
  },
});
