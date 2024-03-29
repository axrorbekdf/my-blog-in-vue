import ArticleService from '@/service/articles'
import { gettersTypes } from "./types";

const state = {
    data: null,
    isLoading: false,
    errors: null,
    articleDetail: null,
};

const getters = {
    [gettersTypes.errorArticles]: (state) => {
        return state.errors;
    },
    [gettersTypes.getDataArticles]: (state) => {
        return state.data;
    }
};

const mutations = {
    getArticlesStart(state){
        state.isLoading = true;
        state.data = null;
        state.articleDetail = null;
        state.errors = null;
    },
    getArticlesSuccess(state, data){
        state.isLoading = false;
        state.data = data.articles;
    },
    getArticlesFailure(state, data){
        state.isLoading = false;
        state.errors = data.error;
    },

    getArticlesDetailStart(state){
        state.isLoading = true;
        state.articleDetail = null;
        state.data = null;
        state.errors = null;
    },
    getArticlesDetailSuccess(state, data){
        state.isLoading = false;
        state.articleDetail = data.article;
    },
    getArticlesDetailFailure(state, data){
        state.isLoading = false;
        state.errors = data.error;
    },

    articlesCrudStart(state){
        state.isLoading = true;
    },
    articlesCrudSuccess(state){
        state.isLoading = false;
    },
    articlesCrudFailure(state){
        state.isLoading = false;
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
    },

    details(context, slug){
        return new Promise((resolve, reject) => {
            context.commit('getArticlesDetailStart');

            ArticleService.details(slug)
            .then((response) => {
                context.commit('getArticlesDetailSuccess', response.data);
                resolve(response.data.article);
            })
            .catch((error) => {
                context.commit('getArticlesDetailFailure');
                reject(error.response.data);
            })
        });
    },

    create(context, article){
        return new Promise((resolve) => {
            context.commit('articlesCrudStart');
            ArticleService.create(article)
            .then((response) => {
                context.commit('articlesCrudSuccess');
                resolve(response.data)
            })
            .catch(() => {
                context.commit('articlesCrudFailure');
            })
        });
    },

    update(context, data){
        return new Promise((resolve) => {
            context.commit('articlesCrudStart');
            ArticleService.update(data)
            .then((response) => {
                context.commit('articlesCrudSuccess');
                resolve(response)
            })
            .catch(() => {
                context.commit('articlesCrudFailure');
            })
        });
    },

    delete(context, slug){
        return new Promise((resolve) => {
            context.commit('articlesCrudStart');
            ArticleService.delete(slug)
            .then(() => {
                context.commit('articlesCrudSuccess');
                resolve()
            })
            .catch(() => {
                context.commit('articlesCrudFailure');
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