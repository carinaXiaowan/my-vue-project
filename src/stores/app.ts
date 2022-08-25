import { defineStore } from 'pinia';

export const appPinia = defineStore('appPinia', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(data: boolean) {
      this.loading = data;
    }
  }
});
