<template>
  <div class="celebrations-page">

    <section class="celebration-section bg-brown-light pt-120">
      <div class="container">
        <div class="card-content pt-4 pb-3">
          <div class="p-4">
            <h2 class="h2 text-white-heading uppercase mb-4 mt-3">FIRMENFEIERN IM CLUB HUCKEBEIN</h2>
            <p class="f3 text-white-content">
              Auf zwei Etagen mit drei Theken bieten wir genügend Platz für jede Art von Firmenfeiern und Events.
            </p>
            <ul class="list-unstyled f3 text-white-content">
              <li class="mb-2">
                <span class="sx-icon me-2">
                  <check-icon fill="white" />
                </span>
                Hauptbar mit anschließendem Tanzbereich
              </li>
              <li class="mb-2">
                <span class="sx-icon me-2">
                  <check-icon fill="white" />
                </span>
                Zweite Bar (Raucherbereich)
              </li>
              <li class="mb-2">
                <span class="sx-icon me-2">
                  <check-icon fill="white" />
                </span>
                Galerie im ersten Stock und dritte Bar (die Hälfte davon Raucherbereich)
              </li>
            </ul>
            <p class="f3 text-white-content">
              Gerne planen wir mit Ihnen gemeinsam und gestalten eine individuelle Feier, die genau auf Ihre Wünsche und Konditionen abgestimmt ist.
            </p>

            <button-base class="mt-4 px-4 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="ANFRAGE FIRMENFEIER" />
          </div>
        </div>

        <!-- Tuor Section -->
        <Tour class="mb-3" />
        <!--  -->
        <div class="pb-5"></div>
      </div>
    </section>
    <section class="possibilties-section bg-gradient-black py-5">
      <div class="container">
        <h2 class="h2 text-white-heading">
          DAS HUCKEBEIN BIETET IHNEN VIELE MÖGLICHKEITEN:
        </h2>
        <p class="f3 text-white-content">
          Dank unserer langjährigen Kenntnis im Clubmanagement und der Erfahrung mit zahlreichen Live-Konzerten verfügen wir über ein breites Ausstattungsangebot. Verschiedene Beleuchtungsvorrichtungen, Mikrofone, eine komplexe Musikanlage sowie eine flexible Bühne gehören unter anderem in die Auswahl unserer Angebote. Auch die Buchung eines DJ’s kann individuell beansprucht und ergänzt werden.
        </p>
        <div class="row">
          <div class="col-lg-3 mb-3">
            <card-container class="bg-brown-light text-center" :boxShadow="'large'" :radius="'medium'" :textAlign="'start'">
              <template #body>
                <div class="lg-icon mb-4 mt-3">
                  <firmenfeiern-icon fill="yellow" />
                </div>
                <h4 class="h4 text-white-heading mb-0">
                  FIRMENFEIERN
                </h4>
              </template>
            </card-container>

          </div>
          <div class="col-lg-3 mb-3">
            <card-container class="bg-brown-light text-center" :boxShadow="'large'" :radius="'medium'" :textAlign="'start'">
              <template #body>
                <div class="lg-icon mb-4 mt-3">
                  <party-icon fill="yellow" />
                </div>
                <h4 class="h4 text-white-heading mb-0">
                  FIRMENFEIERN
                </h4>
              </template>
            </card-container>

          </div>
          <div class="col-lg-3 mb-3">
            <card-container class="bg-brown-light text-center" :boxShadow="'large'" :radius="'medium'" :textAlign="'start'">
              <template #body>
                <div class="lg-icon mb-4 mt-3">
                  <awards-icon fill="yellow" />
                </div>
                <h4 class="h4 text-white-heading mb-0">
                  VERLEIHUNGEN
                </h4>
              </template>
            </card-container>

          </div>
          <div class="col-lg-3 mb-3">
            <card-container class="bg-brown-light text-center" :boxShadow="'large'" :radius="'medium'" :textAlign="'start'">
              <template #body>
                <div class="lg-icon mb-4 mt-3">
                  <business-plan-icon fill="yellow" />
                </div>
                <h4 class="h4 text-white-heading mb-0">
                  FIRMENFEIERN
                </h4>
              </template>
            </card-container>

          </div>
        </div>
      </div>
    </section>

    <section class="celebration-section bg-brown-light">
      <div class="container">
        <div class="card-content pt-4 pb-3">
          <div class="p-4">
            <h2 class="h2 text-white-heading uppercase mb-4 mt-3">CATERING</h2>
            <p class="f3 text-white-content">
              Ergänzend bieten wir verschiedene Cateringmöglichkeiten an.
            </p>
            <p class="f3 text-white-content">
              Bei uns im Club stehen verschiedene Bars mit einem vielseitigen Angebot an Getränken bereit. Wenn Sie zusätzlich noch Snacks oder ein Buffet buchen möchten, klären wir gemeinsam mit Ihnen Ihre individuellen Wünsche und sprechen diese mit unserem Catering-Partnerunternehmen ab.
            </p>

            <p class="f3 text-white-content">
              Dem entsprechend können wir ebenfalls unsere Räumlichkeiten für Sie aufteilen und trennen, sodass es einen bestimmten Bereich mit dem Buffet gibt, der zu einem späteren Zeitpunkt wieder geschlossen werden kann
            </p>
            <p class="f3 text-white-content">
              Das Huckebein bietet viele verschiedene Einsatzmöglichkeiten für Ihre Feier. <br> Wir freuen uns auf Ihre Anfrage!
            </p>

            <button-base class="mt-4 px-4 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="ANFRAGE FIRMENFEIER" />
          </div>
        </div>

        <div class="col-lg-12">
          <div class="overflow-hidden border-radius-large">

            <img src="https://huckebein-da.de/wp-content/uploads/2019/10/catering-2778755_1920.jpg" class="img-fluid" alt="...">
          </div>
        </div>

        <div class="pb-5"></div>
      </div>
    </section>
  </div>

</template>

<script>
import Tour from "@/components/tour/Tour";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import CardContainer from "@/components/base/card/CardContainer";
import FirmenfeiernIcon from "@/components/svgs/FirmenfeiernIcon";
import PartyIcon from "@/components/svgs/PartyIcon";
import AwardsIcon from "@/components/svgs/AwardsIcon";
import BusinessPlanIcon from "@/components/svgs/BusinessPlan";
import CheckIcon from "@/components/svgs/CheckIcon";
export default {
	name: "firmenfeiern",
	components: {
		Tour,
		ButtonBase,
		CardContainer,
		FirmenfeiernIcon,
		PartyIcon,
		AwardsIcon,
		BusinessPlanIcon,
		CheckIcon
	}
};
</script>

<style>
</style>
