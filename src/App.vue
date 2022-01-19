<template>
  <div>
    <nav-bar :tabs="mainTabs"></nav-bar>
    <introduction></introduction>
  </div>
</template>

<script>

import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {
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
}
#app {

}
</style>
