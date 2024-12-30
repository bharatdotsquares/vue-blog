<template>
  <ul class="list-unstyled list-inline all-tags-list">
    <li class="list-inline-item mt-1" v-for="tag in tags.splice(0,limit)">
      <RouterLink :to="`/posts/tag/${tag.slug}`">{{tag.name}}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
  defineProps({
   tags:{
    type:Object,
    required:true
   },
   limit : {
    type:Number,
    default:10
   }
  })
</script>
<script>
  import {RouterLink} from "vue-router"
</script>