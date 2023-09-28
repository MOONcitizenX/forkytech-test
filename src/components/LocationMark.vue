<script setup>
import location from '@/assets/icons/location.svg'
</script>

<template>
  <div class="location">
    <img :src="location" alt="Location" />
    <p>Москва и область</p>
  </div>
</template>

<style lang="scss" scoped>
.location {
  margin-left: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
}
</style>
