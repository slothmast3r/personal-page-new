<template>
  <div class="container">
    <form
      id="form"
      :ref="'form'"
    >
      <div class="form-group">
        <label
          for="from_name"
          class="d-block"
        >
          <user-icon
            :width="20"
            :height="20"
            class="icon"
          />
        </label>
        <input
          id="from_name"
          v-model="name"
          class="form-styles form-styles-lg thick"
          type="text"
          name="from_name"
          :placeholder="'Name'"
        >
      </div>
      <div class="form-group">
        <label
          for="email"
          class="d-block"
        >
          <mail-icon
            :width="20"
            :height="20"
            class="icon"
          /></label>
        <input
          id="email"
          v-model="email"
          class="form-styles thick"
          type="email"
          name="reply_to"
          :placeholder="'Email'"
        >
      </div>
      <div class="form-group message">
        <textarea
          v-model="message"
          class="form-styles message"
          name="message"
          cols="30"
          rows="7"
          :placeholder="'Message'"
        />

      </div>
      <personal-button
          button-type="primary"
          @click="sendEmail"
      >
        SEND
      </personal-button>

    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import UserIcon from '@/assets/images/person_ico'
import MailIcon from '@/assets/images/mail'
import PersonalButton from "@/components/PersonalButton";
init("user_jFHRe62nkzTevWEmjtjml");


export default {
  name: "EmailFormContact",
  components:{
    PersonalButton,
    UserIcon,
    MailIcon
  },
  data(){
    return{
      email: '',
      name: '',
      message:'',
    }
  },
  methods:{

    sendEmail(e) {
      if(this.name && this.message && this.email) {
        try {
          emailjs.sendForm('service_7tpkd37', 'template_1qw4kkm', document.getElementById('form'),
              'user_jFHRe62nkzTevWEmjtjml', {
                from_name: this.name,
                to_name: 'Oskar',
                reply_to: this.email,
                message: this.message
              })

        } catch (error) {
          console.log({error})
          //error
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        //success
      }else{
        //error
      }
    },
  }
}
</script>

<style scoped lang="scss">

.container {
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form.container{
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and (max-width: 700px){

    width: calc(100% - 40px);
  }
  ::placeholder{
    font-weight: bold;
    color: #838788;
  }
}

label {
  float: left;
}
.d-block {
  position: absolute;
  .icon{
    color: #57565c;
    height: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.1rem;
  }
}
.form-group{
  margin: 10px 0;
  width: 100%;
}
.form-styles{
  background-color: #f2f6f8;
  border-radius: 2rem;
  border: none;
  width: 75%;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);

  @media screen and (max-width: 700px){

    width: fit-content;
  }
  &.thick {
    height: 2.3rem;
    padding: .5rem 3.5rem;

  }
  input,
  textarea {
    color: #212529;
    font-size: 1.1rem;
  }
  &:focus {
    background-color: #f2f6f8;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
  &.message{
    resize: vertical;
    padding: .5rem 1.8rem;
  }
}
.header{
  font-size: 40px;
  font-weight: bold;
}



</style>