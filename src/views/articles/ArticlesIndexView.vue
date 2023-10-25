<template>
    <Filter 
        :updateTermHandler="updateTermHandler" 
    />
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-if="isLoading" class="w-100 d-flex justify-content-center" style="margin-top: 25vh;">
            <Loader />
        </div>
        <Articles v-else v-for="article in onSearchHandler(data, term)" :key="article.id" :article="article"/>
    </div>
</template>
<script>
import {Articles} from '@/components';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import Filter from '@/components/Filter.vue';
import {gettersTypes} from '@/modules/types'

export default {
    components: {Articles, Filter},
    data(){
        return {
            term: '',
        }
    },
    created(){
        this.$store.dispatch('articles')
    },
    methods:{
        onSearchHandler(data, term){
            
            if(data.length == 0){
                return this.data;
            }

            return data.filter(c => c.title.toLowerCase().indexOf(this.term) > -1);
        },

        updateTermHandler(term){
            this.term = term
        },
    },
    computed: {
        // ...mapGetters({
        //     data: gettersTypes.getDataArticles,
        // }),
        ...mapState({
            data: (state) => state.articles.data,
            isLoading: (state) => state.articles.isLoading,
            error: (state) => state.articles.errors,
        })
    }
}
</script>
<style>
    
</style>