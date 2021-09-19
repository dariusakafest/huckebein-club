<template>
  <div :ref="carouselId" class="carousel slide carousel-fade " >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block h-100" src="https://i.postimg.cc/Ls1QDjYH/70850018-2721181141245950-5741574919095844864-n.jpg" alt="Cover of DK on 12th Isle">
      </div>
      <div class="carousel-item">
        <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) ">
      </div>
      <div class="carousel-item">
        <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg" alt="A first look at dunes">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel } from "bootstrap";

export default {
	name: "carousel",
	props: {
		carouselId: {
			type: String,
			default: () => {}
		}
	},
	data() {
		return {
		};
	},
		computed: {
		carousel: {
			get() {
				return this.$store.state.carousel;
			},
			set(value) {
				this.$store.commit("carousel", value);
			}
		}
	},
	mounted() {
		var carouselElement = this.$refs[this.carouselId];
		this.carousel = new Carousel(carouselElement);
		Vue.nextTick(() => {});
	}
};
</script>

<style>
</style>
