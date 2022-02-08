<template>
  <div>
    <introduction />
    <paragraph
      :name-section="'My works'"
      :title="'My recent projects'"
    />
    <project-image></project-image>
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

<style scoped>

</style>