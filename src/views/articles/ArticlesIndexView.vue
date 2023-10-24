<template>
    <Filter 
        :updateTermHandler="updateTermHandler" 
    />
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-if="isLoading" class="w-100 d-flex justify-content-center" style="margin-top: 25vh;">
            <Loader />
        </div>
        <Articles v-else v-for="article in data" :key="article.id" :article="article"/>
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
    mounted(){
        this.$store.dispatch('articles')
    },
    methods:{
        // onSearchHandler(){
        //     const old_data = this.$store.state.articles.data;
        //     const data = JSON.parse(JSON.stringify(this.data)) ? JSON.parse(JSON.stringify(this.data)) : [];

        //     // console.log(data.length);
        //     // return false;
        //     if(data.length == 0){
        //         console.log("yoq");
        //         console.log(old_data); 
        //         return this.data;
        //     }

        //     return data.filter(c => c.title.toLowerCase().indexOf(this.term) > -1);
        // },

        updateTermHandler(term){
            this.term = term
            console.log(this.term);
        },
    },
    computed: {
        ...mapGetters({
            data: gettersTypes.getDataArticles,
        }),
        ...mapState({
            isLoading: (state) => state.articles.isLoading,
            error: (state) => state.articles.errors,
        })
    }
}
</script>
<style>
    
</style>