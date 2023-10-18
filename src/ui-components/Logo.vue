<template>
    <img :src="logo" alt="logo" style="width: 150px;">
</template>
<script>
import { logo } from '@/constants';
export default {
    name: "Logo",
    data(){
        return {
            logo: logo
        }
    }
}
</script>
<style>
    
</style>