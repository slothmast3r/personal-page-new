<template>
  <div>
    <div class="main-nav-bar">
      <nav-bar
        :tabs="mainTabs"
      />
      <personal-button>Resume </personal-button>
    </div>
    <introduction />
  </div>
</template>

<script>

import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";
import PersonalButton from "@/components/PersonalButton";
export default {
  name: 'App',
  components: {
    PersonalButton,
    NavBar,
    Introduction
  },
  data(){
    return{
      mainTabs : [
          {name: 'Home', id: 'home'},
          {name: 'Projects', id: 'projects'},
          {name: 'About me', id: 'aboutMe'},
          {name: 'Contact', id: 'contact'},
      ]
    }
  }
}
</script>

<style lang="scss">
body{
  background: $main-color;
  font-family: 'Rubik', sans-serif;
  color: $white-smoke;
  margin: 2rem 6rem;
}
#app {

}
.main-nav-bar {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 3rem;
}
</style>
