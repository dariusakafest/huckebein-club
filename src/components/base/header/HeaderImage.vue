<template>
  <header id="homeHeader" :style="{'background-image': `url(${backgroundImage})`, 'min-height': `${minHeight}`}" :class="[filterImage? `${filterImage}` : '', `d-${contentDisplay}`,flexAlign ? `align-items-${flexAlign}` : '', 'header-image bg-center']">
    <template v-if="overlay">

      <div :class="[overlayType? `card-overlay_${overlayType}` : 'card-overlay']">
        <div class="card-overlay_backgrounds" id="fade_background">
          <slot name="background"></slot>
        </div>
      </div>
    </template>
    <div class="card-content w-100">
      <div class="container">
        <slot name="content"></slot>
      </div>
    </div>

  </header>
</template>

<script>
import Vue from "vue";
export default {
	name: "header-image",
	props: {
		backgroundImage: {
			type: String,
			default: () => {}
		},
		filterImage: {
			type: String,
			default: () => {}
		},
		contentDisplay: {
			type: String,
			default: () => {}
		},
		flexAlign: {
			type: String,
			default: () => {}
		},
		minHeight: {
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
	mounted() {
		Vue.nextTick(() => {
			var homeHeader = document.getElementById("homeHeader");
			var fade_background = document.getElementById("fade_background");
			function fadeOutOnScroll(element) {
				if (!element) {
					return;
				}
				var distanceToTop =
					window.pageYOffset + element.getBoundingClientRect().top;
				var elementHeight = element.offsetHeight;
				var scrollTop = document.documentElement.scrollTop;

				var opacity = 1;

				if (scrollTop > distanceToTop) {
					opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
				}

				if (opacity >= 0) {
					fade_background.style.opacity = opacity;
					fade_background.style.transform = `translateY(-${scrollTop -
						distanceToTop / 100}px)`;
				}
				if (window.scrollY > 10) {
					fade_background.classList.add("fadingIn");
					fade_background.classList.remove("fadingOut");
				}
				if (window.scrollY == 0) {
					fade_background.classList.add("fadingOut");
					fade_background.classList.remove("fadingIn");
				}
			}
			function scrollHandler() {
				fadeOutOnScroll(homeHeader);
			}

			window.addEventListener("scroll", scrollHandler);
		});
	}
};
</script>

<style>
</style>

