<template>
    <section class="content">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="box box-warning">
                    <div class="box-body">
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Username</label>
                            <input id="login-username" type="text" class="form-control" placeholder="Username or Email" v-model="objUser.username_email">
                        </div>
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Password</label>
                            <input id="login-password" type="password" class="form-control" placeholder="Password" v-model="objUser.password">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-8 col-md-offset-2">
                                <button type="submit" class="btn btn-success col-md-6 col-md-offset-3" @click="signIn">Login</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-4 col-md-offset-4">
                                <p>Dont have account ?</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-8 col-md-offset-2">
                                <button type="submit" class="btn btn-warning btn-success col-md-6 col-md-offset-3" @click="signUp">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'SignIn',
  data: function () {
    return {
      objUser: {
        username_email: ``,
        password: ``
      }
    }
  },
  methods: {
    signIn: function () {
      this.$store.dispatch('signIn', this.objUser)
        .then(() => {
          this.$router.push({path: '/dashboard'})
        })
    },
    signUp: function () {
      this.$router.push({path: '/signup'})
    }
  }
}
</script>

<style>

</style>
