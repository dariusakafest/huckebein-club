<template>
  <div class="row">
    <div class="col-lg-3">
      <span class="d-inline-block px-4 py-2 bg-yellow border-radius-rounded">
        {{time}}
      </span>
    </div>
    <div class="col-lg-9">
      <h2 class="h2 text-white-heading">{{title}}</h2>
      <p class="f3 text-white-content">
        {{content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
	name: "event-timeline",
	props: {
		title: {
			type: String,
			default: () => {}
		},
		content: {
			type: String,
			default: () => {}
		},
		time: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
