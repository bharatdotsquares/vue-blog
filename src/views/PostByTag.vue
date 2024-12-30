<template>
  <section
    class="banner"
    style="
      background-color: #f5f5f5;
      background-image: url(/images/banner.jpg);
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <div class="container">
      <div class="d-flex justify-content-center align-items-center m-3">
            <div class="banner-content-main  p-2">
                <span class="fs-6 has-line">{{this.$route.params.slug.toUpperCase()}}</span>
            </div>
        </div>
      </div>
  </section>

  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="heading">{{ this.$route.params.slug.toUpperCase()  }} Posts</h4>
        </div>
      </div>
      <div class="row">
          <RecentPost v-for="post in posts" :post="post" :key="post.id"></RecentPost>
        </div>
      </div> 
  </section>

</template>
<script>
  import RecentPost from '@/components/RecentPost.vue';
  import PostService from "@/services/post.service"
  import DateHelper from "@/helpers/DateHelper"
  
  export default {
    components:{
        RecentPost,
    },
    mixins: [
     PostService,
     DateHelper
    ],
    mounted(){
        this.init()
    },
    methods:{
      async init(){
        this.getPostByTag(this.$route.params.slug)
      }
    }
  }
</script>