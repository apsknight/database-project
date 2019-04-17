<template>
<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form action="" method="" v-on:submit.prevent="register">
                            <div class="form-group row">
                                <label for="first_name" class="col-md-4 col-form-label text-md-right">First Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="first_name" v-model="first_name" class="form-control" name="first_name" required autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="last_name" class="col-md-4 col-form-label text-md-right">Last Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="last_name" v-model="last_name" class="form-control" name="last_name" required autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input type="text" id="email" v-model="email" class="form-control" name="email" required autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="text" id="password" v-model="password" class="form-control" name="password" required autofocus>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
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
    register () {
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