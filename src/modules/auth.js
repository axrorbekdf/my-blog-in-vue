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
    }
};

export default {
    state,
    mutations,
    actions,
}