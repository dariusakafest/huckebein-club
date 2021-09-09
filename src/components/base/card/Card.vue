<template>
  <div class="card bg-transparent border-radius-large box-shadow-large overflow-hidden bg-center" :style="`background-image: url(${img})`" :class="{'card-height-md': height == 'md'}">
    <div class="card-body p-0 position-relative">
      <div class="card-overlay_base"></div>
      <div class="card-content w-100 h-100">
        <div class="p-4 d-flex justify-content-between align-items-end text-start mb-3 h-100">
          <div class="card-content_footer text-start">
            <h2 class="h2 text-white-heading mb-0">{{month}} {{day}} <br> {{time}} </h2>
          </div>
          <button-base class="mt-4 p-0">
            <template #content>
              <span class="md-icon">
                <arrow-right-icon :fill="'white'" />
              </span>
            </template>
          </button-base>

        </div>
      <router-link :to="{name: link, params: {id: eventId}}" class="stretched-link"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRightIcon from "@/components/svgs/ArrowRightIcon";
import ButtonBase from "@/components/base/buttons/ButtonBase";

export default {
	name: "card",
	props: {
		title: {
			type: String,
			default: () => {}
		},
		info: {
			type: String,
			default: () => {}
		},
		day: {
			type: String,
			default: () => {}
		},
		month: {
			type: String,
			default: () => {}
		},
		time: {
			type: String,
			default: () => {}
		},
		img: {
			type: String,
			default: () => {}
		},
		link: {
			type: String,
			default: () => {}
		},
		eventId: {
			type: Number,
			default: () => {}
		},
		height: {
			type: String,
			default: () => {}
		}
	},
	components: {
		ArrowRightIcon,
		ButtonBase
	}
};
</script>

