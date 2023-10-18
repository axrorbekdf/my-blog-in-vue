import AuthService from "@/service/auth";

const state = {
    isLoading: false
};

const mutations = {
    setLoading(state){
        state.isLoading = true;
    }
};

const actions = {
    setLoading({commit}){
        commit('setLoading');
    },


    register(context, user){
        AuthService.register(user);
    }
};

export default {
    state,
    mutations,
    actions,
}