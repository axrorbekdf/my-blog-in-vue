<template>
    <main class="d-flex justify-content-center text-center mt-84" style="margin-top: 20vh;">
        <form style="width: 300px;">
            
            <RouterLink :to="{name:'home'}">
                <Logo />
            </RouterLink>

            <h3 class="h3 mb-3 fw-normal mt-4">Ro'yxatdan o'tish</h3>

            <Input :type="'text'" :label="'Ism'"/>

            <Input :type="'email'" :label="'Email'"/>

            <Input :type="'password'" :label="'Parol'"/>
            
            <Button>Ro'yxatdan o'tish</Button>
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
            logo: logo
        }
    }
}
</script>
<style>
    
</style>