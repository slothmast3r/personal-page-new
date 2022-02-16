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
    <div
      data-aos="fade-left"
      class="right-side"
    >
      <img
        alt="My photo"
        src="@/assets/images/j.jpg"
        class="image"
      >
      <div class="margin-objects">
        <social-media-icons
          :image-width="'1.5'"
          is-rotated
        />
        <div class="line" />
        <div class="rotated-text">
          Follow me -
        </div>
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
  .right-side {

    width: $columnWidth;
    display: flex;
    justify-content: space-between;
    .image {
      width: 85%;
      border-radius: 0 100px;

      box-shadow: 4rem 4rem 4rem rgba(#2B302F, 0.3);

    }
    .margin-objects{
      display: flex;
      flex-direction: column;
      position: relative;
      .line{
        width: 1px;
        height: 2em;
        background: rgba(white,0.7);
        position: relative;
        right: 0;
      }
      .rotated-text{
        transform: rotate(-90deg);
        display: block;
        position: absolute;
        bottom: 5em;
        font-size: 1.2em;
        left: -2em;
        color: rgba(white, 0.7);
        width: max-content;
      }
    }
  }
}
</style>