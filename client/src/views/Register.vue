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
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="First Name"
                                            v-model="first_name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Last Name"
                                            v-model="last_name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model="email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @finished="finished">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
</template>

  
<script>
import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    finished () {
      axios.post('/users/register',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        }).then(res => {
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.password = ''
        console.log(res)
        if (res.data.success === false) {
          alert('Email already resgistered')
        }else{
          alert(res.data.status)
          router.push({ name: 'Login' })
        }
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