<script setup lang="ts">
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', is_expanded.value.toString())
}
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="@/assets/logo-quizk.png" alt="Quizk" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/exam" class="button">
        <span class="material-icons">quiz</span>
        <span class="text">Exam</span>
      </router-link>
      <router-link to="/account" class="button">
        <span class="material-icons">person</span>
        <span class="text">Account</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/login" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  color: var(--color-light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  margin-right: 25px;
  .flex {
    flex: 1 1 0%;
  }
  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--color-light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--color-primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  h3 {
    color: var(--color-light);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      .material-icons {
        font-size: 2rem;
        color: var(--color-light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--color-light);
        transition: 0.2s ease-in-out;
      }
      &:hover {
        background-color: var(--color-dark-soft);
        .material-icons,
        .text {
          color: var(--color-primary);
        }
      }
      &.router-link-exact-active {
        background-color: var(--color-dark-soft);
        border-right: 5px solid var(--color-primary);
        .material-icons,
        .text {
          color: var(--color-primary);
        }
      }
    }
  }
  &.is-expanded {
    width: 250px;
    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
