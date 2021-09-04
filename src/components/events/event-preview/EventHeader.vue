<template>
  <header class="event-header" :style="`background-image: url(${backgroundImage})`">
    <div class="card-overlay pt-120">
      <div class="container">
        <slot name="content"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
	name: "event-header",
	props: {
		backgroundImage: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
