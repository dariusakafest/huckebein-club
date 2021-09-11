<template>
  <section class="gallery-block py-5 mb-5 mt-2">
    <div class="container-lg-fluid container-sm">
      <h1 class="h1 text-white-heading text-center uppercase mb-4">
        GALERIE
      </h1>
      <swiper ref="swiper" class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Cover of DK on 12th Isle">
        </swiper-slide>

        <template v-slot:button-prev>
          <div class="swiper-button-prev" @click="slidePrev()"></div>
        </template>
        <template v-slot:button-next>
          <div class="swiper-button-next" @click="slideNext()"></div>
        </template>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
	name: "gallery",
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			slides: [
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg",
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg",
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg",
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-02-900x500.jpg",
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-05-900x500.jpg",
				"https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-01.jpg"
			],
			swiperOption: {
				centeredSlides: false,
				spaceBetween: 30,
				grabCursor: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					1000: {
						slidesPerView: 2
					},
					760: {
						slidesPerView: 1
					}
				}
			}
		};
	},
	methods: {
		slidePrev() {
			return this.$refs.swiper.swiperInstance.slidePrev();
		},
		slideNext() {
			return this.$refs.swiper.swiperInstance.slideNext();
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper-container {
	height: auto !important;
}

.swiper-slide {
	width: 60%;
	border-radius: 12px;
	overflow: hidden;
}
</style>
