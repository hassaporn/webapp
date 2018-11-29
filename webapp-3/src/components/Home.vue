<template>
<v-app>  
  <v-hover>    
    <v-card flat
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      id = "pudding"
    >

        <article v-for="(location, idx) in locations" :key="idx">
        <img :src="location.image1" >
        </article>

      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn to="/cartoon1"
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>book</v-icon>
        </v-btn>
        <h3 id="maintitle-th">คนอะไรเป็นแฟนหมี</h3>
        <div id="description-th">มาดูกันว่าคนอะไรเป็นแฟนหมี ?</div>      
        
      </v-card-text>


        <article v-for="(location, idx) in locations" :key="idx">
        <img :src="location.image4" >
        </article>
    
      <v-card-text
        class="pt-4"
        style="position: relative;"        
      >
        <v-btn to="/cartoon2"
          absolute
          color="yellow darken-2"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>book</v-icon>
        </v-btn>
        <h3 id="maintitle-th">จ็อด 8 ริ้ว</h3>
        <div id="description-th">ล้อเลียนและสะท้อนสังคมไทย</div>
        
      </v-card-text>
    </v-card>
  </v-hover>
</v-app>
</template>

<script>
import { db } from '../main'
export default {
  name: 'Home',
  data () {
    return {
      locations: []
    }
  },
  firestore () {
    return {
      locations: db.collection('locations')
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
#pudding{
  padding-top: 6em;  
}
</style>
