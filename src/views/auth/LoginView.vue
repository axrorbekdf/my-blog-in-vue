<template>
    <main class="d-flex justify-content-center text-center" style="margin-top: 20vh;">
        <form style="width: 300px;">

            <RouterLink :to="{name:'home'}">
                <img :src="logo" alt="logo" style="width: 150px;">
            </RouterLink>
            <h3 class="h3 mb-3 fw-normal mt-4">Tizimga kirish</h3>

            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mb-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Parol">
                <label for="floatingPassword">Parol</label>
            </div>

            
            <button class="btn btn-primary w-100 py-2 mt-2" type="submit">Kirish</button>
            <p class="mt-5 mb-3 text-body-secondary">© <b>2017–2023</b></p>
        </form>
    </main>
</template>
<script>
import { logo } from '@/constants';
export default {
    name: 'login',
    data(){
        return {
            logo: logo,
            email: null,
            password: null,
        }
    }
}
</script>
<style>
    
</style>