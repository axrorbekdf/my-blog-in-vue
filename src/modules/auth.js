import AuthService from "@/service/auth";
import { setItem } from "@/helpers/persistaneStorage";
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null,
};

const getters = {
    [gettersTypes.currentUser]: (state) => {
        return state.user;
    },
    [gettersTypes.isLoggedIn]: (state) => {
        return Boolean(state.isLoggedIn);
    },
    [gettersTypes.isAnonymous]: (state) => {
        return state.isLoggedIn === false;
    }
};


const mutations = {
    loginStart(state){
        state.isLoading = true;
        state.user = null;
        state.errors = null;
        state.isLoggedIn = null;
    },
    loginSuccess(state, data){
        state.isLoading = false;
        state.user = data.user;
        state.isLoggedIn = true;
        
    },
    loginFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
        state.isLoggedIn = false;
    },

    registerStart(state){
        state.isLoading = true;
        state.user = null;
        state.errors = null;
        state.isLoggedIn = null;
    },
    registerSuccess(state, data){
        state.isLoading = false;
        state.user = data.user;
        state.isLoggedIn = true;
    },
    registerFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors;
        state.isLoggedIn = false;
    },
};

const actions = {

    login(context, user){
        return new Promise((resolve, reject) => {

            context.commit('loginStart');

            AuthService.login(user)
            .then(response => {
                setItem('token', response.data.user.token)
                context.commit('loginSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('loginFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    register(context, user){
        return new Promise((resolve, reject) => {

            context.commit('registerStart')

            AuthService.register(user)
            .then(response => {
                setItem('token', response.data.user.token);
                context.commit('registerSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('registerFailure', error.response.data)
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