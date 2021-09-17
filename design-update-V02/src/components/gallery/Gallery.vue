<template>
  <section class="gallery-block py-5 mb-5">
    <div class="container">
      <h1 class="h1 text-white-heading text-center uppercase mb-4 mt-5">
        GALERIE
      </h1>
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10 px-lg-0">

          <swiper ref="swiper" class="swiper" :options="swiperOption">
            <swiper-slide v-for="(image, index) in gallery" :key="index">
              <img class="img-fluid d-block" :src="setUrlImage(image)" alt="Cover of DK on 12th Isle">
            </swiper-slide>
            <template v-slot:button-prev>
              <div class="swiper-button-prev" @click="slidePrev()"></div>
            </template>
            <template v-slot:button-next>
              <div class="swiper-button-next" @click="slideNext()"></div>
            </template>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { Swiper as SwiperClass, Autoplay } from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

// Swiper modules
// SwiperClass.use([ Autoplay])

SwiperClass.use([Autoplay]);

Vue.use(getAwesomeSwiper(SwiperClass));

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
			swiperOption: {
				centeredSlides: false,
				spaceBetween: 30,
				grabCursor: true,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					1000: {
						slidesPerView: 1
					},
					760: {
						slidesPerView: 1
					}
				}
			}
		};
	},
	computed: {
		...mapState(["gallery"])
	},
	methods: {
		slidePrev() {
			return this.$refs.swiper.swiperInstance.slidePrev();
		},
		slideNext() {
			return this.$refs.swiper.swiperInstance.slideNext();
		},
		setUrlImage(img) {
			return require(`@/assets/${img}`);
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper-container {
	height: auto !important;
}
.swiper-slide {
	// width: 60%;
	border-radius: 12px;
	overflow: hidden;
	img {
		max-width: 100%;
		height: 487px;
		object-fit: cover;
		object-position: bottom;
	}
}
</style>
