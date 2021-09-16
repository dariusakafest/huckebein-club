<template>
  <header :style="{'background-image': `url(${backgroundImage})`, 'min-height': `${minHeight}`}" :class="[filterImage? `${filterImage}` : '', `d-${contentDisplay}`,flexAlign ? `align-items-${flexAlign}` : '', 'header-image bg-center']">
    <template v-if="overlay">
      <div :class="`card-overlay_${overlayType}`">
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
	}
};
</script>

<style>
</style>

