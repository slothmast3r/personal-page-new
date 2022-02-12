<template>
  <div>
    <div
      v-for="icon in socialMediaWithUrl"
      :key="icon.key"
    >
      <component
        :is="icon.image"
        width="2"
        height="2"
      />
    </div>
  </div>
</template>

<script>
import frontendmentor from "@/assets/icons/socialMedia/frontendmentor";
import github from "@/assets/icons/socialMedia/github";
import instagram from "@/assets/icons/socialMedia/instagram";
import linkedin from "@/assets/icons/socialMedia/linkedin";
import youtube from "@/assets/icons/socialMedia/youtube";

export default {
  name: "SocialMediaIcons",
  components: {frontendmentor, github, instagram, linkedin, youtube},
  data(){
    return{
      socialMedia: [
        {
          key: 'instagram',
          image: 'instagram',
          // url: 'instagram.com/oskstr',
        },
        {
          key: 'github',
          image: 'github',
          url: 'github.com/slothmast3r',
        },
        {
          key: 'frontendmentor',
          image: 'frontendmentor',
          url: 'https://www.frontendmentor.io/profile/slothmast3r',
        },
        {
          key: 'linkedin',
          image: 'linkedin',
          url: 'https://www.linkedin.com/in/oskar-straszynski-6460b3124/',
        },
        {
          key: 'youtube',
          image: 'youtube',
          url: 'https://www.youtube.com/channel/UCn8b7RiPxXo4cJuVLAOr8CA',
        },
      ],
    }
  },
  computed:{
    socialMediaWithUrl(){
      return this.socialMedia.filter( x=> x.url)
    }
  }
}
</script>

<style scoped lang="scss">
.icon-image{
  width: 2em;
  fill: #212529;
}
</style>