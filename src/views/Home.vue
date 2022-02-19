<template>
  <div>
    <introduction />
    <section
      id="projects"
    >
      <paragraph
        :name-section="'My works'"
        :title="'My recent projects'"
      />
      <div
        class="projects-layout"
      >
        <project-image
          v-for="project in $store.state.myProjects"
          :key="project.key"
          data-aos="flip-up"
          :img-src="project.image"
          :overlay-title="project.title"
          :overlay-description="project.description"
          :class="project.wider? 'project-element': ''"
          @click="$router.push(`/personal-page-new/project/${project.key}`)"
        />
      </div>
    </section>
    <section
      id="skills"
      class="skills-layout"
    >
      <img
        class="skills-image"
        data-aos="fade-right"
        :src="require('/src/assets/images/Techstack.png')"
      >
      <paragraph
        class="left-paragraph"
        :name-section="'My skills'"
        :title="'Language & Tools'"
      />
    </section>
    <section
      id="contact"
      class="contact-layout"
    >
      <paragraph
        :name-section="'Contact me'"
        :title="'Drop me a message'"
        :description="'Feel free to contact me!'"
      >
        <contact-details />
      </paragraph>
      <email-form-contact
        data-aos="fade-left"
      />
    </section>

  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Paragraph from "@/components/Paragraph";
import ProjectImage from "@/components/ProjectImage";
import EmailFormContact from "@/components/EmailContactForm";
import ContactDetails from "../components/ContactDetails";
export default {
  name: "Home",
  components: { ContactDetails, EmailFormContact, ProjectImage, Paragraph, Introduction },
  data(){
    return {

    }
  },
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
.tools-image{
  width: 40em;
}
.skills-layout{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .skills-image{
    width: 45%;
  }
}
.left-paragraph{
  width: $columnWidth;
}
.contact-layout{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 700px) {
  section{
    flex-direction: column;
  }
  .left-paragraph{
    width: 100%;
  }
  .skills-layout{
    flex-direction: column-reverse;
    .skills-image{
      width: 100%;
    }
    margin-bottom: 2em;
  }
}
</style>