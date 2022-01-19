<template>
  <div class="nav-wrapper">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-el"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    tabs:{
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
$animate: all 0.2s ease-in-out;
.nav-wrapper {
  display: flex;
  gap: 3rem;
  .tab-el {
    font-weight: 700;
    display: block;
    font-family: sans-serif;
    font-size: 1rem;
    color: $secondary-color;
    position: relative;
    width: fit-content;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      background-color: $secondary-color;
      transform: scaleX(0);
      transition: all .3s ease-in-out;
      transform-origin: bottom left;
    }

    &:hover {
      color: $secondary-color;

      &:before {
        transform: scaleX(1);
      }
    }
  }
}
</style>