<template>
    <main class="d-flex justify-content-center text-center mt-84" style="margin-top: 20vh;">
        <form style="width: 300px;">
            
            <RouterLink :to="{name:'home'}">
                <Logo />
            </RouterLink>

            <h3 class="h3 mb-3 fw-normal mt-4">Ro'yxatdan o'tish</h3>

            <ValidationError v-if="validationErrors" :errors="validationErrors" />

            <Input v-model="username" :type="'text'" :label="'Ism'" />

            <Input v-model="email" :type="'email'" :label="'Email'" />

            <Input v-model="password" :type="'password'" :label="'Parol'" />
            
            <Button @click="submitHandler" class="btn-primary w-100 py-2 mt-2">Ro'yxatdan o'tish</Button>
            <p class="mt-5 mb-3 text-body-secondary">© <b>2017–2023</b></p>
        </form>
    </main>
</template>
<script>
import { logo } from '@/constants';
import ValidationError from '@/components/ValidationError.vue';
import { mapGetters } from 'vuex';
import {gettersTypes} from '@/modules/types'

export default {
    name: 'Register',
    components:{ ValidationError },
    data(){
        return{
            logo: logo,
            username: '',
            email: '',
            password: '',
        }
    },
    created(){
        if(this.isLoggedIn){
            return this.$router.push('/')
        }
    },
    computed:{
        // validationErrors(){
        //     return this.$store.state.auth.errors;
        // }
        ...mapGetters({
            isLoggedIn: gettersTypes.isLoggedIn,
            validationErrors: gettersTypes.validationError
        })
    },
    methods: {
        submitHandler(e){
            e.preventDefault();
            
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('register', data)
            .then(data => {
                this.$router.push({name: 'home'})
            })
            .catch(data => {
                console.log(data.errors)
            });
        }
    }


}
</script>
<style>
    
</style>