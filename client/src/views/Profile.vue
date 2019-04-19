<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                             <!--   <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                                -->
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Donate</base-button>
                                    <base-button type="default" size="sm" class="float-right">Feedback</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{first_name}} {{last_name}}
                                <span class="font-weight-light">, 22</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{email}}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{content}}</div>
                            <div><i class="ni education_hat mr-2"></i>{{link}}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{about_you}}</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import router from '../router'

export default {
  data () {   
    return {
      first_name: null,
      last_name: null,
      email: null,
      minimum_donation_amount: null,
      about_you: null,
      content: null,
      link: null 
    }
  },
  mounted(){
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    this.first_name = decoded.first_name
    this.last_name = decoded.last_name
    this.email = decoded.email
    axios.post('/users/get_details',
    {
        email:decoded.email
    }).then((res) =>{
        console.log(res);
        this.minimum_donation_amount = res.data.Minimun_Donation_Amount
        this.content = res.data.Content_Type
        this.link = res.data.Link_To_Content
        this.about_you = res.data.About_You

    })
    }
}
</script>
