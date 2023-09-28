<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 100px 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
