const state = {
  tasks: [],
};

const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  REMOVE_TASK(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
};

const actions = {
  addTask({ commit }, task) {
    // Генерируем уникальный ID задачи
    const newTask = { ...task, id: Date.now() };
    commit('ADD_TASK', newTask);
  },
  removeTask({ commit }, taskId) {
    commit('REMOVE_TASK', taskId);
  },
  updateTask({ commit }, updatedTask) {
    commit('UPDATE_TASK', updatedTask);
  },
};

const getters = {
  allTasks: (state) => state.tasks,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
