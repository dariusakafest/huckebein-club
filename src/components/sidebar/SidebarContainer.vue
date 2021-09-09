<template>
  <div class="sidebar pt-120">
    <div class="sidebar-wrap">
      <!-- header -->
      <SidebarHeader />
      <!--  -->
      <SidebarItems />
    </div>
  </div>

</template>

<script>
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";
export default {
	name: "sidebar",
	components: {
		SidebarHeader,
		SidebarItems
	}
};
</script>

<style>
</style>
