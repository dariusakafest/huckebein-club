<template>
  <div class="p-page seate-page">
    <div class="seats-map">

      <v-stage class="canvas-seat-map" :config="configKonva">
        <!-- <v-layer ref="layer">
          <v-image :config="{
            image: image
          }" />
        </v-layer> -->

        <v-layer>
          <v-group v-for="(item, index) in seats" :key="item.id" @click="selectedSeate(index)" @touchstart="selectedSeate(index)">
            <template v-if="item.glass == true">

              <v-rect ref="rect" :config="{
                  width: 10,
                  height: item.height,
                  x: (item.x - 50),
                  y: item.y,
                  id: item.id,
                  fill: '#ea2424',
                  cornerRadius: 12,
                  }"></v-rect>
            </template>

            <template v-if="item.shape == 'rect'">

              <v-rect ref="rect" :config="{
                  width: item.width,
                  height: item.height,
                  x: item.x,
                  y: item.y,
                  id: item.id,
                  fill: item.fill,
                  stroke: item.stroke,
                  cornerRadius: 12,
                  selectedSeate: item.selectedSeate,
                  type: item.type,
                  shape: item.shape,
                  glass: item.glass,
                  }"></v-rect>

              <v-text :config="{
                text: item.name,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                fontSize: 17,
                fill: item.text_fill,
                align: 'center',
                verticalAlign: 'middle'
                }">

              </v-text>
            </template>

            <template v-if="item.shape == 'path'">

              <v-path :config="{
                x: item.x,
                y: item.y,
                fill: item.fill,
                shape: item.shape,
                data: item.data
                }
              " />

              <v-text :config="{
                text: item.name,
                x: item.x,
                y: (item.y + 18),
                width: item.width,
                height: item.height,
                fontSize: 17,
                fill: item.text_fill,
                align: 'center',
                verticalAlign: 'middle'
                }">

              </v-text>

            </template>

            <template v-if="item.type == 'text'">

              <v-text :config="{
                text: item.name,
                x: item.x,
                y: (item.y + 18),
                width: item.width,
                height: item.height,
                fontSize: 17,
                fill: item.text_fill,
                align: 'center',
                verticalAlign: 'middle'
                }">

              </v-text>

            </template>

            <template v-if="item.shape == 'circle'">

              <v-circle ref="circle" :config="{
                  width: item.width,
                  height: item.height,
                  x: item.x,
                  y: item.y,
                  id: item.id,
                  fill: item.fill,
                  selectedSeate: item.selectedSeate,
                  type: item.type,
                  shape: item.shape,
                  glass: item.glass
                  }"></v-circle>

              <v-text :config="{
                text: item.name,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                fontSize: 14,
                fill: item.text_fill,
                offsetX: 8, 
                offsetY: 5 
                }">

              </v-text>
            </template>

            <v-circle v-for="chair in item.chairs" :key="chair.number" :config="{
                width: chair.width,
                height: chair.height,
                x: item.x,
                y: item.y,
                id: item.id,
                fill: '#eabf24',
                offsetY: chair.top,
                offsetX: chair.left,
                }"></v-circle>

          </v-group>
        </v-layer>
      </v-stage>
    </div>

    <div class="offcanvas offcanvas-end" ref="seatFormOffcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="h3" id="offcanvasRightLabel">Book your table</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" @click="unSelectSeate(seatForm)"></button>
      </div>

      <div class="offcanvas-body">

        <div class="seat-form text-start">
          <div class="mb-3">

            <h3 class="h3 text-dark-headi">
              {{seatForm.name}}
            </h3>
          </div>

          <div class="mb-3 border-top pt-3">
            <label for="exampleFormControlInput3" class="form-label">When will you come?</label>
            <input type="datetime-local" class="form-control" id="exampleFormControlInput3">
          </div>

          <template v-if="seatForm.chairs">
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">Frindes</label>
              <select class="form-select" id="exampleFormControlInput2" aria-label="Default select example">
                <option v-for="chair in seatForm.chairs" :key="chair.number"> {{chair.number}} </option>
              </select>
            </div>
          </template>

          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="seatForm.haveOccasion">
            <label class="form-check-label" for="flexCheckDefault">
              Do you have an occasion?
            </label>
          </div>

          <template v-if="seatForm.haveOccasion">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">What is the occasion?</label>
              <input type="email" class="form-control" placeholder="EX: Birthday" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Do you have any ideas for this occasion?</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
          </template>

          <div class="ticket-item border-radius-medium mb-3">
            <div class="ticket-content p-3">
              <h5 class="h5 text-dark-heading mb-2">Total price</h5>
              <h3 class="h3 text-dark-heading mb-1">100$</h3>
            </div>
            <div class="svg-bg">
              <scribbles-bg :fill="'gray'" />
            </div>
          </div>
          <button-base class="mt-4 w-100" :color="'yellow'" :uppercase="true" :radius="true" :title="'Book it now'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ScribblesBg from "@/components/svgs/scribbles.vue";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import { Offcanvas } from "bootstrap";
import html2canvas from "html2canvas";

const w_width = window.innerWidth;
const w_height = 1200; //window.outerHeight;

export default {
	name: "seat-map",
	components: {
		ScribblesBg,
		ButtonBase
	},
	data() {
		return {
			output: null,
			offcanvas: null,
			image: null,
			selected: false,
			seatForm: {},
			configKonva: {
				width: w_width,
				height: w_height
			},
			configCircle: {
				x: 100,
				y: 100,
				radius: 70,
				fill: "red",
				stroke: "black",
				strokeWidth: 4
			}
		};
	},
	methods: {
		selectedSeate(index) {
			let seat = this.seats[index];

			seat.selectedSeate = !seat.selectedSeate;
			if (seat.enableToSelect) {
				if (seat.selectedSeate) {
					seat.fill = "#40ff59";
					this.offcanvas.show();
					this.seatForm = seat;
				} else {
					seat.fill = "#eee";
					this.offcanvas.hide();
					this.seatForm = {};
				}
				this.$set(this.seats, index, seat);
			}
			// console.log(seat);
			return seat;
		},
		unSelectSeate(item) {
			let seat = this.seats.find(seat => seat.id == item.id);

			seat.selectedSeate = false;
			seat.fill = "#eee";
			this.seatForm = {};
		},
		bookSeat() {
			// let cost = 30;

			let chair = this.seatForm.chairs.find(chair => chair.number);

			let chairNum = chair.number;

			console.log(chairNum);

			return chairNum;
		},

		async print() {
			// html2canvas(this.$refs.capture).then(canvas => {
			// 	document.body.appendChild(canvas);
			// });

			const el = this.$refs.capture;

			// const options = {
			// 	type: "dataURL"
			// };
			// const printCanvas = await html2canvas(el, options);

			// const link = document.createElement("a");
			// link.setAttribute("download", "tickt.png");
			// link.setAttribute(
			// 	"href",
			// 	printCanvas
			// 		.toDataURL("image/png")
			// 		.replace("image/png", "image/octet-stream")
			// );
			// link.click();
			html2canvas(el).then(canvas => {
				document.body.appendChild(canvas);
			});
		}
	},
	computed: {
		...mapGetters(["seats"])
	},
	mounted() {
		var offcanvasElementList = this.$refs.seatFormOffcanvas;
		this.offcanvas = new Offcanvas(offcanvasElementList);
	},
	created() {
		const image = new window.Image();
		image.src = "~/assets/map-bg.svg";
		image.onload = () => {
			// set image only when it is loaded
			this.image = image;
		};
	}
};
</script>

<style>
.green {
	fill: brown;
}
</style>
