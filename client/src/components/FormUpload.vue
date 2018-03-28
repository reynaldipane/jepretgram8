<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <div class="box-body">
                        <h1 class="col-md-8 col-md-offset-2">Add new post</h1>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Upload Image</label>
                            <input @change="fileSelectHandler" type="file" class="form-control">
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Post Caption</label>
                            <input type="text" class="form-control" placeholder="Question Title ..." v-model="objNewPost.caption">
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <button type="submit" class="btn btn-warning" @click="upload">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

    </section>
</template>

<script>
export default {
  name: 'FormUpload',
  data: function () {
    return {
      objNewPost: {
        caption: ``,
        formData: new FormData(),
        file: null
      }
    }
  },
  methods: {
    fileSelectHandler: function (event) {
      this.objNewPost.file = event.target.files || event.dataTransfer.files
    },
    upload: function () {
      this.$store.dispatch('upload', this.objNewPost)
        .then(() => {
          alert('New Post Created !')
        })
        .catch((err) => {
          alert(`An error occured ! ${err}`)
        })
    }
  }
}
</script>

<style>

</style>
