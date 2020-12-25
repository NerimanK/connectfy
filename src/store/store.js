import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dialogAdd: false,
        sideBarText: "jimmy",
        sideBarLogo: "mdi-car",
        referenceList: ["Audi", "BMW", "Mercedes"],
        bookedServices: {
            cards: [
                {
                    feature: "Spotify",
                    makers: ["Audi", "BMW", "Mercedes"],
                    price: 9.99,
                },
                {
                    feature: "Kalender",
                    makers: ["Audi", "BMW", "Mercedes"],
                    price: 19.99,
                },
                {
                    feature: "Wetter",
                    makers: ["Audi"],
                    price: 4.99,
                },
                {
                    feature: "Autonomes Fahren",
                    makers: ["Audi", "BMW"],
                    price: 109.99,
                },
                {
                    feature: "TV",
                    makers: [],
                    price: 29.99,
                },
                {
                    feature: "Sternenhimmel",
                    makers: ["BMW"],
                    price: 19.99,
                },
                {
                    feature: "Massage",
                    makers: ["Audi"],
                    price: 4.99,
                },
                {
                    feature: "Spiele",
                    makers: [],
                    price: 4.99,
                },
            ],
        }
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
        },
        updateList(state, value)
        {
            state.bookedServices = value
        }
    },
    getters: {
        flavor: state => state.dialogAdd,
        sideBarText: state => state.sideBarText,
        sideBarLogo: state => state.sideBarLogo,
        bookedServices: state => state.bookedServices,
        getCurrentPrice: (state)  => {
            var price = 0
            var discount = 0
            state.bookedServices.cards.forEach(element => {
                console.log(element.makers.length)
                discount = element.makers.length * 0.1 -0.1
                console.log(element.makers.length)
                if(discount == 0) discount = 1
                var priceTag = element.price - discount * element.price
                price += element.makers.length * priceTag
            })
            return price.toFixed(2)
          }
    }
})



export default store
