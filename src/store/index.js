import { createStore } from 'vuex'

export default createStore({
  state: {
    page_width: '794',
    page_height: '1123',
  },
  mutations: {
    Reset_Page_Size(state, {width, height}) {
      state.page_width = width;
      state.page_height = height;
    }
  },
  actions: {
  },
  modules: {
  }
})
