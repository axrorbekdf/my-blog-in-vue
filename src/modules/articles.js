import ArticleService from '@/service/articles'
import { gettersTypes } from "./types";

const state = {
    data: null,
    isLoading: false,
    errors: null,
};

const getters = {
    [gettersTypes.errorArticles]: (state) => {
        return state.errors;
    }
};

const mutations = {
    getArticlesStart(state){
        state.isLoading = true;
        state.data = null;
        state.erros = null;
    },
    getArticlesSuccess(state, data){
        state.isLoading = false;
        state.data = data;
    },
    getArticlesFailure(state, data){
        state.isLoading = false;
        state.erros = data;
    },
};

const actions = {
    articles(context){
        return new Promise((resolve, reject) => {

            context.commit('getArticlesStart');

            ArticleService.articles()
            .then((response) => {
                context.commit('getArticlesSuccess', response.data)
                resolve(response.data)
            })
            .catch((error) => {
                context.commit('getArticlesFailure', error.response.data)
                reject(error.response.data)
            })
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}