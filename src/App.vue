<template>
  <div>
    <nav-bar :tabs="[{name: 'XDDDDDDDDDDDDDDDDDDD', id: 1}]"></nav-bar>
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
