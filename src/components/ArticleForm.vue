<template>
    <div>
        <p class="text-center display-3">Create article</p>
        <div class="w-50 mx-auto">
            <form @submit.prevent>
                <Input v-model="title" type="text" label="Title"/>
                <Textaria v-model="description" label="Description" rows="80"/>
                <Textaria v-model="body" label="Body" rows="250" />
                <Button @click="createArticleHandler" class="btn-primary w-100 py-2 mt-2">Save</Button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticleForm",
    data(){
        return {
            title: '',
            description: '',
            body: '',
        }
    },
    methods:{
        createArticleHandler(){
            const article = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }

            
        }
    }
}
</script>
<style>
    
</style>