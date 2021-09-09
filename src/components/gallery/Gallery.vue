<template>
  <section class="gallery-block py-5 my-5">
    <div class="container-fluid">
      <h1 class="h1 text-white-heading text-center uppercase mb-4">
        GALERIE
      </h1>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg" alt="Cover of DK on 12th Isle"></swiper-slide>
        <swiper-slide> <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) "></swiper-slide>
        <swiper-slide><img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg" alt="A first look at dunes"></swiper-slide>
        <swiper-slide><img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-02-900x500.jpg" alt="Datassette – Existenzmaximum"></swiper-slide>
        <swiper-slide><img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-05-900x500.jpg" alt="Ezinu Crater"></swiper-slide>
        <swiper-slide><img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-01.jpg" alt="Polar Ice"></swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
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
			swiperOption: {
				slidesPerView: "auto",

				spaceBetween: 30,
				// navigation: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					768: {
						centeredSlides: false
					},
					1024: {
						centeredSlides: true
					}
				}
			}
		};
	},
	mounted() {
		// new Splide("#splide", {
		// 	perPage: 3,
		// 	perMove: 1,
		// 	height: "9rem",
		// 	focus: "center",
		// 	trimSpace: false,
		// 	breakpoints: {
		// 		600: {
		// 			perPage: 2,
		// 			height: "6rem"
		// 		}
		// 	}
		// })
	}
};
</script>

<style lang="scss">
</style>
