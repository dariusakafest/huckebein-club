
<template>
  <button class="btn main-btn" :class="[`bg-${color}`, {'uppercase': uppercase == true}, `border-radius-${radius}`]" type="button">{{title}}</button>
</template>

<script>
export default {
	name: "button-base",
	props: {
		title: {
			type: String,
			default: () => {}
		},

		uppercase: {
			type: Boolean,
			default: () => {}
		},
		radius: {
			type: Boolean,
			default: () => {}
		},
		color: {
			type: String,
			default: () => {}
		}
	}
};
</script>
