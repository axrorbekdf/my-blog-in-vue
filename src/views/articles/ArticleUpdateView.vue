<template>
    <div>
        <div v-if="isLoading" class="w-100 d-flex justify-content-center" style="margin-top: 25vh;">
            <Loader />
        </div>
        <ArticleUpdateForm v-else :articleDetail="articleDetail"/>
    </div>
</template>
<script>

import {ArticleUpdateForm} from '@/components'
import { mapState } from 'vuex';
export default {
    components:{ArticleUpdateForm},
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