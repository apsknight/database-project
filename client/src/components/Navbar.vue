<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <a slot="title" href="#" class="nav-link" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <router-link class="nav-link" to="/">Home</router-linK>
                    </a>
                    <a v-if="auth==''" slot="title" href="#" class="nav-link" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <router-link class="nav-link" to="/login">Log in</router-linK>
                    </a>
                     <a v-if="auth==''" slot="title" href="#" class="nav-link" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                       <router-link class="nav-link" to="/register">Sign up</router-linK>
                    </a>
                     <a sv-if="auth==''" lot="title" href="#" class="nav-link" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <router-link class="nav-link" to="/explore">Explore</router-linK>
                    </a>
                     <a v-if="auth=='loggedin'" slot="title" href="#" class="nav-link" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                       <router-link class="nav-link" to="/profile">Profile</router-linK>
                    </a>
                     <a v-if="auth=='loggedin'" slot="title" href="" v-on:click="logout" class="nav-link" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        Log out
                    </a>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import EventBus from '../views/EventBus'

export default {
  data(){
    return{
      auth: '',
      user: ''
    }
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  method: {
     logout () {
      localStorage.removeItem('usertoken')
    }
  },
  mounted(){
     EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
};
</script>
<style>
</style>