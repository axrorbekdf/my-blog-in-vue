<template>
    <div>
        {{ articleDetail.title }}
    </div>
</template>
<script>
export default {
    props: {
        articleDetail:{
            type: Object,
            required: true
        }
    }    
}
</script>
<style>
    
</style>