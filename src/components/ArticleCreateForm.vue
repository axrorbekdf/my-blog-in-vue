<template>
    <div>
        <p class="text-center display-3">Create article</p>
    
        <ArticleForm :onSubmitHandler="createArticleHandler" :initialValue="initialValue" />

    </div>
</template>
<script>
import ArticleForm from './ArticleForm.vue'
import { mapState } from 'vuex';
export default {
    name: "ArticleCreateForm",
    components: {ArticleForm},
   
    computed:{
        ...mapState({
            isLoading: (state) => state.articles.isLoading
        }),
        initialValue(){
            return {
                title: '',
                description: '',
                body: '',
            }
        }
    },
    methods:{
        createArticleHandler(article){
            
            this.$store.dispatch('create', article)
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