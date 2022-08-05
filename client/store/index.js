//import Vuex from 'vuex'
//import axios from 'axios'

export const strict = false
export const state = () => ({
    authUser: false,
})
// common getters
export const getters = {
    getAuthUser(state) {
        return state.authUser
    },
}
//mutations for changing data from action
export const mutations = {
    loginUser(state, data) {
        state.authUser = data
    },
}
// actionns for commiting mutations
export const actions = {
    async nuxtServerInit({ commit }, { $axios }) {
        // console.log("im called");
        // const res = await $axios.get('http://localhost:3333/auth/getUser')
        // console.log(res);
    },
}
