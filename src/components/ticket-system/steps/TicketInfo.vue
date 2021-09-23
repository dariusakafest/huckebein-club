<template>
  <div class="d-flex flex-column w-100">
    <div class="mb-4">
      <h2 class="h2 text-white-heading mt-2 mb-5 uppercase">{{ticketType}}</h2>
      <personal-form lastName fullName email/>
      <spiner-btn v-model="count" :max="spases" />
    </div>
    <div class="mb-0">
      <div class="d-flex mt-3">
        <div class="ticket-item border-radius-medium flex-grow-1" :class="{'me-1': ticket.type == 'standard', 'ms-1': ticket.type == 'VIP'}" v-for="(ticket, index) in tickets" :key="index">
          <div class="ticket-content p-3">
            <h3 style="color: #FFFFFF; " class="h3 text-dark-heading mb-2">Ticket Preis: {{ticket.cost | getTotalCost(count)}}</h3>
<!--            <h5 class="h5 text-dark-heading mb-0">{{ticket.type}}</h5>-->
          </div>
          <div class="svg-bg">
            <template v-if="ticket.type == 'standard'">
              <scribbles-bg fill="white" />
            </template>
            <template v-if="ticket.type == 'VIP'">
              <scribbles-bg fill="white" />
            </template>
          </div>
        </div>
      </div>

    </div>
    <button-base @click.native="buyTicket()" class="mt-4 w-100 py-3" :color="'yellow'" :uppercase="true" :radius="true" :title="'Pay now'" />
  </div>
</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";
// import ScribblesBg from "@/components/svgs/scribbles";
import PersonalForm from "@/components/forms/PersonalForm";
import SpinerBtn from "@/components/base/buttons/SpinerBtn";

import Swal from 'sweetalert2'

export default {
	name: "ticket-info",
  data: function () {
    return {
      count: 1
    }
  },
	props: {
    id: {
      type: Number,
      default: () => {}
    },
		ticketType: {
			type: String,
			default: () => {}
		},
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
		tickets: {
			type: Array,
			default: () => {}
		},
		spases: {
			type: Number,
			default: () => {}
		}
	},
	components: {
		PersonalForm,
		// ScribblesBg,
		SpinerBtn,
		ButtonBase
	},
	computed: {
		cuurentStep: {
			get() {
				return this.$store.state.cuurentStep;
			},
			set(value) {
				this.$store.commit("cuurentStep", value);
			}
		}
	},
	methods: {
		goNext() {
			this.cuurentStep++;
		},
    buyTicket: function () {
      let self = this;

      let props = this._props;

      let ticket = null;

      let tickets = this._props.tickets;
      if (tickets.length) {
        ticket = tickets[0];
      }

      if (ticket) {
        let data = {
          eventId: props.id,
          eventName: props.title,
          ticketType: ticket.type,
          ticketCost: ticket.cost,
          name: document.getElementById('formName').value,
          lastname: document.getElementById('formLastname').value,
          email: document.getElementById('formEmail').value,
          quantity: self.count
        };

        (async function () {
          let response = await fetch(self.$store.state.apiUrl+'buy', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

          const content = await response.json();

          if (content.hasErrors) {
            Swal.fire({
              title: 'Error!',
              html: content.errors.join('<br>'),
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          } else {
            let timerInterval
            Swal.fire({
              title: 'Sie werden nun zur Zahlung auf das PayPal Zahlungssystem weitergeleitet',
              html: 'Das wird passieren in <b></b>s',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Math.ceil(Swal.getTimerLeft() / 1000)
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                document.location.href = content.paymentUrl;
                //console.log('I was closed by the timer')
              }
            })
          }
        })();
      }
    }
	},
  filters: {
    getTotalCost: function (cost, count) {
      let dataPrice = (String(cost).match(/([0-9\.\,]+)(\ [^0-9\.\,]+)/))
      return (count * dataPrice[1]) + dataPrice[2];
    }
  }
};
</script>

<style>
</style>
