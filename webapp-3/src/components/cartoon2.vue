<template>
<div :style="'height:' + height + 'px'" class="container">
  <v-flex xs12 class="text-xs-center" mt-5>
  <article v-for="(location, idx) in locations" :key="idx">
    <v-carousel hide-delimiters interval="10000000">
    <v-carousel-item>
      <img height="500px"
           contain
           :src="location.image5" >
    </v-carousel-item>
    <v-carousel-item>
      <img 
            height="500px"
           contain
            :src="location.image6" >
    </v-carousel-item>
    <v-carousel-item>
      <img 
      height="500px"
           contain
      :src="location.image7" >
    </v-carousel-item>
  </v-carousel>
  </article>
  </v-flex>

</div>
</template>



<script>
import firebase from 'firebase'
import { db } from '../main'
export default {
  name: 'HelloWorld',
  data () {
    return {
      locations: [],
    }
  },
  firestore () {
    return {
      locations: db.collection('locations')
    }
  }
}
</script>

