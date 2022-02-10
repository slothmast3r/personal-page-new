<template>
  <div>
    <introduction />
    <paragraph
      :name-section="'My works'"
      :title="'My recent projects'"
    />
    <div class="projects-layout">
      <project-image
        v-for="project in projectsData"
        :key="project.key"
        :img-src="project.image"
        :overlay-title="project.title"
        :overlay-description="project.description"
        :class="project.wider? 'project-element': ''"
      />
    </div>
    <div>
      <paragraph
        :name-section="'My skills'"
        :title="'Language & Tools'"
      />
    </div>
    <div class="contact-layout">
      <paragraph
        :name-section="'Contact me'"
        :title="'Drop me a message'"
        :description="'Feel free to contact me!'"
      />
      <email-form-contact></email-form-contact>
    </div>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Paragraph from "@/components/Paragraph";
import ProjectImage from "@/components/ProjectImage";
import EmailFormContact from "@/components/EmailContactForm";
export default {
  name: "Home",
  components: {EmailFormContact, ProjectImage, Paragraph, Introduction},
  data(){
    return {
      projectsData: [
        {
          key: 'nft-frontend',
          description: 'Frontendmentor.io challenge',
          title: 'NFT Component',
          image: require('@/assets/images/projects/nft.png')
        },
        {
          key: 'comment-section',
          description: 'Frontendmentor.io challenge',
          title: 'Interactive Comment section',
          image: require('@/assets/images/projects/commentSection.png')
        },
        {
          key: 'rest-countries',
          description: 'Frontendmentor.io challenge',
          title: 'RESTFUL countries with api',
          image: require('@/assets/images/projects/restCountries.png')
        },
        {
          key: 'qr-code',
          description: 'Frontendmentor.io challenge',
          title: 'QR-code component',
          image: require('@/assets/images/projects/qrCode.png')
        },
        {
          key: 'clavo',
          description: 'Simplified team member availability',
          title: 'CLAVO',
          image: require('@/assets/images/projects/clavo.svg'),
          wider: true
        },
      ]
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
.contact-layout{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>