import { authApi } from '@/api';
import Cookies from 'js-cookie';

const initialState = () => {
  return {
    userId: null,
    user: {},
    error: ''
  }
}

// initial state
const state = initialState()

// getters
const getters = {
  authState: state => {
    return state
  },
  userId: state => {
    return state.userId
  },
  currentUser: (_state, getters) => {
    return getters.authState.user
  },
  currentError: (_state, getters) => {
      return getters.authState.error
  }
}

// actions
const actions = {
  firstLoading({ commit }) {
    const token = Cookies.get('auth');
    if(!token) return;

    authApi.fetchUser(token)
    .then(response => {
      console.log(response);
      commit('loginSuccess', { user: response.data.user });
      Cookies.set('auth', response.data.token, { expires: 1 });
    })
    .catch(error => console.log(error))
  },
  logout ({ commit }, payload = {}) {
    // dont need commit, it will commit automactic at app level
    // return authApi.logout()
  },
  async login ({ commit }, payload) {
    const { email, password } = payload;
    authApi.login(email, password)
    .then(response => {
      console.log(response);
      commit('loginSuccess', { user: response.data.user });
      Cookies.set('auth', response.data.token, { expires: 1 });
    })
    .catch(error => commit('loginFail', `Sai email hoặc password`))
  },
  clearError({ commit }) {
      commit('resetError');
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
  resetError(state) {
    Object.assign(state, { error: '' })
  },
  loginSuccess(state, payload) {
    Object.assign(state, { user: payload.user })
  },
  loginFail(state, error) {
    Object.assign(state, { error })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
