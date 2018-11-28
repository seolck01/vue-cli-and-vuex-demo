import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:1,
        testMsg:"原始文本",
        childText:'子组件原始文本'
    },
    mutations:{
        changeTestMsg(state,str){
            state.testMsg=str;
        },
        changeChildText(state,str){
            state.childText=str;
        }
    }
})

export default store