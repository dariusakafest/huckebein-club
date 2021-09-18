<template>
  <div class="card event-card bg-transparent border-radius-large box-shadow-large overflow-hidden bg-center">
    <div class="card-body p-0 position-relative">
      <template v-if="overlay">
        <div :class="[overlayType? `card-overlay_${overlayType}` : 'card-overlay']">
          <div class="thumbnail-overlay d-flex align-items-end h-100 w-100 p-4">
            <router-link :to="{name: link, params: {id: eventId}}" class="h4 thumbnail-link text-white-heading uppercase stretched-link">
              <slot name="background"></slot>
            </router-link>
          </div>

        </div>
      </template>
      <div class="card-content w-100 h-100">
        <div class="card-image">
          <img class="img-fluid" :src="setUrlImage(img)" alt="" srcset="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import ArrowRightIcon from "@/components/svgs/ArrowRightIcon";
// import ButtonBase from "@/components/base/buttons/ButtonBase";

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
		},
		overlay: {
			type: Boolean,
			default: () => {}
		},
		overlayType: {
			type: String,
			default: () => {}
		}
	},
	methods: {
		setUrlImage(img) {
			if (img.includes("http")) {
				return img;
			} else {
				return require(`@/assets/${img}`);
			}
		}
	}
};
</script>

