<template>
  <!-- Blog Details Banner Starts Here -->
  <section class="details-banner">
    <img
      :src="'images/detailsbanner.jpg'"
      alt="Background Image"
      class="img-fluid w-100"
    />
  </section>
  <!-- Blog Details Banner Ends Here -->

  <!-- Blog Details Intro Starts Here -->
  <section class="blog-intro">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <component :is="BlogIntro" />
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Details Intro Ends Here -->

  <!-- Blog Article Starts Here -->
  <section class="blog-article section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-2">
              <component :is="BlogCount" />
            </div>
            <div class="col-lg-10">
              <component :is="BlogContent" />
              <component :is="BlogSocial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Article Ends Here -->

  <!-- Blog Item Feature Starts Here -->
  <section class="blog-item-feature">
    <div class="container">
      <div class="blog-item-feature-heading">
        <h4>You May Also Like</h4>
        <a href="#">View All</a>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 mb-4 mb-md-0 mb-lg-0">
          <component :is="FeaturedPost" />
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Item Feature Ends Here -->

  <!-- Comments Area Starts Here -->
  <component :is="CommentSection" />
  <!-- Comments Area Ends Here -->
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import FeaturedPost from "@/components/FeaturedPost.vue";
import BlogIntro from "@/components/BlogIntro.vue";
import BlogContent from "@/components/BlogContent.vue";
import BlogCount from "@/components/BlogCount.vue";
import BlogSocial from "@/components/BlogSocial.vue";

export default {
  components: {
    BlogIntro,
    BlogCount,
    BlogContent,
    BlogSocial,
    CommentSection,
    FeaturedPost
  },
  computed: {
    BlogIntro() {
      return BlogIntro;
    },
    BlogCount() {
      return BlogCount;
    },
    BlogContent() {
      return BlogContent;
    },
    CommentSection() {
      return CommentSection;
    },
    FeaturedPost() {
      return FeaturedPost;
    },
    BlogSocial() {
      return BlogSocial;
    }
  }
};
</script>
