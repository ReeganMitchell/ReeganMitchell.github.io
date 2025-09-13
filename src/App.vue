<script lang="ts">
import PixiApp from './components/pixiApp/application.vue'

export default {
  components: {
    PixiApp: PixiApp
  },
  created() {
    this.getTime()
    setInterval(this.getTime, 5000)
  },
  data() {
    return {
      timestamp: ''
    }
  },
  methods: {
    getTime() {
      const today = new Date()
      const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
      const time =
        today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
      const dateTime = date + ' ' + time
      this.timestamp = dateTime
    }
  }
}
</script>

<template>
  <main id="main">
    <!-- header bar -->
    <div class="header">
      <div class="inner-header">
        <div class="left">
          <h2>Reegan OS</h2>
        </div>
        <div class="right">
          <h2>{{ timestamp }}</h2>
        </div>
      </div>
    </div>

    <!-- Main layout -->
    <div class="layout">
      <div class="padding"></div>
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
      <div class="padding"></div>
    </div>
  </main>
</template>

<style scoped>
@import './style-common.css';

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #82a2c9;
}

.header {
  background-color: whitesmoke;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-header {
  max-width: 1920px;
  width: 100%;
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.inner-header > .right {
  text-align: right;
}

.layout {
  max-width: 1044px;
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: row;
  margin: 10px;
}

.padding {
  width: 1%;
}

.side-bar {
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 10px;
  width: 20%;
  min-width: fit-content;
  height: 100%;
}

.page-area {
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 10px;
  width: 78%;
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
