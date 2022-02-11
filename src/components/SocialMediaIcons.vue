<template>
  <div>
    <div
      v-for="icon in socialMediaWithUrl"
      :key="icon.key"
    >
      {{ icon.key }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaIcons",
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

<style scoped>

</style>