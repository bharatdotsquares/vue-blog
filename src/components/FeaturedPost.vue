<template> 
    <div
      class="col-lg-4 col-md-6"
      v-for="post in posts.splice(0, limit)"
      :key="post.id"
    >
    <div class="blog-item">
      <div class="blog-item-image">
        <a href="details">
          <img :src="'images/01.jpg'" alt="Image" />
        </a>
      </div>
      <div class="blog-item-info">
        <span class="fs-6 has-line">{{post.tags}}</span>
        <h5>
          <a href="details">{{post.tags}}</a>
        </h5>
        <div class="blog-item-info-release">
          <span>March 25, 2021</span> <span class="dot"></span>
          <span>4 min read</span>
        </div>
        <a href="details" class="btn btn-link"
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
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Object,
    required: true
  },
  limit: {
    type: Number,
    default: 3
  }
});
</script>
<script >
  export default {
    mounted(){
      console.log("mounted");
    }
  }
</script>