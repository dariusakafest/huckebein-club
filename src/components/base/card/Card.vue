<template>
  <div class="card event-card bg-transparent border-radius-large box-shadow-large overflow-hidden bg-center" >
    <div class="card-body p-0 position-relative">
      <div class="card-content w-100 h-100">
        <div class="card-image">
          <img class="img-fluid" :src="img" alt="" srcset="">
        </div>
        <router-link :to="{name: link, params: {id: eventId}}" class="stretched-link"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import ArrowRightIcon from "@/components/svgs/ArrowRightIcon";
// import ButtonBase from "@/components/base/buttons/ButtonBase";

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
		time: {
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

