<template>
  <nav class="nav-wrapper">
    <a
      v-for="tab in $store.state.navTabs"
      :key="tab.id"
      class="tab-el"
      @click="$router.push(`/personal-page-new/#${tab.id}`)"
    >
      {{ tab.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped lang="scss">
$animate: all 0.2s ease-in-out;
.nav-wrapper {
  display: flex;
  gap: 3em;
  .tab-el {
    font-weight: 700;
    display: block;
    font-family: sans-serif;
    font-size: 1em;
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
      bottom: -0.5em;
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