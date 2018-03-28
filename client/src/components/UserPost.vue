<template>
  <section class="content">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 col-xs-8 col-xs-offset-2" v-for="(post, i) in arrUserPosts" :key="i">
        <div class="panel panel-default">
          <div class="panel-heading">
              {{post.caption}}
          </div>
          <div class="panel-body">
            <img class="img-responsive" :src="post.image" width="400px" style="margin: 0 auto;">
          </div>
          <div class="panel-footer">
            <router-link :to="{name: 'userdetailpost', params: {id: post._id}}">
              <button class="btn btn-warning" data-target="#myModal" data-toggle="modal">Update</button>
            </router-link>
            <button class="btn btn-danger" @click="deletePost(post._id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Update Your Caption</h4>
          </div>
          <div class="modal-body">
            <router-view></router-view>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserPost',
  data: function () {
    return {}
  },
  methods: {
    deletePost: function (id) {
      this.$store.dispatch('deletePostById', id)
    }
  },
  computed: {
    ...mapGetters({
      arrUserPosts: 'getArrUserPost'
    })
  },
  created: function () {
    this.$store.dispatch('getUserPost')
  },
  updated: function () {
    this.$store.dispatch('getUserPost')
  }
}
</script>

<style>

</style>
