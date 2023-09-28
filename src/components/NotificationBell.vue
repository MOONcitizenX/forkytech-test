<script setup>
import bell from '@/assets/icons/bell.svg'
import { useNotificationStore } from '@/stores/notification'
import { useBurgerStore } from '@/stores/burger'

const notificationStore = useNotificationStore()
const burgerStore = useBurgerStore()
</script>

<template>
  <button
    :class="[
      'bell',
      {
        active: !notificationStore.isNotificationChecked,
        hidden: burgerStore.isBurgerOpen
      }
    ]"
    @click="notificationStore.checkNotification"
  >
    <img :src="bell" alt="Bell" />
  </button>
</template>

<style lang="scss">
.bell {
  margin-left: 37px;

  position: relative;

  transition:
    transform $trans,
    opacity $trans;
  opacity: 1;
  pointer-events: all;

  &:after {
    opacity: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}

.bell.active {
  & img {
    animation: shaking 2s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;

    width: 10px;
    height: 10px;

    background-color: $light-blue;
    border: 2px solid $dark;
    border-radius: 50%;

    opacity: 1;

    transition: opacity $trans;

    animation: scale 2s linear infinite;
  }
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  24% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes shaking {
  0% {
    transform: rotate(0deg);
  }
  4% {
    transform: rotate(20deg);
  }
  8% {
    transform: rotate(0deg);
  }
  12% {
    transform: rotate(-20deg);
  }
  16% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(20deg);
  }
  24% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
