<template>
  <div
    id="navbar"
    class="main-nav-bar"
  >
    <nav-elements />
    <personal-button
      is-position-fixed
      :button-type="'secondary'"
    >
      Resume
    </personal-button>
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
  methods:{
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
  display: none;
  position: absolute;
  cursor: pointer;
  padding: 1em 2em 1em 0;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 0.125em;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -0.625em;
  }
  span:after {
    bottom: -0.625em;;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>