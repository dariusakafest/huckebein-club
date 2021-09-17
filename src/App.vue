<template>
  <div id="app">
    <NavBar v-if="!isAdmin" />
    <router-view />
    <FooterBar v-if="!isAdmin" />
  </div>
</template>

<script>
import NavBar from "@/components/base/NavBar.vue";
import FooterBar from "@/components/base/FooterBar.vue";

export default {
	name: 'app',
	components: {
		NavBar,
		FooterBar
	},
	computed: {
		isAdmin: {
			get() {
				return this.$store.state.isAdmin;
			},
			set(value) {
				this.$store.commit("isAdmin", value);
			}
		}
	},
	mounted() {
		this.isAdmin = false;
	},

};
</script>

