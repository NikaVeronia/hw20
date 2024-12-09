<template>
  <div>
    <h1>Мои Задачи</h1>
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { TaskList },
  computed: {
    ...mapGetters('tasks', ['allTasks']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions('tasks', ['fetchTasks']),
  },
};
</script>
