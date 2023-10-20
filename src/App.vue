<template>
  <div>
      <div class="container">
        <Navbar v-if="!isLogin"/>

        <RouterView/>
      </div>
  </div>
</template>
<script>
import {Navbar} from '@/components'
import { RouterView } from 'vue-router';
import { mapGetters } from 'vuex';
import {gettersTypes} from '@/modules/types'

export default {
  components: {Navbar},
  data(){
    return {
      isLogin: false
    }
  },
  watch: {
    $route (){
      if(this.$route.name == 'login' || this.$route.name == 'register')
        this.isLogin = true;
      else
        this.isLogin = false;
    }
  },
  computed:{
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn
        }),
  },
  mounted(){
      this.$store.dispatch('getUser')
  }
}
</script>
<style lang="">
  
</style>