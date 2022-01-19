<template>
  <button
    :ref="'refButton'"
    class="hover-button"
    :class="buttonType === 'primary' ? 'primary-personal-button' : 'secondary-personal-button'"
  >
    <div class="slot-class">
      <slot />
    </div>
    <span :ref="'refSpan'" />
  </button>
</template>

<script>
export default {
  name: "PersonalButton",
  props:{
    buttonType:{
      type: String,
      default: 'primary',
    }
  },
  mounted() {
    const element = this.$refs.refButton;
    console.log(element)
    const spanEl = element.querySelector("span")
    element.addEventListener("mouseover", e => {
      spanEl.style.left = e.pageX - element.offsetLeft + "px";
      spanEl.style.top = e.pageY - element.offsetTop + "px";
      element.classList.add("mouse-in");
    })
    element.addEventListener("mouseout", e => {
      spanEl.style.left = e.pageX - element.offsetLeft + "px";
      spanEl.style.top = e.pageY - element.offsetTop + "px";
      element.classList.remove("mouse-in");

    });
    // ELEMENTS.forEach((element, index) => {
    //   // If The span element for this element does not exist in the array, add it.
    //   if (!ELEMENTS_SPAN[index])
    //     ELEMENTS_SPAN[index] = element.querySelector("span");
    //
    //   element.addEventListener("mouseover", e => {
    //     ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    //     ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    //   })
    //
    //   element.addEventListener("mouseout", e => {
    //     ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    //     ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    //   });
    // });

  },
}
</script>

<style scoped lang="scss">
.hover-button{
  --width: 100%;
  --time: 0.7s;

  position: relative;
  display: inline-block;
  //height: 1em;
  //padding: 1em;

  color: white;
  background: #222;
  overflow: hidden;
  span {
    position: absolute;
    display: block;
    content: "";
    z-index: 0;
    width: 0;
    height: 0;

    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: width var(--time), padding-top var(--time);

  }
  .slot-class{
     position: relative;
     z-index: 5;

     transition: color var(--time);
  }
}

.primary-personal-button{
  color: $white-smoke;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-weight: 700;
  background: $secondary-color;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  span{
    background: $white-smoke;
  }
  &:hover .slot-class{
    color: $secondary-color;
  }
}

.secondary-personal-button{
  color: $third-color;
  cursor: pointer;
  outline: inherit;
  font-weight: 700;
  background: none;
  padding: 0.8rem 1.6rem;
  border: 1px solid $third-color;
  font-size: 1rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  span{
    background: $third-color;
  }
  &:hover .slot-class{
    color: $main-color;
  }
}
.hover-button:hover span {
  width: calc(var(--width) * 2.25);
  padding-top: calc(var(--width) * 2.25);
}

</style>