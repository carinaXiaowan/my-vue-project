import { defineStore } from "pinia";

export const homePinia = defineStore("homePinia", {
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
