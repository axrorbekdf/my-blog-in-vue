<template>
    <main class="d-flex justify-content-center text-center mt-84" style="margin-top: 20vh;">
        <form style="width: 300px;">
            
            <RouterLink :to="{name:'home'}">
                <Logo />
            </RouterLink>

            <h3 class="h3 mb-3 fw-normal mt-4">Ro'yxatdan o'tish</h3>

            <span v-for="error in errors">{{ error }}</span>

            <Input v-model="username" :type="'text'" :label="'Ism'" />

            <Input v-model="email" :type="'email'" :label="'Email'" />

            <Input v-model="password" :type="'password'" :label="'Parol'" />
            
            <Button @click="submitHandler">Ro'yxatdan o'tish</Button>
            <p class="mt-5 mb-3 text-body-secondary">© <b>2017–2023</b></p>
        </form>
    </main>
</template>
<script>
import { logo } from '@/constants';
export default {
    name: 'register',
    data(){
        return{
            logo: logo,
            errors: null,
            username: '',
            email: '',
            password: '',
        }
    },
    computed:{
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
                console.log(data.user)
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