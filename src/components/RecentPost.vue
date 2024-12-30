<template>
  <div class="col-lg-4" v-for="post in posts.splice(0,limit)" :key="post.id">
    <div class="post-feature">
      <span class="fs-6 has-line">{{ post.tags }}</span>
      <h6>
        <a href="details">{{ post.title }}</a>
      </h6>
      <div class="blog-item-info-release">
        <span>{{ formatDate(new Date()) }}</span> <span class="dot"></span>
        <span>{{ minuteRead(post.body) }} min read</span>
      </div>
      <RouterLink :to="`/posts/tag/${post.id}`" class="btn btn-link"
        >Read Article
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    posts:{
      type: Array,
      required: true
    },
    limit:{
      type: Number,
      default: 3
    }
  })
</script>
<script> 
 import { RouterLink } from "vue-router";
 const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  export default {
    methods: {
      formatDate(date) {
        return `${date.getDate()} ${months[date.getMonth()-1]}  ${date.getFullYear()}`
      },
      minuteRead(description) {
          const words = description.match(/\b\w+\b/g);
          const wordCount = words? words.length : 0;
          return Math.ceil(wordCount / 50); // assuming average word length is 20 characters
      }
    }
  };
</script>
