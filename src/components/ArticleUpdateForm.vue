<template>
    <div>
        <p class="text-center display-3">Edit article</p>
        
        <ArticleForm :onSubmitHandler="updateArticleHandler" :initialValue="initialValue" />
    </div>
</template>
<script>
import ArticleForm from './ArticleForm.vue'

export default {
    name: "ArticleUpdateForm",
    components: {ArticleForm},
    props: {
        articleDetail:{
            type: Object,
            required: true
        }
    },
    computed: {
        initialValue(){
            return {
                title: this.articleDetail.title,
                description: this.articleDetail.description,
                body: this.articleDetail.body,
            }
        }
    },
    methods:{
        updateArticleHandler(article){
            
            this.$store.dispatch('update', {article: article, slug: this.articleDetail.slug})
            .then((response) => {
                if(response)
                    this.$router.push('/articles')
            });
            
        }
    }
}
</script>
<style>
    
</style>