<template>
    <div class="form-floating mb-2" :style="style">
        <textarea class="form-control" :id="'input'+label" @input="updateInput" :value="modelValue" :placeholder="label" :style="style">
            <slot></slot>
        </textarea>
        <label :for="'input'+label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: "Textaria",
    props: {
        label: String,
        rows: Number,
        modelValue: [String, Number],
    },
    computed:{
        style(){
            return {
                height: `${this.rows}px`
            }
        }
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