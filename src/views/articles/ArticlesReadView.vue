<template>
    <div>
        {{articleDetail.title}}
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    
    computed: {
        ...mapState({
            articleDetail: (state) => state.articles.articleDetail,
            isLoading: (state) => state.articles.isLoading,
            error: (state) => state.articles.errors,
        })
    },
    mounted(){
        this.$store.dispatch('details', this.$route.params.slug)
    }
}
</script>
<style>
    
</style>