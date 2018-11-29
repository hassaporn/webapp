<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card id="maintitle">
              <v-toolbar color="#C62828">
                <v-toolbar-title id="white-lg">Sign In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <form @submit.prevent="userSignIn">
                  <v-layout column>
                    <v-flex>
                      <v-alert type="error" dismissible v-model="alert">{{ error }}</v-alert>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        prepend-icon="person"
                        name="email"
                        label="Email"
                        id="email"
                        type="email"
                        v-model="email"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        v-model="password"
                        required
                      ></v-text-field>
                      <v-flex class="text-xs-center" mt-5>
                        <v-btn round large id="white-lg" color="#C62828" type="submit">Sign In</v-btn>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      alert: false
    }
  },
  methods: {
    userSignIn () {
      this.$store.dispatch('userSignIn', {
        email: this.email,
        password: this.password
      })
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.commit('setError', null)
      }
    }
  }
}
</script>