<template>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light main-navbar">
    <div class="container">

      <a class="navbar-brand " href="/">
        <img class="_logo" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-logo-125px.png" alt="">
      </a>
      <button class="navbar-toggler mr-3" type="button" @click="isToggle" data-bs-toggle="collapse" aria-controls="navbar-collapse">
        <svg class="fill-white" id="Layer_1" enable-background="new 0 0 128 128" height="30px" viewBox="0 0 128 128" width="30px" xmlns="http://www.w3.org/2000/svg">
          <path id="Menu" d="m108 36h-88c-2.209 0-4-1.791-4-4s1.791-4 4-4h88c2.209 0 4 1.791 4 4s-1.791 4-4 4zm4 28c0-2.209-1.791-4-4-4h-88c-2.209 0-4 1.791-4 4s1.791 4 4 4h88c2.209 0 4-1.791 4-4zm0 32c0-2.209-1.791-4-4-4h-88c-2.209 0-4 1.791-4 4s1.791 4 4 4h88c2.209 0 4-1.791 4-4z" />
        </svg>
      </button>
      <div class="navbar-collapse collapse" ref="collapse">

        <ul class="navbar-nav me-auto">

          <router-link to="/" class="nav-item hover-item rounded" exact>
            <span class="nav-link">
              STARTSEITE
            </span>
          </router-link>
          <router-link to="/about" class="nav-item hover-item rounded">
            <span class="nav-link">
              ÜBER UNS
            </span>
          </router-link>
          <router-link to="/events" class="nav-item hover-item rounded">
            <span class="nav-link">
              Events
            </span>
          </router-link>
<!--          <router-link to="/galerie" class="nav-item hover-item rounded">-->
<!--            <span class="nav-link">-->
<!--              GALERIE-->
<!--            </span>-->
<!--          </router-link>-->
          <router-link to="/firmenfeiern" class="nav-item hover-item rounded">
            <span class="nav-link">
              FIRMENFEIERN
            </span>
          </router-link>
          <router-link to="/anfahrt-kontakt" class="nav-item hover-item rounded">
            <span class="nav-link">
              ANFAHRT
            </span>
          </router-link>

        </ul>

        <!-- <div class="d-flex flex-lg-row flex-md-column col-md-reverse">
                  <a href="" class="btn main-btn blue-btn medium-btn me-2 mb-lg-auto mb-3">
                     Get started
                  </a>
               </div> -->
      </div>
    </div>
  </nav>

</template>

<script>
import { Collapse } from "bootstrap";

export default {
	name: "nav-bar",
	// props: {
	// 	toggle: {
	// 		type: Boolean,
	// 		default: () => {}
	// 	}
	// },
	data() {
		return {
			collapse: null,
			toggle: false
		};
	},
	methods: {
		isToggle() {
			this.collapse = this.$refs.collapse;
			this.toggle = !this.toggle;
			if (this.toggle) {
				new Collapse(this.collapse, "show");
			}
			if (!this.toggle) {
				new Collapse(this.collapse, "hide");
			}
		}
	},
	watch: {
		$route() {
			this.$nextTick(function() {
				new Collapse(this.collapse, "hide");
			});
		}
	},
	mounted() {
		this.toggle = false;
	}
};
</script>

