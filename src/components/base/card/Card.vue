<template>
  <div class="card bg-transparent border-radius-large box-shadow-large overflow-hidden" :class="{'card-height-md': height == 'md'}">
    <div class="card-body p-0 position-relative ">
      <div class="card-content p-4 position-absolute d-flex flex-column justify-content-between text-start">
        <div class="card-content_header">
          <h3 class="h3 text-white-heading">{{title}}</h3>
          <p class="f4 text-white-content">{{info}}</p>
        </div>
        <div class="card-content_footer text-end">
          <span class="card-patch d-inline-block text-center p-2 border-radius-rounded bg-yellow w-auto">
            <span class="d-block">{{day}}</span>
            <strong class="h6 d-block uppercase">{{month}}</strong>
          </span>
        </div>
      </div>
      <div class="card-figure">
        <figure class="mb-0">
          <img :src="img" alt="">
        </figure>
      </div>

      <router-link :to="{name: link, params: {id: eventId}}" class="stretched-link"></router-link>
    </div>
  </div>
</template>

<script>
export default {
	name: "card",
	props: {
		title: {
			type: String,
			default: () => {}
		},
		info: {
			type: String,
			default: () => {}
		},
		day: {
			type: String,
			default: () => {}
		},
		month: {
			type: String,
			default: () => {}
		},
		img: {
			type: String,
			default: () => {}
		},
		link: {
			type: String,
			default: () => {}
		},
		eventId: {
			type: Number,
			default: () => {}
		},
		height: {
			type: String,
			default: () => {}
		}
	}
};
</script>

