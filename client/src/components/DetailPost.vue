<template>
  <section class="content">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 col-xs-8 col-xs-offset-2">
          <div class="box box-warning">
              <div class="box-body">
                  <div class="form-group col-md-8 col-md-offset-2">
                      <label>Your Post Caption</label>
                      <input type="text" class="form-control" placeholder="Question Title ..." v-model="objToUpdate.caption">
                  </div>
                  <div class="form-group col-md-8 col-md-offset-2">
                      <button type="submit" class="btn btn-warning" @click="updatePost">Submit</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
      <hr>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  name: 'DetailPost',
  computed: {
    ...mapGetters({
      objToUpdate: 'getActivePost'
    })
  },
  methods: {
    updatePost: function () {
      this.$store.dispatch('updatePostById', this.objToUpdate)
    }
  },
  created: function () {
    this.$store.dispatch('getPostById', this.id)
  },
  watch: {
    id () {
      this.$store.dispatch('getPostById', this.id)
    }
  }
}
</script>

<style>

</style>
