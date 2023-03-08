import { defineStore } from 'pinia';

export const useAppStore = defineStore('useAppStore', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(data: boolean) {
      this.loading = data;
    }
  },
  persist: {
    enabled: true
  }
});
