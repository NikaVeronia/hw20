<template>
  <div>
    <h1>Создать задачу</h1>
    <TaskForm :task="newTask" @submit="createTask" />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { TaskForm },
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        priority: 'Low',
        deadline: '',
        status: 'New',
      },
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    createTask(task) {
      this.addTask(task);
      this.$router.push('/');
    },
  },
};
</script>
