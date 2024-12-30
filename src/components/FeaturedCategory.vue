<template>
  <div
    class="featured-category-item"
    style="background-image: url(images/category-01.jpg)"
    v-for="tag in tags.splice(0,limit)"
  >
    <a href="#">{{tag.name}}</a>
  </div>
</template>
<script setup>
  defineProps({
   tags:{
    type:Object,
    required:true
   },
   limit:{
    type:Number,
    default:3
   }
  })
</script>
<script>
  import {RouterLink} from "vue-router"
</script>