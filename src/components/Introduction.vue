<template>
  <div class="introduction-wrapper">
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
      <PersonalButton :button-type="'secondary'">
        Get in touch
      </PersonalButton>
    </div>
    <div>
      <img
        alt="My photo"
        src="@/assets/images/j.jpg"
        class="image"
      >
    </div>
  </div>
</template>

<script>
import PersonalButton from "@/components/PersonalButton";
export default {
  name: "Introduction",
  components: {PersonalButton}
}
</script>

<style scoped lang="scss">
.introduction-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .welcome-text {
    font-weight: 400;
    font-size: 1.5rem;
  }

  .name-text {
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
    font-size: 3rem;
    margin: 20px 0 ;
  }

  .jobtitle-text {
    font-size: 2rem;
    font-weight: 700;
    opacity: 0.8;
    margin-bottom: 4rem;
  }
  .image{
    width: 500px;
    border-radius: 0 100px;

    box-shadow: 4rem 4rem 4rem rgba(#2B302F, 0.3);

  }
}
</style>