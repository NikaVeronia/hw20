<template>
  <div>
    <h2>Список задач</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <p>Приоритет: {{ task.priority }}</p>
        <p>Дедлайн: {{ task.deadline }}</p>
        <button @click="removeTask(task.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TaskList',
  computed: {
    ...mapGetters('tasks', ['allTasks']),
    tasks() {
      return this.allTasks;
    },
  },
  methods: {
    ...mapActions('tasks', ['removeTask']),
  },
};
</script>
