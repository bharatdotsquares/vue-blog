<template>
  <VueSlickCarousel :arrows="false" :dots="true" :slidesToShow="slidesToShow">
    <div v-for="post in posts">
      <div class="banner-content-main">
        <span class="fs-6 has-line">Interior</span>
        <h4>
          <a href="details">How to Get Started With Interior Design</a>
        </h4>
        <div class="blog-date">
          <div class="blog-date-start">
            <span>March 25, 2021</span>
          </div>
          <div class="blog-date-end">
            <span>4 min read</span>
          </div>
        </div>
        <p>
          Nulla et commodo turpis. Etiam hendrerit ornare pharetra. Cras
          eleifend purus vitae lorem venenatis bibendum. Sed commodo mi quis
          augue finibus, ut feugiat erat aliquam.
        </p>
        <a href="details" class="btn btn-default">Read More</a>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script setup>
 defineProps({
    posts: {
      type: Object,
      required: true
    }
  })
</script>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import configs from "./configs.js";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: configs.simple.settings
    };
  },

  mounted() {
    console.log("Carousel component is mounted");
  }
};
</script>
