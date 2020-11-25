import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dialogAdd: false,
        sideBarText: "jimmy",
        sideBarLogo: "mdi-car"
    },
    mutations: {
        change(state, dialogState) {
            state.dialogAdd = dialogState
        },
        setSideBarText(state, sideBarText) {
            state.sideBarText = sideBarText
        },
        setSideBarLogo(state, sideBarLogo) {
            console.log(state.sideBarLogo)
            state.sideBarLogo = sideBarLogo
        }
    },
    getters: {
        flavor: state => state.dialogAdd,
        sideBarText: state => state.sideBarText,
        sideBarLogo: state => state.sideBarLogo
    }
})



export default store
