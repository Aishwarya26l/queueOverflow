<template>
  <section class="section">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Sign-in</div>
          <div class="md-subhead">Please sign-in to your account</div>
        </md-card-header>

        <md-card-content>
          <form v-on:submit.prevent>
            <md-field md-clearable>
              <label>jon.doe@email.com</label>
              <md-input v-model="email"></md-input>
            </md-field>
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
            <md-button
              type="submit"
              class="button is-primary"
              v-on:click="signIn"
            >
              Sign-in
            </md-button>
          </form>
        </md-card-content>
      </md-ripple>
    </md-card>
  </section>
</template>

<script>
import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("dashboard");
          },
          error => {
            alert(error.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.md-card {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
