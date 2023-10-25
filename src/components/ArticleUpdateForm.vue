<template>
    <div>
        <p class="text-center display-3">Create article</p>
        <div class="w-50 mx-auto">
            <form @submit.prevent>
                <Input v-model="title" type="text" label="Title"/>
                <Textaria v-model="description" label="Description" rows="80"/>
                <Textaria v-model="body" label="Body" rows="250" />
                <Button @click="updateArticleHandler" class="btn-primary w-100 py-2 mt-2">Update</Button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticleUpdateForm",
    props: {
        articleDetail:{
            type: Object,
            required: true
        }
    },
    created(){
        this.articleDetail.title = this.title;
        this.articleDetail.description = this.description;
        this.articleDetail.body = this.body;
    },
    data(){
        return {
            title: '',
            description: '',
            body: '',
        }
    },
    methods:{
        updateArticleHandler(){
            const article = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }
            
            this.$store.dispatch('update', article);
            
        }
    }
}
</script>
<style>
    
</style>