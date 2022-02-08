<template>
  <div>
    <div class="project-image">

      <div class="overlay__hover">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectImage"
}
</script>

<style scoped lang="scss">
.project-image{
  width: 300px;
  height: 300px;
  position: relative;
  border: 1px red solid;
}
.overlay__hover{
  background: white;
  position: absolute;
  height: 35%;
  bottom: 0;
  width: 100%;
}
.project-image:hover + .overlay__hover{

}
</style>