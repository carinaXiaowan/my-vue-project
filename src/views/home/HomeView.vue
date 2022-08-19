<script setup lang="ts">
import { storeToRefs } from "pinia";
import TheWelcome from "@/components/TheWelcome.vue";
import { homePinia } from "@/stores/home";
const homePinaData = homePinia();
const { fullName } = storeToRefs(homePinaData);
</script>

<template>
  <main>
    {{ fullName }}
    <TheWelcome />
  </main>
</template>
