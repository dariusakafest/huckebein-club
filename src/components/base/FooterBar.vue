<template>
  <div class="footer">

    <div class="footer-wrap">
      <section class="opening-hours-section border-top bg-brown-light">
        <div class="container">
          <div class="card-content pt-4 pb-3">
            <div class="p-4">
              <h3 class="h3 text-white-heading text-center uppercase">Öffnungszeiten</h3>
              <h4 class="h4 text-white-content text-center mb-4 mt-3">
                Freitag, Samstag und vor Feiertagen ab 22 Uhr.</h4>

              <router-link to="/anfahrt-kontakt" class="h5 d-block text-white-content text-center mb-0">
                <span class="sx-icon">
                  <location-icon :fill="'yellow'" />
                </span>
                Heidelberger Strasse 89a, 64285 Darmstadt

              </router-link>
            </div>
          </div>
        </div>
      </section>
      <div class="footer-bottom py-5">
        <div class="container">
          <div class="footer-content d-flex justify-content-between">
            <ul class="navbar-nav footer-links mb-0">
              <router-link to="/impressum" class="nav-item" exact>
                <span class="nav-link">
                  impressum
                </span>
              </router-link>
            </ul>
            <div class="social-networks-wrapper">
              <a class="facebook-icon" href="https://www.facebook.com/Club.Huckebein/" title="Facebook" aria-label="Facebook">
                <span class="sm-icon">
                  <FacebookIcon fill="white" />
                </span>
              </a>
              <a class="instagram-icon mx-3" href="https://www.instagram.com/huckebein_da/" title="Instagram" aria-label="Instagram">
                <span class="sm-icon">
                  <InstagramIcon fill="white" />
                </span>
              </a>
              <a class="youtube-icon" href="https://www.youtube.com/channel/UCr6OBw74PNgULnbJvg9fgRg" title="YouTube">
                <span class="sm-icon">
                  <YouTubeIcon fill="white" />
                </span>
              </a>
              <a class="youtube-icon ms-3" href="https://www.twitch.tv/huckebein.de" title="Twitch">
                <span class="sm-icon">
                  <TwitchIcon fill="white" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import FacebookIcon from "@/components/svgs/FacebookIcon";
import InstagramIcon from "@/components/svgs/InstagramIcon";
import YouTubeIcon from "@/components/svgs/YouTubeIcon";
import TwitchIcon from "@/components/svgs/TwitchIcon";
import LocationIcon from "@/components/svgs/LocationIcon";
export default {
	name: "footer-bar",
	components: {
		FacebookIcon,
		InstagramIcon,
		YouTubeIcon,
		TwitchIcon,
		LocationIcon
	}
};
</script>

<style>
</style>
