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
      <h1>Quizk</h1>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h2>Menu</h2>
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
  background-color: var(--color-white);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  margin-right: 25px;
  border-radius: 0 25px 25px 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 10px 12px;
  .flex {
    flex: 1 1 0%;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 2rem;
      margin-right: 20px;
    }
    h1 {
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
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
        color: var(--color-primary);
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
  h2,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  h2 {
    color: var(--color-primary);
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
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
        color: var(--color-primary);
        transition: 0.2s ease-in-out;
      }
      .text {
        font-weight: var(--font-weight-bold);
        color: var(--color-primary);
        transition: 0.2s ease-in-out;
      }
      &:hover {
        background-color: var(--color-primary);
        .material-icons,
        .text {
          color: var(--color-light);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--color-primary);
        .material-icons,
        .text {
          color: var(--color-primary);
        }

        &:hover {
          .material-icons,
          .text {
            color: var(--color-light);
          }
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
    h2,
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
