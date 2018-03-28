<template>
  <section class="content" style="margin-top:40px">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
          <div class="form-group col-md-4 col-md-offset-4">
              <label>Username</label>
              <input id="login-username" type="text" class="form-control" placeholder="Your Username" v-model="objSignUpUser.username">
          </div>
          <div class="form-group col-md-4 col-md-offset-4">
              <label>Password</label>
              <input id="login-password" type="password" class="form-control" v-model="objSignUpUser.password">
          </div>

          <div class="form-group col-md-4 col-md-offset-4">
              <label>Name</label>
              <input id="login-username" type="text" class="form-control" placeholder="Your Name" v-model="objSignUpUser.name">
          </div>

          <div class="form-group col-md-4 col-md-offset-4">
              <label>Email</label>
              <input id="login-username" type="email" class="form-control" placeholder="Your real email" v-model="objSignUpUser.email">
          </div>

          <div class="form-group col-md-4 col-md-offset-4">
              <label>Gender</label>
              <select class="form-control" v-model="objSignUpUser.gender">
                  <option disabled value="">Please select one</option>
                  <option>Male</option>
                  <option>Female</option>
              </select>
          </div>

          <div class="form-group col-md-4 col-md-offset-4">
              <button type="submit" class="btn btn-success" v-on:click="signUpUser">Sign Up</button>
              <button type="submit" class="btn btn-danger" v-on:click="back">Back</button>
          </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'SignUp',
  data: function () {
    return {
      objSignUpUser: {
        username: ``,
        password: ``,
        name: ``,
        email: ``,
        gender: ``
      }
    }
  },
  methods: {
    signUpUser: function () {
      this.$store.dispatch('signUp', this.objSignUpUser)
        .then(() => {
          this.$router.push({path: '/dashboard'})
        })
    },
    back: function () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>
