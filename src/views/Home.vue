<template>
  <div class="home">
    <!-- Header -->
    <div class="bg-gradient-black pb-5">

      <header-image class="home-header " ref="homeHeader" minHeight="100vh" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
        <template #background>

          <div ref="carouselSlide" class="carousel slide carousel-fade " data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block h-100" src="https://i.postimg.cc/Ls1QDjYH/70850018-2721181141245950-5741574919095844864-n.jpg" alt="Cover of DK on 12th Isle">
              </div>
              <div class="carousel-item">
                <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) ">
              </div>
              <div class="carousel-item">
                <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg" alt="A first look at dunes">
              </div>
            </div>
          </div>
          >
        </template>
        <template #content>
          <Events />
        </template>
      </header-image>
      <!--  -->

      <!-- Gallery Section -->
      <Gallery />
      <!-- Tuor Section -->
      <Tour />
    </div>

    <!-- Newsletter Section -->
    <Newsletter />
    <!--  -->

    <!-- Contact us Section -->
    <!-- <ContactUs/> -->
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel } from "bootstrap";
import HeaderImage from "@/components/base/header/HeaderImage";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Tour from "@/components/tour/Tour";
import Newsletter from "@/components/newsletter/Newsletter";
// import ContactUs from "@/components/contacts/ContactUs";

export default {
	name: "Home",
	components: {
		HeaderImage,
		Events,
		// ContactUs,
		Gallery,
		Tour,
		Newsletter
	},
	data() {
		return {
			carousel: null
		};
	},
	mounted() {
		var carouselElement = this.$refs.carouselSlide;
		this.carousel = new Carousel(carouselElement);

		var homeHeader = this.$refs.homeHeader.$el;
		var fade_background = document.getElementById("fade_background");

		function fadeOutOnScroll(element) {
			if (!element) {
				return;
			}
			var distanceToTop =
				window.pageYOffset + element.getBoundingClientRect().top;
			var elementHeight = element.offsetHeight;
			var scrollTop = document.documentElement.scrollTop;
			console.log(scrollTop);

			var opacity = 1;

			if (scrollTop > distanceToTop) {
				opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
			}

			if (opacity >= 0) {
				fade_background.style.opacity = opacity;
				fade_background.style.transform = `translateY(-${scrollTop -
					distanceToTop / 100}px)`;
			}
			if (window.scrollY > 10) {
				fade_background.classList.add("fadingIn");
				fade_background.classList.remove("fadingOut");
			}
			if (window.scrollY == 0) {
				fade_background.classList.add("fadingOut");
				fade_background.classList.remove("fadingIn");
			}
		}

		function scrollHandler() {
			fadeOutOnScroll(homeHeader);
		}

		window.addEventListener("scroll", scrollHandler);
	}
};
</script>
