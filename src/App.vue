<script setup lang="ts">
import { computed } from 'vue'
import Navigator from '@/components/Navigator.vue'
import { RouterView } from 'vue-router'
import { RouteMeta } from '@/router/index'
import QuizkTransition from '@/components/QuizkTransition.vue'
import { useRoute } from 'vue-router'

const transitionType = computed(() => {
  return (useRoute().meta as RouteMeta).transitionType
})
</script>

<template>
  <div class="app">
    <!-- Sidebar navigator -->
    <Navigator />

    <!-- View that will be rendered by the router -->
    <RouterView v-slot="{ Component }">
      <QuizkTransition :type="transitionType">
        <component :is="Component" />
      </QuizkTransition>
    </RouterView>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.css';
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
