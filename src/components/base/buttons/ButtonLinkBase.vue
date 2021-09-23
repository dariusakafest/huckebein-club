
<template>
  <a v-bind:href="link" class="btn" :class="[color? `bg-${color}` : '', {'uppercase': uppercase == true}, radius ? `border-radius-${radius}` : '',btnStyle? `${btnStyle}-btn`: '']" type="button">
    <slot default>
      {{title}}
    </slot>
    <slot name="content"></slot>
  </a>
</template>

<script>
export default {
	name: "button-link-base",
	props: {
    link: {
      type: String,
      default: () => {}
    },
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
