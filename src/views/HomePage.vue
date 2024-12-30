<template>
  <!-- Banner Starts Here -->
  <section
    class="banner"
    style="
      background-color: #f5f5f5;
      background-image: url(images/banner.jpg);
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="banner-slider">
            <div class="banner-content">
              <!-- <VueSlickCarousel :posts="posts"  /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Banner Ends Here -->

  <!-- Post Feture Starts Here -->
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="heading">Recent Post</h4>
        </div>
      </div>
      <div class="row">
        <RecentPost :posts="posts" :limit="5" />
      </div>
    </div>
  </section>
  <!-- Post Feture Ends Here -->

  <!-- Latest Post Starts Here -->
  <section class="section-padding latest-post-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="heading">Latest Post</h4>
        </div>
      </div>
      <div class="row">
        <LatestPost :posts="posts" :limit="5" />
      </div>
    </div>
  </section>
  <!-- Latest Post Ends Here -->

  <!-- Featured Post Starts Here -->
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="heading">Featured Post</h4>
        </div>
      </div>
      <div class="row">
        <FeaturedPost :posts="posts" :limit="5" />
      </div>
    </div>
  </section>
  <!-- Featured Post Ends Here -->

  <!-- All Post Starts Here -->
  <section class="section-padding all-post-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="heading">All Post</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <AllPost :posts="posts" :limit="3" />
          </div>
        </div>
        <div class="col-lg-12 mt-4 mt-lg-0">
          <div class="featured-category">
            <h6>Featured Category</h6>
            <FeaturedCategory :tags="tags" :limit="3" />
          </div>
          <div class="all-tags">
            <h6>All Tags</h6>
            <AllTags :tags="tags" :limit="10" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- All Post Ends Here -->
</template>

<script>
import VueSlickCarousel from "@/components/carousel.vue";
import FeaturedPost from "@/components/FeaturedPost.vue";
import RecentPost from "@/components/RecentPost.vue";
import LatestPost from "@/components/LatestPost.vue";
import AllPost from "@/components/AllPost.vue";
import FeaturedCategory from "@/components/FeaturedCategory.vue";
import AllTags from "@/components/AllTags.vue";
import PostService from "@/services/post.service";
export default {
  name: "Home",
  components: {
    VueSlickCarousel,
    AllPost,
    RecentPost,
    FeaturedPost,
    LatestPost,
    FeaturedCategory,
    AllTags
  },
  mixins: [PostService],
  computed:{
    FeaturedPost:()=>FeaturedPost
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.getAllPosts();
      await this.getTags();
    }
  }
};
</script>
