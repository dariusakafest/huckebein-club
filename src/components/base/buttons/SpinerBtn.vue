<template>
  <div class="spiner-btn bg-brown-light border-radius-small mt-2">
    <button type="button" class="btn spiner-input--decrement border-right" id="spiner-input--decrement" @click="spiner('decrement')">-</button>
    <input class="flex-grow-1 spiner-input text-center" name="number" :max="max" type="number" readonly="" v-model="spin">
    <button type="button" class="btn spiner-input--increment border-left" id="spiner-input--increment" @click="spiner('increment')">+</button>
  </div>
</template>

<script>
export default {
	name: "spiner-btn",
	props: {
		max: {
			type: Number,
			default: () => {}
		},
    value: Number,
	},
	data() {
		return {
			spin: 1
		};
	},
	computed: {},
	methods: {
    updateValue: function (value) {
      this.$emit('input', value);
    },
		spiner(type) {
			var min = 1;
			if (type == "increment") {
				if (this.spin >= this.max) {
					return false;
				} else {
					this.spin++;
				}
			}
			if (type == "decrement") {
				if (this.spin <= min) {
					return false;
				} else {
					this.spin--;
				}
			}
      this.updateValue(this.spin);
		}
	}
};
</script>

<style>
</style>
