<template>
    <div class="col">
        <div class="card h-100 fs-6">
            <img  src="https://www.shutterstock.com/image-vector/flat-black-newspaper-vector-icon-600w-1722435181.jpg" class="rounded" alt="...">
            <div class="card-body" >
                <h5 class="card-title">{{ article.title }}</h5>

                <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleString('us') }}</small>
            </div>
            <div class="card-footer">
                <div class="btn-group">
                    <Button class="btn-default" @click="navigationHandler">Read article</Button>
                </div>
                
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