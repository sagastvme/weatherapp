//index.js
import  {createStore} from "vuex";

const store = createStore({

    state() {
        return {
           background:'bg-gradient-to-r from-black to-gray-300'
        }
    },
    getters:{
        getBackground(state){
            return state.background;
        }
    },
    mutations:{
        changeBackground(state, newValue){
            state.background=newValue
        }
    }
});


export default store