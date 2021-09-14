<template>
  <div class="celebrations-page">

    <section class="celebration-section bg-brown-light pt-120">
      <div class="container">
        <div class="card-content pt-4 pb-3">
          <div class="p-4">
            <h2 class="h2 text-white-heading uppercase mb-4 mt-3">DEINE ANFAHRT ZUM CLUB HUCKEBEIN</h2>
            <div class="google-map overflow-hidden border-radius-large">
              <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Club Huckebein, Darmstadt&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" frameborder="0"></iframe>
            </div>
            <h3 class="h3 text-white-heading mt-5">
              PARKMÖGLICHKEITEN
            </h3>
            <p class="f3 text-white-content">
              Im Innenhof findet ihr eine begrenzte Anzahl an Parkplätzen. Auch an der Straße vor dem Club könnt ihr euer Auto abstellen.
            </p>
            <div class="my-4 border-bottom"></div>
            <h3 class="h3 text-white-heading">
              ANFAHRT MIT ÖFFENTLICHEN VERKEHRSMITTELN
            </h3>
            <p class="f3 text-white-content">
              Das Huckebein liegt direkt an der Haltestelle "Bessunger Straße". Ihr könnt es somit problemlos mit den Straßenbahnlinien 6, 7 und 8 erreichen.
            </p>
          </div>
        </div>

        <div class="pb-5"></div>
      </div>
    </section>

    <!-- Contact us Section -->
    <ContactUs class="bg-gradient-black py-5" />
    <!--  -->
  </div>

</template>

<script>
import ContactUs from "@/components/contacts/ContactUs";
// import CardContainer from "@/components/base/card/CardContainer";;
export default {
	name: "firmenfeiern",
	components: {
		ContactUs
		// CardContainer
	}
};
</script>

<style>
</style>
