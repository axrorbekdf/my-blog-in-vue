<template>
    <div>
        <div class="w-50 mx-auto">
            <form @submit.prevent>
                <Input v-model="title" type="text" label="Title"/>
                <Textaria v-model="description" label="Description" rows="80"/>
                <Textaria v-model="body" label="Body" rows="250" />
                <Button @click="articleFormHandler" class="btn-primary w-100 py-2 mt-2">Save</Button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticleForm",
    props: {
        title:{
            type: String,
        },
        description:{
            type: String,
        },
        body:{
            type: String,
        },
        slug:{
            type: String,
        },
        articleHandler: {
            type: Function,
            required: true
        }
    },
    data(){
        return {
            title: this.title,
            description: this.description,
            body: this.body,
            slug: this.slug || ''
        }
    },
    methods:{
        articleFormHandler(){
            const article = {
                slug: this.slug,
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }
            this.articleHandler(article);
        }
    }
}
</script>
<style>
    
</style>