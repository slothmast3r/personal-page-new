<template>
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
</template>

<script>
import PersonalButton from "@/components/PersonalButton";
export default {
  name: "Introduction",
  components: {PersonalButton}
}
</script>

<style scoped lang="scss">
.welcome-text{
  font-weight: 400;
  font-size: 1.5rem;
}
.name-text{
  font-family: 'Press Start 2P', cursive;
  font-weight: 700;
  font-size: 3rem;
}
.jobtitle-text{
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.8;
}
</style>