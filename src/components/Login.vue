<template>
    <main class="d-flex justify-content-center" style="margin-top: 20vh;">
        <form style="width: 300px;">

            <RouterLink :to="{name:'home'}">
                <Logo />
            </RouterLink>
            <h3 class="h3 mb-3 fw-normal mt-4">Tizimga kirish</h3>

            <ValidationError v-if="validationErrors" :errors="validationErrors" />

            <Input v-model="email" :type="'email'" :label="'Email'" />

            <Input v-model="password" :type="'password'" :label="'Parol'" />
            
            <Button @click="loginHandler">Ro'yxatdan o'tish</Button>
            <p class="mt-5 mb-3 text-body-secondary">© <b>2017–2023</b></p>
        </form>
    </main>
</template>
<script>
import ValidationError from '@/components/ValidationError.vue';
export default {
    name: 'Login',
    components:{ ValidationError },
    data() {
        return {
            email: null,
            password: null,
        };
    },
    computed:{
        validationErrors(){
            return this.$store.state.auth.errors;
        }
    },
    methods: {
        loginHandler(e){
            e.preventDefault();

            const user = {
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('login', user)
            .then(data => {
                this.$router.push({name:'home'})
            })
            .catch(data => {
                console.log(data.errors);
            })
        }
    }

}
</script>
<style>
    
</style>