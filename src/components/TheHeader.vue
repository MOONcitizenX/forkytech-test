<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useBurgerStore } from '@/stores/burger'

import LocationMark from '@/components/LocationMark.vue'
import NotificationBell from '@/components/NotificationBell.vue'
import BurgerButton from '@/components/BurgerButton.vue'
import NavBar from '@/components/NavBar.vue'

import logo from '@/assets/icons/logo.svg'

const burgerStore = useBurgerStore()

const route = useRoute()

//get posts by category
watch(
  () => route.path,
  () => burgerStore.closeBurger()
)
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <div class="content">
        <router-link to="/">
          <div class="logo">
            <img :src="logo" alt="Logo" />
          </div>
        </router-link>
        <LocationMark class="header-location" />
        <NotificationBell class="header-bell" />
        <BurgerButton />
      </div>
    </div>
  </header>
  <div class="nav-wrapper">
    <NavBar />
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: $dark;
}

.header-container {
  display: flex;
  flex-direction: column;
}

.content {
  padding: 8px 0 9px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include md {
    padding: 11px 0 11px;
  }
}
.header-location {
  @include md {
    display: none;
  }
}

.header-bell {
  @include md {
    margin-left: auto;
  }
}

.nav-wrapper {
  background-color: $white;

  @include md {
    display: contents;
  }
}
</style>
