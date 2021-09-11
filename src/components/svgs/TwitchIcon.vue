<template>
  <svg :class="`fill-${fill}`" height="512" viewBox="0 0 176 176" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="twitch"><path d="m52.06 42.56v69.35h21.57v14.33l14.37-14.33h26.36l16.78-16.74v-52.61zm35.94 47.84h-9.58v-28.7h9.58zm26.35 0h-9.59v-28.7h9.59z"/><path d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-11.29 100-28.71 28.65h-21.61l-14.39 14.35h-14.36v-14.35h-26.35v-76.51l7.18-19.14h98.24z"/></g></g></svg>
</template>

<script>
import fill from "./utilities/fill";
export default {
  name: 'instagram-icon',
  mixins: [fill]
}
</script>

<style>

</style>
