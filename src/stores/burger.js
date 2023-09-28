import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('burger', () => {
  const isBurgerOpen = ref(false)

  function openBurger() {
    isBurgerOpen.value = true
  }

  function closeBurger() {
    isBurgerOpen.value = false
  }

  function toggleBurger() {
    isBurgerOpen.value = !isBurgerOpen.value
  }

  return { isBurgerOpen, openBurger, closeBurger, toggleBurger }
})
