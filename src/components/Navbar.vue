<template>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    
        <RouterLink :to="{name:'home'}">
            <img @click="toHomeHandler" :src="logo" alt="logo" class="mt-2"  style="width: 150px;">
        </RouterLink>
        
        <nav class="d-inline-flex mt-4 mt-md-0 ms-md-auto">
            <template v-if="isLoggedIn">
                <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none">{{ user.username }}</RouterLink>
            </template>
            <template v-else>
                <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
                <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
            </template>
        </nav>
    </div>
</template>
<script>
import { logo } from '../constants';
import { mapState } from 'vuex';

export default {
    name: "Navbar",
    data(){
        return {
            logo: logo,
        }
    },
    computed:{
        ...mapState({
            user: state => state.auth.user,
            isLoggedIn: state => state.auth.isLoggedIn,
        }),
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