<template>
  <section class="contact-us pb-5">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-6 col-lg-7">
          <h2 class="h2 text-white-heading uppercase">KONTAKT</h2>
          <p class="f3 text-white-content">Wir beantworten gerne Fragen und machen Sie mit huckebein vertraut</p>
          <ul class="ps-2 mt-4">
            <li class="pb-3 text-white-heading">
              <span class="sx-icon">
                <whatsapp-icon :fill="'yellow'" />
              </span>
              121231453200324
            </li>
            <li class="pb-3 text-white-heading">
              <span class="sx-icon">
                <email-icon :fill="'yellow'" />
              </span>
              info@huckebein.de
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
                <input class="form-control form-control-lg mb-3" type="text" placeholder="Your name" aria-label="">
                <input class="form-control form-control-lg mb-3" type="text" placeholder="Your email" aria-label="">
                <textarea class="form-control form-control-lg mb-3" placeholder="Your message" rows="3"></textarea>
                <button-base class="mt-2 w-100" :color="'yellow'" :uppercase="true" :radius="true" :title="'send'" />
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
import WhatsappIcon from "@/components/svgs/WhatsappIcon";
import EmailIcon from "@/components/svgs/EmailIcon";
import LocationIcon from "@/components/svgs/LocationIcon";

export default {
	name: "contact-us",
	components: {
		ButtonBase,
		WhatsappIcon,
		EmailIcon,
		LocationIcon
	}
};
</script>

<style>
</style>
