<template>
  <div class="personal-form">
    <template v-if="fullName">
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name">
      </div>
    </template>
    <template v-if="email">
      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
    </template>
  </div>
</template>

<script>
export default {
	name: "personal-form",
	props: {
		email: {
			type: Boolean,
			default: () => {}
		},
		fullName: {
			type: Boolean,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
