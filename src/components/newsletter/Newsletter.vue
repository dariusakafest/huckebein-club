<template>
  <div class="newsletter bg-brown-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <card-container class="bg-transparent" :radius="'large'" :textAlign="'center'">
            <template #body>
              <div class="py-4">
                <h3 class="h3 mb-4 text-white-heading text-md-center text-sm-start">Verpasse kein Event! Trag dich jetzt in unseren Newsletter ein</h3>
                <div class="d-flex flex-column align-items-center">
                  <div class="col-lg-6 col-md-12">
                    <personal-form email/>
                  </div>
                  <button-base class="py-2 px-4" :color="'yellow'" :uppercase="true" :radius="true" title="Jetzt abonnieren" />
                </div>
              </div>
            </template>
          </card-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardContainer from "@/components/base/card/CardContainer";
import PersonalForm from "@/components/forms/PersonalForm";
import ButtonBase from "@/components/base/buttons/ButtonBase";
export default {
	name: "newsletter",
	components: {
		CardContainer,
		PersonalForm,
		ButtonBase
	}
};
</script>

<style>
</style>
