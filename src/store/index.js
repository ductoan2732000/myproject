import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const storeData = {
  state: {
    todos: ["toa", "huwng" , "ahfakf", "afdfa"],
  }
};
const store = new Vuex.Store(storeData);
export default store;
