<template>
    <div class="form-floating mb-2">
        <input :type="type" class="form-control" id="floatingInput" @input="updateInput" :value="modelValue">
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: "Input",
    props: {
        label: String,
        type: String,
        modelValue: [String, Number],
    },
    methods:{
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style>
    
</style>