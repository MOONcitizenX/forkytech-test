import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {
  const isNotificationChecked = ref(false)

  function checkNotification() {
    isNotificationChecked.value = true
  }

  return { isNotificationChecked, checkNotification }
})
