<template>
    <div>
        <div v-if="isLoading" class="w-100 d-flex justify-content-center" style="margin-top: 25vh;">
            <Loader />
        </div>
        <ArticleDetail v-else :articleDetail="articleDetail" />
    </div>
</template>
<script>
import { mapState } from 'vuex';
import  {ArticleDetail} from '@/components';
export default {
    components:{ArticleDetail},
    created(){
        this.$store.dispatch('details', this.$route.params.slug)
    },
    computed: {
        ...mapState({
            articleDetail: (state) => state.articles.articleDetail,
            isLoading: (state) => state.articles.isLoading,
            error: (state) => state.articles.errors,
        })
    }
}
</script>
<style>
    
</style>