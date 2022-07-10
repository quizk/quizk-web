<script setup lang="ts">
// import { ref } from 'vue'
// import RadialProgressBar from 'vue3-radial-progress'

// const totalQuestions = ref(40)
// const answeredQuestions = ref(0)

// function answerQuestion() {
//   if (answeredQuestions.value < totalQuestions.value) {
//     answeredQuestions.value++
//   }
// }
// function deselectQuestion() {
//   if (answeredQuestions.value > 0) {
//     answeredQuestions.value--
//   }
// }
</script>

<template>
  <div class="root">
    <!-- <button @click="deselectQuestion">-</button>
    <radial-progress-bar
      :diameter="200"
      :completed-steps="answeredQuestions"
      :total-steps="totalQuestions"
      :animateSpeed="300"
      start-color="#FFA800"
      stop-color="#D68600"
    >
      <span class="progress">
        {{ `${answeredQuestions} / ${totalQuestions}` }}
      </span>
    </radial-progress-bar>
    <button @click="answerQuestion">+</button> -->
  </div>
</template>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;

  // .progress {
  //   font-size: 20px;
  //   color: var(--color-white);
  // }

  // button {
  //   color: var(--color-white);
  //   font-size: 20px;
  //   border-radius: 5px;
  //   padding: 10px 20px;
  //   margin: 0 20px;
  //   background-color: var(--color-primary-soft);
  // }
}
</style>
