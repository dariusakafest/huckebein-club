<template>
  <div class="card " :class="[`box-shadow-${boxShadow}`, `border-radius-${radius}`, `text-${textAlign}`]">
    <slot name="header"></slot>
    <div class="card-body p-4">
      <slot name="body"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
	name: "card-container",
	props: {
		boxShadow: {
			type: String,
			default: () => {}
		},
		radius: {
			type: String,
			default: () => {}
		},
		textAlign: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
