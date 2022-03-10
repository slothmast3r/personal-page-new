<template>
  <div>
    <div class="project-title--wrapper">
      <div class="project-title--text">
        Project Details
      </div>
      <div class="project-subtitle--subtext">
        <div class="line" />
        <div>Portfolio/Portfolio details</div>
      </div>
    </div>
    <div class="project-content--wrapper">
      <img
        :src="currentProject.image"
        :alt="`${currentProject.title} image`"
      >
      <div>
        <div class="project-title--text">
          {{ currentProject.title }}
        </div>
        <div
          v-if="currentProject.component"
          class="project-description--text"
        >
          <component :is="currentProject.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NFTComponent from "@/components/projectDescription/NFTComponent.vue";
import CommentSection from "@/components/projectDescription/CommentSection.vue";
import RestCountries from "@/components/projectDescription/RestCountries.vue";
import QRCodeComponent from "@/components/projectDescription/QRCodeComponent.vue";
import Clavo from "@/components/projectDescription/Clavo.vue";
export default {
  name: "ProjectDetails",
  components: { NFTComponent, CommentSection, RestCountries, QRCodeComponent, Clavo },
  computed: {
    currentProject() {
      return this.$store.state.myProjects.find(
        (el) => el.key === this.$route.params.key
      );
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.project-title--text {
  font-weight: 800;
  font-size: 3.5em;
  margin-bottom: 0.5em;
}
.project-title--wrapper {
  .project-subtitle--subtext {
    display: flex;
    align-items: center;
    color: rgba(white, 0.7);
    gap: 1em;

    .line {
      width: 3em;
      height: 2px;
      background: $secondary-color;
    }
  }
}

.project-content--wrapper {
  margin: 4em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10em;
  justify-content: space-between;
  img {
    background: white;
    width: 100%;
  }
  .project-title--text {
    border-bottom: 0.1em solid $secondary-color;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  .project-description--text {
    line-height: 1.6em;
    font-size: 1.4em;
  }
}
</style>
