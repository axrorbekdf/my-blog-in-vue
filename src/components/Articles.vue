<template>
    <div class="col ">
        <div class="card shadow-sm">
            <img  class="bd-placeholder-img card-img-top opacity-50" width="100%" height="225" src="https://as2.ftcdn.net/v2/jpg/01/03/95/35/1000_F_103953529_PCEL52QBWBkKnoXD2l9ZFNOEcdm5PARf.jpg" alt="">
            <div class="card-body">
                <p class="card-text">{{ article.title }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <Button :type="'button'" class="btn-sm btn-outline-info" @click="navigationHandler">Read article</Button>
                        
                        <Button
                            v-if="user.username == article.author.username" 
                            :type="'button'"
                            class="btn btn-sm btn-outline-primary"
                            @click="editHandler"
                        >
                            Edit
                        </Button>
                        <Button 
                            v-if="user.username == article.author.username"
                            :type="'button'" 
                            class="btn btn-sm btn-outline-danger" 
                            @click="deleteHandler" 
                            :disabled="isLoading"
                        >
                            Delete
                        </Button>

                        
                    </div>
                    <small class="text-body-secondary fw-bold">
                        {{ new Date(article.createdAt).toLocaleString('us', {year: 'numeric', month: '2-digit',day: '2-digit'}) }}
                    </small>
                </div>
            </div>
        </div>
    </div>

    
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Articles',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed:{
        ...mapState({
            user: (state) => state.auth.user,
            isLoading: (state) => state.articles.isLoading
        })
    },
    methods:{
        navigationHandler(){
            this.$router.push(`/article/${this.article.slug}`);
        },

        editHandler(){
            this.$router.push(`/edit-article/${this.article.slug}`);
        },
        deleteHandler(){
            this.$store.dispatch('delete', this.article.slug)
            .then(() => {
                this.$store.dispatch('articles')
            })
            
        }
    }
}
</script>
<style>
    
</style>