<script setup>
import { useBurgerStore } from '@/stores/burger'

const burgerStore = useBurgerStore()
</script>

<template>
  <button
    :class="['burger-button', { open: burgerStore.isBurgerOpen }]"
    @click="burgerStore.toggleBurger"
  >
    <span class="burger-button__line"></span>
    <span class="burger-button__line"></span>
    <span class="burger-button__line"></span>
  </button>
</template>

<style lang="scss" scoped>
.burger-button {
  display: none;
  height: 22px;
  padding: 4px 0;
  margin-left: 22px;

  &__line {
    width: 18px;
    height: 2px;

    background-color: $white;
    border-radius: 10px;

    opacity: 1;

    transition: all $trans;
  }

  @include md {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    transform: scale(1.1);
  }
}

.burger-button.open .burger-button__line {
  &:first-child {
    transform: translate(-2px, 7px) rotate(45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:last-child {
    transform: translate(-2px, -5px) rotate(-45deg);
  }
}
</style>
