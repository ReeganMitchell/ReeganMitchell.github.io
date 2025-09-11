<script lang="ts">
import { routerViewLocationKey } from 'vue-router';
import PixiApp from './components/pixiApp/application.vue';

export default {
  components: {
    'PixiApp': PixiApp
  },
  data() {
      return {
      }
  },
  methods: {
    
  }
}
</script>

<template>
  <main id="main">
      <!-- header bar -->
      <div class='header'>
        <div class="inner-header">
          <div class="left">
            <h2>Reegan Mitchell</h2>
          </div>
        </div>
      </div>

      <!-- Main layout -->
      <div class="layout">
        <div class="side-bar">
          <ul>
            <li>
              <RouterLink to="/"><div class="page-link">Home</div></RouterLink>
            </li>
            <li>
              <RouterLink to="/about"><div class="page-link">About me</div></RouterLink>
            </li>
            <li>
              <RouterLink to="/simracing"><div class="page-link">Simracing</div></RouterLink>
            </li>
            <li>
              <RouterLink to="/projects"><div class="page-link">Personal Projects</div></RouterLink>
            </li>
          </ul>

        </div>

        <div class="page-area">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
        </div>

        <!-- <PixiApp/> -->
      </div>
  </main>
</template>

<style scoped>
  @import "./style-common.css";

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #82A2C9;
  }

  .header {
    background-color: whitesmoke;
    width: 100%;
  }

  .layout {
    max-width: 1024px;
    width: 100%;
    height: 1000px;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    margin: 10px;
  }

  .side-bar {
    background-color: whitesmoke;
    border: 2px solid grey;
    width: 20%;
    height: 100%;
    flex-grow: 1;
  }

  .page-area {
    background-color: whitesmoke;
    border: 2px solid grey;
    width: 80%;
    height: 100%;
    margin-left: 1em;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.75s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  ul {
    padding-left: 20%;
    padding-right: 20%;
  }

  .page-link {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  li:not(:last-child) {
    border-bottom: 2px solid black;
  }
</style>
