<script setup lang="ts">
import { reactive, ref } from 'vue'
enum MODE {
  LOGIN = 'login',
  REGISTER = 'register'
}
const state = reactive({
  currentMode: MODE.LOGIN
})
function toggleMode() {
  state.currentMode =
    state.currentMode === MODE.LOGIN ? MODE.REGISTER : MODE.LOGIN
}
</script>

<template>
  <div class="root">
    <div
      :class="['container', { active: state.currentMode === MODE.REGISTER }]"
    >
      <div class="card"></div>
      <div class="card">
        <h1 class="title">Quizk</h1>
        <form>
          <div class="input-container">
            <input type="text" id="email" required />
            <label for="email">Email</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" id="password" required />
            <label for="password"> Password </label>
            <div class="bar"></div>
          </div>
          <div class="button-container">
            <button><span>Login</span></button>
          </div>
          <div class="footer">
            <a href="#">Forgot your password?</a>
          </div>
        </form>
      </div>
      <div class="card alt">
        <div class="toggle" @click="toggleMode"></div>
        <h1 class="title">
          Register
          <div class="close" @click="toggleMode"></div>
        </h1>
        <form>
          <div class="input-container">
            <input type="text" id="email" required />
            <label for="email">Email</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" id="password" required />
            <label for="password">Password</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" id="confirmPassword" required />
            <label for="confirmPassword">Confirm Password</label>
            <div class="bar"></div>
          </div>
          <div class="button-container">
            <button><span>Next</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
  flex: 1;
  margin: auto auto;
}
/* Container */
.container {
  position: relative;
  max-width: 460px;
  width: 100%;
  margin: 0 auto 100px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

  &.active {
    .card {
      &:first-child {
        background: var(--color-white);
        margin: 0 15px;
      }

      &:nth-child(2) {
        background: var(--color-white);
        margin: 0 10px;
      }

      &.alt {
        top: 20px;
        right: 0;
        width: 100%;
        min-width: 100%;
        height: auto;
        border-radius: 5px;
        padding: 60px 0 40px;
        overflow: hidden;

        .toggle {
          position: absolute;
          top: 40px;
          right: -70px;
          box-shadow: none;
          transform: scale(10);
          transition: transform 0.3s ease;

          &:before {
            content: '';
          }
        }

        .title,
        .input-container,
        .button-container {
          left: 0;
          opacity: 1;
          visibility: visible;
          transition: 0.3s ease;
        }

        .title {
          transition-delay: 0.3s;
        }

        .input-container {
          transition-delay: 0.4s;

          &:nth-child(2) {
            transition-delay: 0.5s;
          }

          &:nth-child(3) {
            transition-delay: 0.6s;
          }
        }

        .button-container {
          transition-delay: 0.7s;
        }
      }
    }
  }
}

/* Card */
.card {
  position: relative;
  background: var(--color-white);
  border-radius: 5px;
  padding: 60px 0 40px 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s ease;

  &:first-child {
    background: var(--color-white);
    height: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0 10px;
    padding: 0;
  }

  /* Title */
  .title {
    position: relative;
    z-index: 1;
    border-left: 5px solid var(--color-primary);
    margin: 0 0 35px;
    padding: 10px 0 10px 50px;
    color: var(--color-primary);
    font-size: 32px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }

  /* Inputs */
  .input-container {
    position: relative;
    margin: 0 60px 50px;

    input {
      outline: none;
      z-index: 1;
      position: relative;
      background: none;
      width: 100%;
      height: 60px;
      border: 0;
      color: #212121;
      font-size: 24px;
      font-weight: 400;

      &:focus {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }

        ~ .bar {
          &:before,
          &:after {
            width: 50%;
          }
        }
      }

      &:valid {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      color: #757575;
      font-size: 24px;
      font-weight: 300;
      line-height: 60px;
      transition: 0.2s ease;
    }

    .bar {
      position: absolute;
      left: 0;
      bottom: 0;
      background: #757575;
      width: 100%;
      height: 1px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background: var(--color-primary);
        width: 0;
        height: 2px;
        transition: 0.2s ease;
      }

      &:before {
        left: 50%;
      }

      &:after {
        right: 50%;
      }
    }
  }

  /* Button */
  .button-container {
    margin: 0 60px;
    text-align: center;

    button {
      outline: 0;
      cursor: pointer;
      position: relative;
      display: inline-block;
      background: 0;
      width: 240px;
      border: 2px solid #e3e3e3;
      padding: 20px 0;
      font-size: 24px;
      font-weight: var(--font-weight-bold);
      line-height: 1;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.3s ease;

      span {
        position: relative;
        z-index: 1;
        color: #ddd;
        transition: 0.3s ease;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        background: var(--color-primary);
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: -15px 0 0 -15px;
        opacity: 0;
        transition: 0.3s ease;
      }

      &:hover,
      &:active,
      &:focus {
        border-color: var(--color-primary);

        span {
          color: var(--color-primary);
        }
      }

      &:active,
      &:focus {
        span {
          color: var(--color-white);
        }

        &:before {
          opacity: 1;
          transform: scale(10);
          transition: transform;
        }
      }
    }
  }

  /* Footer */
  .footer {
    margin: 40px 0 0;
    color: #d3d3d3;
    font-size: 24px;
    font-weight: 300;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover {
        color: darken(#d3d3d3, 10%);
      }
    }
  }

  /* Alt Card */
  &.alt {
    position: absolute;
    top: 40px;
    right: -70px;
    z-index: 10;
    width: 140px;
    height: 140px;
    background: none;
    border-radius: 100%;
    box-shadow: none;
    padding: 0;
    transition: 0.3s ease;

    /* Toggle */
    .toggle {
      position: relative;
      background: var(--color-primary);
      width: 140px;
      height: 140px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      color: var(--color-white);
      font-size: 58px;
      line-height: 140px;
      text-align: center;
      cursor: pointer;

      &:before {
        content: '+';
        display: inline-block;
        font-size: inherit;
        text-rendering: auto;
        transform: translate(0, 0);
      }
    }

    .title,
    .input-container,
    .button-container {
      left: 100px;
      opacity: 0;
      visibility: hidden;
    }

    /* Title */
    .title {
      position: relative;
      border-color: var(--color-white);
      color: var(--color-white);

      .close {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 60px;
        display: inline;
        color: var(--color-white);
        font-size: 58px;
        font-weight: 400;

        &:before {
          content: '\00d7';
        }
      }
    }

    /* Input */
    .input-container {
      input {
        color: var(--color-white);

        &:focus {
          ~ label {
            color: var(--color-white);
          }

          ~ .bar {
            &:before,
            &:after {
              background: var(--color-white);
            }
          }
        }

        &:valid {
          ~ label {
            color: var(--color-white);
          }
        }
      }

      label {
        color: var(--color-white);
      }

      .bar {
        background: var(--color-white);
      }
    }

    /* Button */
    .button-container {
      button {
        width: 100%;
        background: var(--color-white);
        border-color: var(--color-white);

        span {
          color: var(--color-primary);
        }

        &:hover {
          background: var(--color-white);
        }

        &:active,
        &:focus {
          &:before {
            display: none;
          }
        }
      }
    }
  }
}

/* Keyframes */
@keyframes buttonFadeInUp {
  0% {
    bottom: 30px;
    opacity: 0;
  }
}
</style>
