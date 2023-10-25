<template>
    <div class="col">
        <div class="card h-100">
            <img  src="https://www.shutterstock.com/image-vector/flat-black-newspaper-vector-icon-600w-1722435181.jpg" alt="...">
            <div class="card-body" >
                <h5 class="card-title fw-bold">{{ article.title }}</h5>
                <p class="card-text">{{ article.description }}</p>
            </div>
            <div class="card-footer">
                <div class="btn-group">
                    <Button class="btn-default" @click="navigationHandler">Read article</Button>
                </div>
                <!-- <small class="text-body-secondary">{{ article.createdAt }}</small> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Articles',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    methods:{
        navigationHandler(){
            this.$router.push(`/article/${this.article.slug}`);
        }
    }
}
</script>
<style>
    
</style>