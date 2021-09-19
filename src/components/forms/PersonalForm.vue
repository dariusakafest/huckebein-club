<template>
  <div class="personal-form">
    <template v-if="fullName">
      <div class="mb-3">
        <input type="text" class="form-control" name="name" id="formName" placeholder="Your name">
      </div>
    </template>
    <template v-if="email">
      <div class="mb-3">
        <input type="email" class="form-control" name="email" id="formEmail" placeholder="name@example.com">
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
