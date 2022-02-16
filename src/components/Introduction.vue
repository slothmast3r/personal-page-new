<template>
  <section class="introduction-wrapper">
    <div>
      <div class="welcome-text">
        Hello! I'm
      </div>
      <div class="name-text">
        Oskar Straszyński
      </div>
      <div class="jobtitle-text">
        Frontend Developer
      </div>
      <PersonalButton
        :button-type="'secondary'"
        @click="$router.push('#contact')"
      >
        GET IN TOUCH
      </PersonalButton>
    </div>
    <div class="right-side">
      <img
        alt="My photo"
        src="@/assets/images/j.jpg"
        class="image"
      >
      <div class="social-media">
        <social-media-icons is-rotated/>
      </div>
    </div>
  </section>
</template>

<script>
import PersonalButton from "@/components/PersonalButton";
import SocialMediaIcons from "./SocialMediaIcons";
export default {
  name: "Introduction",
  components: {SocialMediaIcons, PersonalButton}
}
</script>

<style scoped lang="scss">
.introduction-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 5em;
  .welcome-text {
    font-weight: 400;
    font-size: 1.5em;
  }

  .name-text {
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
    font-size: 3em;
    margin: 20px 0 ;
  }

  .jobtitle-text {
    font-size: 2em;
    font-weight: 700;
    opacity: 0.8;
    margin-bottom: 4em;
  }
  .image{
    border-radius: 0 100px;

    width: calc(100% - 4em);
    box-shadow: 4rem 4rem 4rem rgba(#2B302F, 0.3);

  }
  .right-side{
    display: flex;
  width: $columnWidth;
    justify-content: space-between;
   }
}
</style>