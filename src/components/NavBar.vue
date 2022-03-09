<template>
  <div
    v-if="!isMobile"
    id="navbar"
    class="main-nav-bar"
  >
    <nav-elements />
    <personal-button
      is-position-fixed
      :button-type="'secondary'"
      @click="downloadCV"
    >
      Resume
    </personal-button>
  </div>
  <div
    v-else
    class="nav-bar-mobile"
    id="navbar"
  >
    <div
      id="nav-toggle"
      @click="toggleActiveClass"
    >
      <span />
    </div>
  </div>
</template>

<script>
import PersonalButton from "./PersonalButton.vue";
import NavElements from "./NavElements.vue";
export default {
  name: "NavBar",
  components: {PersonalButton, NavElements},
  computed:{
    isMobile(){
      return window.screen.width <= 850
    }
  },

  methods:{
    downloadCV(){
      window.location = 'https://drive.google.com/uc?export=download&id=1jd-WmlEgXXm9DOH5Ftq6EqK3z1mzjChK'
    },
    toggleActiveClass(){
      const navToggle = document.getElementById('nav-toggle')
      navToggle.classList.toggle('active')
    },
  }
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
#nav-toggle {
  z-index: 10;
  position: absolute;
  cursor: pointer;
  padding: 1em 2em 1em 0em;
  background: $secondary-color;
  top: 1em;
  width: 1em;
  height: 1em;
  left: 1em;
  border-radius: 2em;
  $linePosition: 0.5em;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 0.125em;
    height: 0.3em;
    width: 2em;
    background: white;
    position: absolute;
    display: block;
    content: '';
    top: $linePosition;
    left: 0.5em;
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: calc(0.25em + $linePosition);
    left: 0;
  }
  span:after {
    top: calc(1em + $linePosition);
    left: 0;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: calc(0.25em + $linePosition);
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
.nav-bar-mobile{
  top: 0;
  position: sticky;
  z-index: 10;
  width: 100%;
  background: rgba($secondary-color, 0.8);
  height: 5em;
}
</style>