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
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form" v-on:submit.prevent="login" >
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model = "email"
                                            @input = "email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model = "password"
                                            placeholder="Password"
                                            @input = "password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @finished = "finished" >Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
require('../../node_modules/bootstrap/dist/css/bootstrap.css')
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js')

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    finished () {
     if(this.email!="" && this.password!=""){
        axios.post('/users/login',
            {
            email: this.email,
            password: this.password
            }).then(res => {
            localStorage.setItem('usertoken', res.data)
            this.email = ''
            this.password = ''
            router.push({ name: 'Profile' })
             this.emitMethod()
        }).catch(err => {
            alert("The username and / or password is incorrect")
            //console.log(err)
        })
       
      }else{
          alert("A username and password must be present")
      }
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
    // email(value) {
    //     email = value;
    // },
    // password(value){
    //     password = value;
    // }
  }
}
</script>
