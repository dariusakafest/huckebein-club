
<template>
  <button class="btn" :class="[color? `bg-${color}` : '', {'uppercase': uppercase == true}, radius ? `border-radius-${radius}` : '',btnStyle? `${btnStyle}-btn`: '']" type="button">
    <slot default>
      {{title}}
    </slot>
    <slot name="content"></slot>
  </button>
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
		},
		btnStyle: {
			type: String,
			default: () => {}
		}
	}
};
</script>
