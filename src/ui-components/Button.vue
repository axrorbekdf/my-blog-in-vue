<template>
    <button class="btn" :type="type">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: 'submit'
        }
    }
}
</script>
<style>
    
</style>