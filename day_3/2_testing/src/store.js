import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  'ADD_USER': function(store, user) {
    store.users.push(user);
  },
  'REMOVE_USER': function(store, id) {
    let i = store.users.findIndex(user => user.id === id);
    store.users.splice(i, 1);
  }
}

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations,
  actions: {
    
  }
})
