<template>
  <section class="contact-us pb-5">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-6 col-lg-7">
          <h2 class="h2 text-white-heading uppercase">KONTAKT</h2>
          <p class="f3 text-white-content">Wir beantworten gerne Fragen und machen Sie mit huckebein vertraut</p>
          <ul class="ps-2 mt-4">
            <li class="pb-3 text-white-heading">
              <span class="sx-icon me-2">
                <email-icon :fill="'yellow'" />
              </span>
              <a href="mailto:info@huckebein.de">info@huckebein.de</a>
            </li>
            <li class="pb-3 text-white-heading">
              <span class="sx-icon">
                <location-icon :fill="'yellow'" />
              </span>
              Heidelberger Strasse 89a 64285 Darmstadt
            </li>
          </ul>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="card border-radius-large bg-brown-light">
            <div class="card-body p-4">
              <form action="" class="mb-0">
                <input class="form-control form-control-lg mb-3" v-model="name" type="text" placeholder="Name" aria-label="">
                <input class="form-control form-control-lg mb-3" v-model="email" type="text" placeholder="Email" aria-label="">
                <textarea class="form-control form-control-lg mb-3" v-model="message" placeholder="Ihre Nachricht" rows="3"></textarea>
                <button-base @click.native="sendForm()" class="mt-2 w-100" :color="'yellow'" :uppercase="true" :radius="true" :title="'send'" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";
// import WhatsappIcon from "@/components/svgs/WhatsappIcon";
import EmailIcon from "@/components/svgs/EmailIcon";
import LocationIcon from "@/components/svgs/LocationIcon";

import Swal from 'sweetalert2'

export default {
  data: function () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
	name: "contact-us",
	components: {
		ButtonBase,
		// WhatsappIcon,
		EmailIcon,
		LocationIcon
	},
  methods: {
    sendForm: async function () {
      let response = await fetch(this.$store.state.apiUrl+'sendForm', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      });

      let data = await response.json();

      if (data.hasErrors) {
        Swal.fire({
          title: 'Error!',
          html: data.errors.join('<br>'),
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: 'Erfolgreich eingereicht!',
          html: '',
          icon: 'success',
          timer: 3000,
          confirmButtonText: 'Ok'
        });

        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
};
</script>

<style>
</style>
