<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">All articles</a>
            <form class="d-flex" role="search" @submit.prevent>
                <input class="form-control me-2" v-model="term" @input="changeTermHandler" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">
                    <i class="fa-solid fa-filter"></i>
                </button>
            </form>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Filter",
    props: {
        updateTermHandler:{
            type: Function,
            required: true
        }
    },
    data(){
        return {
            term: ''
        }
    },
    methods: {
        changeTermHandler(){
            this.updateTermHandler(this.term)
        }
    }
}
</script>
<style>
    
</style>