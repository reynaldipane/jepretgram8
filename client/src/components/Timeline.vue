<template>
  <section class="content">
    <div class="row">
      <div>
        <router-view></router-view>
      </div>
      <div class="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2" v-for="(post, i) in arrAllPost" :key="i">
        <div class="panel panel-default">
          <div class="panel-heading">
              <h4>{{post.user_id.username}}</h4>
              <p> {{post.caption}} </p>
          </div>
          <div class="panel-body">
            <img class="img-responsive text-center" :src="post.image" width="400px" style="margin: 0 auto;">
          </div>
          <div class="panel-footer">
            <button class="btn btn-warning" v-if="activeUser.userId !== post.user_id._id" @click="likePost(activeUser.userId, post._id)">
              Like
            </button>
            <br>
            <p> {{ post.totalUpvote }} users like this post</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: `Timeline`,
  computed: {
    ...mapGetters({
      arrAllPost: 'getArrAllPost',
      activeUser: 'getActiveUser'
    })
  },
  methods: {
    likePost: function (userId, postId) {
      // alert(`Anda adalah ${userId} yang akan like ${postId}`)
      let objLike = {}
      objLike.userId = userId
      objLike.postId = postId
      this.$store.dispatch('likePost', objLike)
    }
  },
  created: function () {
    this.$store.dispatch('getAllPost')
  },
  updated: function () {
    this.$store.dispatch('getAllPost')
  }
}
</script>

<style>

</style>
