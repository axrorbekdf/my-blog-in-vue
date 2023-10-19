import AuthService from "@/service/auth";
import { setItem } from "@/helpers/persistaneStorage";

const state = {
    isLoading: false,
    user: null,
    errors: null,
};

const mutations = {
    loginStart(state){
        state.isLoading = true;
        state.user = null;
        state.errors = null;
    },
    loginSuccess(state, data){
        state.isLoading = false;
        state.user = data.user;
    },
    loginFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    registerStart(state){
        state.isLoading = true;
    },
    registerSuccess(state, data){
        state.isLoading = false;
        state.user = data.user;
    },
    registerFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
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
    mutations,
    actions,
}