<template>
  <div>
    <introduction></introduction>
  </div>
</template>

<script>

import Introduction from "@/components/Introduction";
export default {
  name: 'App',
  components: {
    Introduction
  }
}
</script>

<style lang="scss">
body{
  background: $main-color;
}
#app {

}
</style>
