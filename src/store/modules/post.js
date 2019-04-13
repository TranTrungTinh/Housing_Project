
const initialState = () => {
  return {
    address: {
      city: {
        code: '',
        data: ''
      },
      district: {
          code: '',
          data: ''
      },
      town: {
          code: '',
          data: ''
      },
      lane: '',
      home: ''
    }
  }
}

// initial state
const state = initialState()

// getters
const getters = {
  postState: state => {
    return state
  },
  postAddress: state => {
    return state.address
  }
}

// actions
const actions = {
  
  setPostAddress({ commit }, address) {
      commit('updateAddress', address);
  }

}

// mutations
const mutations = {
  set (state, payload) {
    Object.assign(state, payload)
  },
  reset (state) {
    Object.assign(state, initialState())
  },
  
  updateAddress(state, address) {
    Object.assign(state, { address })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
