import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useHomeStore = defineStore('useHomeStore', () => {
  const useInfo = reactive({
    firstName: 'carina',
    lastName: 'chen'
  });
  const fullName = computed(() => {
    return useInfo.firstName + useInfo.lastName;
  });
  const setFirstName = (name: any) => {
    useInfo.firstName = name;
  };
  return { useInfo, fullName, setFirstName };
});
