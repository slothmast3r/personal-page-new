<template>
  <div id="home">
    <div
      id="navbar"
      class="main-nav-bar"
    >
      <nav-bar />
      <personal-button
        is-position-fixed
        :button-type="'secondary'"
      >
        Resume
      </personal-button>
    </div>
    <router-view class="main-wrapper" />
    <div class="footer">
      <div class="logo">
        oskstr.
      </div>
      <social-media-icons />
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import PersonalButton from "@/components/PersonalButton";
import AOS from 'aos'
import 'aos/dist/aos.css'
import SocialMediaIcons from "./components/SocialMediaIcons.vue";
export default {
  name: 'App',
  components: {
    SocialMediaIcons,
    PersonalButton,
    NavBar,
  },
  mounted() {
    AOS.init()
    window.addEventListener('scroll',this.handleNavBar)
  },
  unmounted() {
    window.removeEventListener('scroll',this.handleNavBar)
  },
  methods:{
    handleNavBar(event){
      if(window.scrollY > 20 ){
        document.getElementById("navbar").classList.add('scrolled')
      }else{
        document.getElementById("navbar").classList.remove('scrolled')
      }
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  background: $main-color;
  font-family: 'Rubik', sans-serif;
  color: $white-smoke;
  font-size: 1rem;
  //#TODO Because of the data-aos="fade-left" in Home.vue
  overflow-x: hidden;

}
#app {

}
.main-wrapper{
  width: 100%;
  box-sizing: border-box;
  padding: 9rem 6rem 2rem 6rem;
}
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
.section{
  display: flex;
}
.footer{
  .logo{
    font-family: "Press Start 2P", cursive;
    color: #3B0D11;
    font-size: 2em;
    background: linear-gradient(346deg, rgba(#3B0D11,1) 0%, rgba(#9c0606,1) 86%);
    -webkit-background-clip: text;
    width: fit-content;
    -webkit-text-fill-color: transparent;
  }
}
@media (max-width: 1300px) {
  .main-wrapper{
    width: 100%;
    box-sizing: border-box;
    padding: 9rem 1.5rem 2rem 1.5rem;
  }
}
</style>
