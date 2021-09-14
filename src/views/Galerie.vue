<template>
  <div class="galleries bg-gradient-black pt-120">
    <div class="container">
      <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">galerie</h2>
      <div class="row">
        <div class="col-lg-6 mb-4" v-for="gallery in galeries" :key="gallery.id">
          <card :title="gallery.title"  :img="gallery.img"  :eventId="gallery.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/base/card/Card";
import { mapGetters } from "vuex";
export default {
	name: "galerie",
	components: {
		Card
	},
	computed: {
		...mapGetters({
			galeries: "galeries"
		})
	}
};
</script>

<style>
</style>
