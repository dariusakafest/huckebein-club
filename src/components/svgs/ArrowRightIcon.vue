<template>
  <svg :class="`fill-${fill}`" xmlns="http://www.w3.org/2000/svg" width="47.847" height="47.847" viewBox="0 0 47.847 47.847">
    <path id="Path_2" data-name="Path 2" d="M23.923,47.847A23.923,23.923,0,1,0,0,23.923,23.951,23.951,0,0,0,23.923,47.847Zm0-45.456A21.533,21.533,0,1,1,2.39,23.923,21.557,21.557,0,0,1,23.923,2.39Z" />
    <path id="Path_3" data-name="Path 3" d="M127.6,173.213h17.894l-4.683,4.683a1.2,1.2,0,0,0,1.7,1.688l6.722-6.722a1.19,1.19,0,0,0,0-1.688l-6.722-6.722a1.194,1.194,0,1,0-1.688,1.688l4.683,4.683H127.6a1.2,1.2,0,1,0,0,2.39Z" transform="translate(-114.068 -148.089)" />
  </svg>

</template>

<script>
import fill from "./utilities/fill";
export default {
	name: "arrow-right-icon",
	mixins: [fill]
};
</script>

<style>
</style>
