import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: ['学习vue', '学习爬虫'] as string[],
    dones: ['学习html', '学习css'] as string[],
    deletes: ['学习网络安全'] as string[]
  },
  mutations: {
    add (state, value) {
      state.todos.push(value)
    },
    delete (state, index) {
      const item = state.todos[index]
      state.todos.splice(index, 1)
      state.deletes.push(item)
    },
    check (state, index) {
      const item = state.todos[index]
      state.todos.splice(index, 1)
      state.dones.push(item)
    }
  },

  actions: {},
  modules: {}
})
