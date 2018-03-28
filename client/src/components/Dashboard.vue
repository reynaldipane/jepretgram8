<template>
  <div>
    <app-header></app-header>
    <div class="content-wrapper" style="margin-top:100px">
        <h3>Hallo, {{objUserActive.name}}</h3>
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
  props: ['path'],
  name: 'Dashboard',
  data: function () {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapGetters({
      objUserActive: 'getActiveUser'
    })
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
