<template>
  <div>
    <div class="main-nav-bar">
      <nav-bar
        :tabs="mainTabs"
      />
      <personal-button :button-type="'secondary'">
        Resume
      </personal-button>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import PersonalButton from "@/components/PersonalButton";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'App',
  components: {
    PersonalButton,
    NavBar,
  },
  data(){
    return{
      mainTabs : [
          {name: 'Home', id: 'home'},
          {name: 'Projects', id: 'projects'},
          {name: 'About me', id: 'aboutMe'},
          {name: 'Contact', id: 'contact'},
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style lang="scss">
body{
  background: $main-color;
  font-family: 'Rubik', sans-serif;
  color: $white-smoke;
  margin: 2rem 6rem;
  font-size: 1rem;
}
#app {

}
.main-nav-bar {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 3rem;
}
.section{
  display: flex;
}
</style>
