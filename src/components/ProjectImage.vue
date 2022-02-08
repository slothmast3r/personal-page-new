<template>
  <div>
    <div class="project-image">
      <img
        :src="require('@/assets/images/projects/nft.png')"
        class="photo"
      >
      <div class="overlay__hover">
        <div class="overlay__title">
          NFT COMPONENT
        </div>
        <div class="overlay__subtitle">
          Frontendmentor.io challenge
        </div>
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
  position: relative;
  width: fit-content;
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
  bottom: 0;
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
  .overlay__subtitle{
    margin: 0.8em;
    text-transform: uppercase;
    font-size: 0.9em;
    
  }
}

</style>