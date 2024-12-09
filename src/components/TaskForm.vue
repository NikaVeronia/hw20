<template>
  <form @submit.prevent="submitTask">
    <input v-model="title" placeholder="Название задачи" required />
    <textarea v-model="description" placeholder="Описание задачи"></textarea>
    <select v-model="priority">
      <option value="low">Низкий</option>
      <option value="medium">Средний</option>
      <option value="high">Высокий</option>
    </select>
    <input type="date" v-model="deadline" required />
    <button type="submit">Добавить задачу</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskForm',
  data() {
    return {
      title: '',
      description: '',
      priority: 'low',
      deadline: '',
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitTask() {
      if (this.title && this.deadline) {
        this.addTask({
          title: this.title,
          description: this.description,
          priority: this.priority,
          deadline: this.deadline,
          status: 'new',
        });
        this.title = '';
        this.description = '';
        this.priority = 'low';
        this.deadline = '';
      }
    },
  },
};
</script>
