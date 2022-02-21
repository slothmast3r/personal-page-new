<template>
  <div>
    <div class="project-image">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        :alt="'ProjectPhoto: ' + overlayTitle"
        :style="{
          width: '100%',
          height: iconHeight
        }"
      >
      <div class="overlay__hover">
        <div class="overlay__title">
          {{ overlayTitle }}
        </div>
        <div class="overlay__description">
          {{ overlayDescription }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectImage",
  props:{
    overlayTitle:{
      type: String,
      default: ''
    },
    overlayDescription:{
      type: String,
      default: ''
    },
    photoHeight:{
      type: Number,
      default: 1
    },
    imgSrc:{
      default: undefined,
      type: String
    },
    clavo:{
      default: false,
      type: Boolean
    }

  },
  computed:{
    iconHeight(){
      let isClavoHeight = this.clavo ? this.photoHeight * 27 + 'vw' : ''
      let height =  window.screen.width > 850 ? this.photoHeight * 27 + 'vw' : isClavoHeight
      return height
    },
  },
}
</script>

<style scoped lang="scss">
.project-image{
  position: relative;
  width: fit-content;
  img {
    background: white;
  }
  &:hover .overlay__hover{
    height: 8em;
    visibility: visible;
    color: black;
}
}
.overlay__hover{
  background: white;
  position: absolute;
  background: $white_smoke;
  bottom: 0.25em;
  visibility: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s cubic-bezier(0.28, 0.27, 0.21, 1.72);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: transparent;
  .overlay__title{
    margin: 0.5em;
    font-weight: 800;
    text-transform: uppercase;
  }
  .overlay__description{
    margin: 0.8em;
    text-transform: uppercase;
    font-size: 0.9em;
    opacity: 0.8;
    
  }
}

</style>