<template>
  <div
    id="navbar"
    class="main-nav-bar"
  >
    <nav-elements></nav-elements>
    <personal-button
      is-position-fixed
      :button-type="'secondary'"
    >
      Resume
    </personal-button>
  </div>
</template>

<script>
import PersonalButton from "./PersonalButton.vue";
import NavElements from "./NavElements.vue";
export default {
  name: "NavBar",
  components: {PersonalButton, NavElements}
}
</script>

<style scoped lang="scss">

.main-nav-bar {
  background: $main-color;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 3rem;
  z-index: 10;
  padding: 2em 6em;
  box-sizing: border-box;
  transition: all 500ms ease-in-out;
  &.scrolled{
    padding: 0 6em;
    box-shadow: 0 0.25em 0.25em rgba(black, 0.5);
  }
}
</style>