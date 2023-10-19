<template>
    <ul class="list-group">
        <li v-for="errorMessage in errorMessages" :key="errorMessage" class="list-group-item">{{ errorMessage }}</li>
    </ul>
</template>
<script>
export default {
    name: "ValidationError",
    props: {
        errors: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages(){
            return Object.keys(this.errors).map(name => {
                const msg = this.errors[name].toString();

                return `${name} ${msg}`;
            })
        }
    }
}
</script>
<style scoped>
    ul{
        text-align: left;
    }

    li{
        border: none;
        color: red;
    }
</style>