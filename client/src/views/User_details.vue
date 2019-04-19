<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-15"
                          body-classes="px-lg-15 py-lg-15"
                          class="border-0">
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Minimum Donation Amount"
                                            v-model="minimum_donation"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Content Type"
                                            v-model="content"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Link To Content"
                                            v-model="link_content"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            v-model="about_you"
                                            placeholder="About You"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @finished="finished">Continue</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

  
<script>
import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      minimum_donation: '',
      content: '',
      link_content: '',
      about_you: ''
    }
  },

  methods: {
    finished () {
      axios.post('/users/register/details',
        {
          minimum_donation: this.minimum_donation,
          content: this.content,
          link_content: this.link_content,
          about_you: this.about_you
        }).then(res => {
        this.minimum_doantion = ''
        this.content = ''
        this.link_content= ''
        this.about_you = ''
        console.log(res)
        alert(res.data.status)
        router.push({ name: 'Login' })
        
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);
@import url(../../css/register.css);
</style>