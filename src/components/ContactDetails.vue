<template>
  <div>
    <div class="detail-row">
      <phone class="icon" /> <div> +48 577 966 612</div>
    </div>
    <div class="detail-row">
      <mail-thick class="icon" />
      <div
        class="mail"
        @click="openMail"
      >
        {{ mail }}
      </div>
    </div>
  </div>
</template>

<script>
import Phone from "../assets/icons/phone";
import MailThick from "../assets/icons/mail_thick";
export default {
  name: "ContactDetails",
  components: {MailThick,  Phone},
  data(){
    return{
      mail: 'oskar@straszynski.pl'
    }
  },
  methods:{
    openMail(){
      window.open(`mailto:${this.mail}`)
    },
  }
}
</script>

<style scoped lang="scss">
.icon{
  padding: 0.6em;
  width: 1.5em;
  background: rgba(white,0.4);
  border-radius: 0.8em;
}
.detail-row{
  margin: 0.6em 0;
  display: flex;
  align-items: center;
  gap: 1em;
  .mail{
    cursor: pointer;
  }
}
</style>