<template>
  <v-app id="mainapp">
    <v-navigation-drawer v-model="sidebar" app>
      <v-list subheader three-line>
        <v-btn icon @click.stop="sidebar = !sidebar">
          <v-icon x-large color="#424242">chevron_left</v-icon>
        </v-btn>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon large color="#FBC02D">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content id="maintitle">{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="userSignOut" v-if="isAuthenticated">
          <v-list-tile-action>
            <v-icon large color="#FBC02D">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content id="maintitle">Sign Out</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
    <v-toolbar absolute color="#FBC02D">
      <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 id="maintitle">{{ appTitle }}</h1>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon large left dark>{{ item.icon }}</v-icon>
          <h1 id="maintitle">{{ item.title }}</h1>
        </v-btn>
        <v-btn flat @click="userSignOut" v-if="isAuthenticated">
          <v-icon large left>exit_to_app</v-icon>
          <h1 id="maintitle">Sign Out</h1>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false
    }
  },
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    menuItems () {
      if (this.isAuthenticated) {
        return [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Contact Us', path: '/contact', icon: 'people' }
        ]
      } else {
        return [
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
        ]
      }
    }
  },
  methods: {
    userSignOut () {
      this.$store.dispatch('userSignOut')
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Chewy|Itim");
#mainapp {
  font-family: "Itim", cursive;
  font-size: 1em;
}
#maintitle {
  font-family: Chewy;
  font-size: 2em;
  align-content: center;
  color: #c62828;
}
#maintitle2 {
  font-family: Chewy;
  font-size: 5em;
  align-content: center;
  color: #c62828;
}
#maintitle-th {
  font-family: Itim;
  font-size: 4em;
  align-content: center;
  color: #c62828;
}
#description-th {
  font-family: Itim;
  font-size: 1.5em;
  align-content: center;
  color: #424242;
}
#white-lg {
  color: #e3f2fd;
  font-size: 1em;
}
#white-md {
  color: #e3f2fd;
  font-size: 0.5em;
}
#credits {
  font-family: Chewy;
  color: #e3f2fd;
  font-size: 3em;
}
</style>
