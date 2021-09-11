<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="bg-brown-light" v-for="(time, index) in timeline" :key="index">
      <div class="timeline-item">
        <span class="d-inline-block px-4 py-2 bg-yellow border-radius-rounded">
          {{time.time}}
        </span>
        <h4 class="h4 text-white-heading mt-4">{{time.title}}</h4>
        <p class="f4 text-white-content">
          {{time.content}}
        </p>
      </div>
    </swiper-slide>
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
	name: "event-timeline",
	props: {
		timeline: {
			type: Array,
			default: () => {}
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			swiperOption: {
				spaceBetween: 30,
				centeredSlides: false,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					1000: {
						slidesPerView: "auto"
					},
					760: {
						slidesPerView: 1
					}
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.swiper-container {
	height: auto !important;
}

.swiper-slide {
	width: 520px;
	border-radius: 12px;
	overflow: hidden;
	padding: 35px;
}
</style>
