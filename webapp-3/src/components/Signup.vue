<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card id="maintitle">
              <v-toolbar color="#C62828">
                <v-toolbar-title id="white-lg">Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <form @submit.prevent="userSignUp">
                  <v-layout column>
                    <v-flex>
                      <v-alert type="error" dismissible v-model="alert">{{ error }}</v-alert>
                    </v-flex>
                    <v-flex>
                      <v-text-field
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
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        v-model="password"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        required
                        v-model="passwordConfirm"
                        :rules="[comparePasswords]"
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="text-xs-center" mt-5>
                    <v-btn round large
                      id="white-lg"
                      color="#C62828"
                      type="submit"
                      :disabled="loading"
                    >Sign Up</v-btn>
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
      passwordConfirm: '',
      alert: false
    }
  },
  computed: {
    comparePasswords () {
      return this.password === this.passwordConfirm
        ? true
        : "Passwords don't match"
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    userSignUp () {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('userSignUp', {
        email: this.email,
        password: this.password
      })
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