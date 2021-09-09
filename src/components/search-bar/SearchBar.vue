<template>
  <section class="reservation-form pt-120 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="input-group input-group-lg">
            <input type="search" aria-label="Search" class="form-control" placeholder="Search event">
            <button-base :color="'gray-light'" :uppercase="true" :radius="true" :title="'Search'" />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";
export default {
	name: "search-bar",
	components: {
		ButtonBase
	}
};
</script>

<style>
</style>
