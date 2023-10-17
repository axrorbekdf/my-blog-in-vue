<template>
  <div>
      <div class="container">
        <Navbar/>
        
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
      isLogin: false,
      isRegister: false
    }
  },
  computed: {
    isLoginCheck(){
      if(this.$route.name == 'login')
        this.isLogin = true;
      else
        this.isLogin = false;
    },
    isRegisterCheck(){
      if(this.$route.name == 'register')
        this.isRegister = true;
      else
        this.isRegister = false;
      
    }
  }
}
</script>
<style lang="">
  
</style>