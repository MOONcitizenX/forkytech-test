<script setup>
import routes from '@/router/routes'
import { useBurgerStore } from '@/stores/burger'

import LocationMark from '@/components/LocationMark.vue'

const burgerStore = useBurgerStore()
</script>

<template>
  <div :class="['container nav-container', { open: burgerStore.isBurgerOpen }]">
    <nav class="navigation">
      <ul class="navigation__list">
        <li v-for="route in routes" :key="route.to" class="navigation__item">
          <router-link :to="route.to" active-class="active">{{ route.text }}</router-link>
        </li>
      </ul>
    </nav>
    <LocationMark class="location-bottom" />
  </div>
</template>

<style lang="scss" scoped>
$side-padding: 15px;

.nav-container {
  display: block;

  @include md {
    position: absolute;
    padding: 0;

    top: 45px;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: calc(100vh - 46px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition:
      transform 0.4s ease-out,
      opacity 0.4s ease-out;

    transform: translateX(-100%);
    opacity: 0;
  }
  &.open {
    transform: translateX(0);
    opacity: 1;
  }
}
.navigation {
  flex-grow: 1;
  width: 100%;

  background-color: $white;

  @include md {
    padding: 24px $side-padding;
  }
}

.navigation__list {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;

  border-bottom: 1px solid $gray;

  @include md {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    border-bottom: 0;
  }
}

.navigation__item {
  /* padding: 14px 0; */
  @include md {
    /* padding-bottom: 8px; */
    width: 100%;
    border-bottom: 1px solid $gray;
  }

  & a {
    display: block;
    padding: 14px 0;
    border-bottom: 2px solid transparent;

    font-size: 14px;
    font-weight: 400;

    transition:
      border-bottom $trans,
      color $trans;

    @include md {
      padding-bottom: 8px;
      width: 100%;

      font-size: 16px;
      font-weight: 700;
    }
  }

  & &:hover,
  :focus:not(:active) {
    color: $dark;
  }
  & .active {
    border-bottom: 2px solid $dark;
    color: $dark;
  }
}

.location-bottom {
  display: none;

  @include md {
    display: flex;
    margin-left: $side-padding;
    margin-top: auto;

    padding: 19px 0;

    background-color: transparent;
  }
}
</style>
