<template>
  <div id="home">
    <nav-bar />
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

import AOS from 'aos'
import 'aos/dist/aos.css'
import SocialMediaIcons from "./components/SocialMediaIcons.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar,
    SocialMediaIcons,
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
    padding: 7rem 1.5rem 2rem 1.5rem;
  }
}
</style>
