import AuthService from "@/service/auth";

const state = {
    isLoading: false,
    user: null,
    errors: null,
};

const mutations = {
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

    register(context, user){
        return new Promise((resolve, reject) => {

            context.commit('registerStart')

            AuthService.register(user)
            .then(response => {
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