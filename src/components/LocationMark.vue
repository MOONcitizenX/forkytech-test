<script setup>
import location from '@/assets/icons/location.svg'
</script>

<template>
  <div class="location">
    <img :src="location" alt="Location" width="12" height="18" />
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

  @include md {
    & > img {
      width: 15px;
      height: 20px;
    }
  }
}
</style>
