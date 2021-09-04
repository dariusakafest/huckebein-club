<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavBar/>
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/base/NavBar.vue";
import FooterBar from "@/components/base/FooterBar.vue";

export default {
	components: {
		NavBar,
		FooterBar
	}
};
</script>

