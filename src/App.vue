<script lang="ts">
import { routerViewLocationKey } from 'vue-router';
import Intro from './components/intro/Intro.vue';

export default {
  components: {
    'Intro': Intro
  },
  data() {
      return {
          toggle1: false,
          canplayanim: false
      }
  },
  methods: {
    handleToggle1() {
      this.toggle1 = !this.toggle1;
      this.canplayanim = window.getComputedStyle(document.querySelector("main")!).getPropertyValue("flex-direction") == "row";
      this.$nextTick(() => {
        if (this.toggle1 && !this.canplayanim) {document.getElementById('a')!.scrollIntoView({behavior: 'smooth'})}
      });
    }
  }
}
</script>

<template>
  <main id="main">
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <!-- <div class="intro">
        <button type="button" v-on:click="">Click Me!</button> 
      </div> -->
      <Intro :class="{ moveleft: (toggle1 && canplayanim), moveright: (!toggle1 && canplayanim)}" @toggle1clicked="handleToggle1"/>
      <Transition>
        <div id="a" class="a" v-show="toggle1"></div>
      </Transition>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
  }

  .a {
    min-width: 720px;
    max-width: 1024px;
    min-height: 1024;
    width: 100%;
    height: 1000px;
    background-color: whitesmoke;
    display: inline-block;
    border: 2px solid grey;
    border-radius: 20px;
    margin: 10px;
  }

  @media only screen and (max-width: 1440px) {
    main {
      flex-direction: column;
      align-items: center;
    }
  }
  @keyframes moveIntro {
    0% {transform: translateX(50%)}
    100% {transform: translateX(0)}
  }
  @keyframes moveIntro2 {
    0% {transform: translateX(0)}
    100% {transform: translateX(50%)}
  }
  .moveleft {
    animation-name: moveIntro;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .moveright {
    animation-name: moveIntro2;
    animation-duration: 1003ms;
    animation-fill-mode: none;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .v-enter-active {
  transition: opacity 1s ease;
}

.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
