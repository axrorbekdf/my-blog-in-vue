<template>
    <div class="form-floating mb-2">
        <input :type="type" class="form-control" :id="'input'+label" @input="updateInput" :value="modelValue" :placeholder="label">
        <label :for="'input'+label">{{ label }}</label>
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