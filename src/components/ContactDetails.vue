<template>
  <div>
    <phone></phone>
    <mail-thick :fill-color="'#3B0D11'"></mail-thick>
  </div>
</template>

<script>
import Phone from "../assets/icons/phone";
import MailThick from "../assets/icons/mail_thick";
export default {
  name: "ContactDetails",
  components: {MailThick,  Phone}
}
</script>

<style scoped lang="scss">

</style>