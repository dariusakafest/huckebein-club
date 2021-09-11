<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-7">
        <PaymentForm />
      </div>
    </div>
  </div>
</template>

<script>
import PaymentForm from "@/components/forms/PaymentForm";
export default {
	name: "payment",
	components: {
		PaymentForm
	}
};
</script>

<style>
</style>
