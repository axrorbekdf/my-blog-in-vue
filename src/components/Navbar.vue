<template>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    
        <RouterLink :to="{name:'home'}">
            <img @click="toHomeHandler" :src="logo" alt="logo" class="w-25 mt-2">
        </RouterLink>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
            <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
        </nav>
    </div>
</template>
<script>
import { logo } from '../constants';

export default {
    name: "Navbar",
    data(){
        return {
            logo: logo,
        }
    },
    methods:{
        toHomeHandler(){
            return this.$router.push('/')
        }
    }
}
</script>
<style>
    
</style>