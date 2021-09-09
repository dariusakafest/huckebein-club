<template>
  <header :style="`background-image: url(${backgroundImage})`" :class="[filterImage? `${filterImage}` : '', `d-${contentDisplay}`,flexAlign ? `align-items-${flexAlign}` : '', 'header-image bg-center ']">
    <div class="card-overlay_brown"></div>
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
		}
	}
};
</script>

<style>
</style>

