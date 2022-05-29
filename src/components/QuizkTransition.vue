<script setup lang="ts">
import { TRANSITION_TYPES } from '@/data/constants'
defineProps({
  type: {
    type: String as () => TRANSITION_TYPES,
    default: TRANSITION_TYPES.SLIDE_UP
  }
})
</script>

<template>
  <Transition :name="type" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease-out;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
