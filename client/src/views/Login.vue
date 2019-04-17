<template>
  <main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Log in</div>
                    <div class="card-body">
                        <form action="" method="" v-on:submit.prevent="login">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" id="email_address" v-model="email" class="form-control" name="email-address" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" v-model="password" class="form-control" name="password" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Log in
                                </button>
                                <a href="#" class="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
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
    login () {
      axios.post('/users/login',
        {
          email: this.email,
          password: this.password
        }).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({ name: 'Profile' })
      }).catch(err => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);
@import url(../../css/login.css);
</style>
