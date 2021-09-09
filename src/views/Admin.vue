<template>

  <div class="admin" v-if="isAdmin">
    <div class="admin-wrap">
      <SidebarContainer />
      <AdminContainer />
    </div>
  </div>

</template>

<script>
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import AdminContainer from "@/components/admin-layout/AdminContainer";
export default {
	name: "admin",
	components: {
		SidebarContainer,
		AdminContainer
	},
	data() {
		return {};
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
	}
};
</script>

<style>
</style>
