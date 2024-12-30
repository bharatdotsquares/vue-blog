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
              <component :is="VueSlickCarousel" />
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
        <div class="col-lg-4" v-for="i in 5" :key="i">
          <component :is="RecentPost" />
        </div>
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
        <div class="col-lg-4 col-md-6">
          <component :is="LatestPost" />
        </div>
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
        <div class="col-lg-6 col-md-6">
          <!-- <FeaturedPost></FeaturedPost> -->
          <component :is="FeaturedPost" />
        </div>
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
            <component :is="AllPost" />
          </div>
        </div>
        <div class="col-lg-12 mt-4 mt-lg-0">
          <div class="featured-category">
            <h6>Featured Category</h6>

            <component :is="FeaturedCategory" />
          </div>
          <div class="all-tags">
            <h6>All Tags</h6>
            <component :is="AllTags" />
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
export default {
  name: "Home",
  components: {
    VueSlickCarousel,
    FeaturedPost,
    RecentPost,
    LatestPost,
    FeaturedCategory,
    AllTags
  },
  computed: {
    LatestPost() {
      return LatestPost;
    },
    FeaturedPost() {
      return FeaturedPost;
    },
    VueSlickCarousel() {
      return VueSlickCarousel;
    },
    RecentPost() {
      return RecentPost;
    },
    AllPost() {
      return AllPost;
    },
    FeaturedCategory() {
      return FeaturedCategory;
    },
    AllTags() {
      return AllTags;
    }
  }
};
</script>
