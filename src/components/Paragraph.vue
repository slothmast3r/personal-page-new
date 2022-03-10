<template>
  <div class="paragraph-wrapper">
    <div class="line-wrapper">
      <div class="line" />
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
  .line-wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 0.6em 0;

    .line {
      width: 4em;
      height: 0.2em;
      background: $secondary-color;
    }
    .section-text{
      opacity: 0.8;
    }
  }
  .title-wrapper{
    font-size: 4.2em;
    color: $white-smoke;
    margin-bottom: 0.4em;
    font-weight: 700;
  }
  .description-wrapper{
    line-height: 1.5em;
    font-size: 1.3em;
    opacity: 0.8;
  }

}
@media screen and (max-width: 850px) {

  .paragraph-wrapper{
  .line-wrapper{
    font-size: 1.3em;
  }
  .title-wrapper{
    margin-top: 0.8em;
    font-size: 2em;
    margin-bottom: 0.8em;
  }
    .description-wrapper{
      font-size: 1em;
    }
}}
</style>