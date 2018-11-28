import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFire from 'vuefire'


Vue.use(VueFire)
Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyAdkR7O2rGBK7vuJnwguY2Kk_bAWwoM3h4',
  authDomain: 'webapp-27fae.firebaseapp.com',
  databaseURL: 'https://webapp-27fae.firebaseio.com',
  projectId: 'webapp-27fae'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
export const db = firebase.firestore()