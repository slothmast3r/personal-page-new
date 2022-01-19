<template>
  <div class="paragraph-wrapper">
    <div class="section-wrapper">
      <div class="line-section" />
      <div class="section-text">
        {{ nameSection }}
      </div>
    </div>
    <div class="title-wrapper">
      <div class="text-title">
        {{ title }}
      </div>
    </div>
    <div class="description-wrapper">
      <div class="description-text">
        {{ description }}
      </div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Paragraph",
  props:{
    title:{
      type: String,
      default: '',
    },
    nameSection:{
      type: String,
      required: true
    },
    description:{
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">
.paragraph-wrapper{
  .section-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    margin: 1rem 0;

    .line-section {
      width: 4rem;
      height: 0.2rem;
      background: $secondary-color;
    }
    .section-text{
      opacity: 0.8;
    }
  }
  .title-wrapper{
    font-size: 2rem;
    color: $white-smoke;
    margin: 1.5rem 0;
    font-weight: 700;
  }
  .description-wrapper{
    line-height: 1.5rem;
    opacity: 0.8;
  }

}
</style>