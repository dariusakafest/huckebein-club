<template>
  <div class="home">
    <!-- Header -->
    <header-image :backgroundImage="'https://i.postimg.cc/Ls1QDjYH/70850018-2721181141245950-5741574919095844864-n.jpg'" :contentDisplay="'flex'" :flexAlign="'end'">
      <template #content>
        <Events />
      </template>
    </header-image>
    <!--  -->
    <!-- Events Section -->

    <!--  -->

    <!-- About us Section -->
    <AboutUs />
    <!--  -->

    <!-- Gallery Section -->
    <Gallery />
    <!--  -->

    <!-- Tuor Section -->
    <Tour />
    <!--  -->

    <!-- Contact us Section -->
    <ContactUs/>
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/base/header/HeaderImage";
import Events from "@/components/events/Events";
import AboutUs from "@/components/aboutus/AboutUs";
import Gallery from "@/components/gallery/Gallery";
import Tour from "@/components/tour/Tour";
import ContactUs from "@/components/contacts/ContactUs";

export default {
	name: "Home",
	components: {
		HeaderImage,
		Events,
		AboutUs,
		ContactUs,
		Gallery,
		Tour
	}
};
</script>
