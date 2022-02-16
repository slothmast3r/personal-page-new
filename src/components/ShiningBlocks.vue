<template>
  <div class="block-wrapper">
  <div class="block-wrapper-elem1">
    <div class="header">
      <div class="header--title-text">
        {{ title }}
      </div>
    </div>
    <div class="content">
      <div class="content--description-text">
        {{ description }}
      </div>
    </div>
  </div>
    <div class="overlay overlay__glow"></div>
  </div>
</template>

<script>
export default {
  name: "ShiningBlocks",
  props:{
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">
.block-wrapper{
  position: relative;
}
.overlay{
  position: absolute;
  box-shadow:
      0 0 60px 30px #fff,  /* inner white */
      0 0 100px 60px #f0f, /* middle magenta */
      0 0 140px 90px #0ff;
}
.block-wrapper-elem1{
  padding: 1.5rem;
  background: linear-gradient(to left, #373b44, #4286f4);
  border-radius: 1.5rem;
}
</style>