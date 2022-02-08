<template>
  <div>
    <introduction />
    <paragraph
      :name-section="'My works'"
      :title="'My recent projects'"
    />
    <div class="projects-layout">
      <project-image :img-src="require('@/assets/images/projects/nft.png')" />
      <project-image :img-src="require('@/assets/images/projects/commentSection.png')" />
      <project-image :img-src="require('@/assets/images/projects/restCountries.png')" />
      <project-image
           :img-src="require('@/assets/images/projects/qrCode.png')" />
      <project-image
        class="project-element"
        :img-src="require('@/assets/images/projects/clavo.svg')"
      />
    </div>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Paragraph from "@/components/Paragraph";
import ProjectImage from "@/components/ProjectImage";
export default {
  name: "Home",
  components: {ProjectImage, Paragraph, Introduction}
}
</script>

<style scoped lang="scss">
.projects-layout{
  display: grid;
  align-content: space-around;
  justify-content: space-between;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  .project-element{
    grid-column: 2 / -1;

  }
}
</style>