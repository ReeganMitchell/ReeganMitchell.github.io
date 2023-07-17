<script lang="ts">
export default {
    name: "Intro",
    data() {
        return {
            toggle1: false
        }
    },
    methods: {
        toggle1clicked() {
            this.toggle1 = !this.toggle1;
            this.$emit('toggle1clicked');
        }
    }
}
</script>

<template>
    <div class="view">
        <button href="#a" v-on:click="toggle1clicked">Click Me!</button> 
        <p>Testing moving content boxes and auto scroll</p>
    </div>
</template>

<style>
.view {
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
</style>