<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-bottom py-5">
        <div class="container">
          <div class="d-flex justify-content-between">
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
            <h5 class="h5 mb-0 text-white-heading">Concept and implementation: Ideenschupser - a brand of Colima GmbH</h5>
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
export default {
	name: "footer-bar",
	components: {
		FacebookIcon,
		InstagramIcon,
		YouTubeIcon,
		TwitchIcon
	}
};
</script>

<style>
</style>
