<template>
    <div>
        <div class="w-50 mx-auto">
            <form @submit.prevent>
                <Input v-model="title" type="text" label="Title"/>
                <Textaria v-model="description" label="Description" rows="80"/>
                <Textaria v-model="body" label="Body" rows="250" />
                <Button @click="formHandler" :disabled="isLoading" class="btn-primary w-100 py-2 mt-2">Save</Button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticleForm",
    props: {
        initialValue:{
            type: Object,
            required: true
        },
        onSubmitHandler: {
            type: Function,
            required: true
        }
    },
    computed:{
        ...mapState({
            isLoading: (state) => state.articles.isLoading
        })
    },
    data(){
        return {
            title: this.initialValue.title,
            description: this.initialValue.description,
            body: this.initialValue.body,
        }
    },
    methods:{
        formHandler(){
            const article = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }
            this.onSubmitHandler(article);
        }
    }
}
</script>
<style>
    
</style>