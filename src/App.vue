<template>
  <div>
      <div class="container">
        <Navbar v-if="!isLoginPage"/>

        <RouterView/>
      </div>
  </div>
</template>
<script>
import {Navbar} from '@/components'
import { RouterView } from 'vue-router';

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
        this.isLoginPage = true;
      else
        this.isLoginPage = false;
    }
  },
  mounted(){
      this.$store.dispatch('getUser')
  }
}
</script>
<style lang="">
  
</style>