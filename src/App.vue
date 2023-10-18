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
  }
}
</script>
<style lang="">
  
</style>