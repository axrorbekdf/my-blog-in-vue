<template>
    <nav class="navbar bg-light mb-2">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold fs-2">All articles</a>
            <form class="d-flex" role="search" @submit.prevent>
                <input class="form-control me-2" v-model="term" @input="changeTermHandler" type="search" placeholder="Search" aria-label="Search">
                <Button class="btn-outline-success" type="submit">
                    <i class="fa-solid fa-filter"></i>
                </Button>
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