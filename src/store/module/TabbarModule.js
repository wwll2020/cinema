const module = {
  namespaced: true, // 命名空间
  state: {
    isTabbarShow: true,
    a: 1,
    b: 2
  },
  mutations: {
    hide (state) {
      state.isTabbarShow = false
    },
    show (state) {
      state.isTabbarShow = true
    }
  },
  action: {}
}
export default module
