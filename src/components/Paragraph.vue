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
    gap: 1em;
    text-transform: uppercase;
    font-size: 1.3em;
    margin: 0.6em 0;

    .line-section {
      width: 4em;
      height: 0.2em;
      background: $secondary-color;
    }
    .section-text{
      opacity: 0.8;
    }
  }
  .title-wrapper{
    font-size: 2em;
    color: $white-smoke;
    margin-top: 0.6em;
    margin-bottom: 0.8em;
    font-weight: 700;
  }
  .description-wrapper{
    line-height: 1.5em;
    opacity: 0.8;
  }

}
</style>