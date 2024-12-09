<template>
  <div class="task-list-container">
    <h2>Список задач</h2>
    <ul class="task-list">
      <li class="task-item" v-for="task in tasks" :key="task.id">
        <div class="task-details">
          <h3 class="task-title">{{ task.title }}</h3>
          <p class="task-description">{{ task.description }}</p>
          <p class="task-priority">Приоритет: {{ task.priority }}</p>
          <p class="task-deadline">Дедлайн: {{ task.deadline }}</p>
        </div>
        <button class="delete-button" @click="removeTask(task.id)">
          Удалить
        </button>
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

<style scoped>
/* Контейнер списка задач */
.task-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Заголовок */
.task-list-container h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

/* Список задач */
.task-list {
  list-style: none;
  padding: 0;
}

/* Карточка задачи */
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Детали задачи */
.task-details {
  max-width: 70%;
}

.task-title {
  font-size: 20px;
  margin: 0 0 10px;
  color: #333;
}

.task-description {
  font-size: 14px;
  color: #666;
  margin: 0 0 10px;
}

.task-priority,
.task-deadline {
  font-size: 14px;
  color: #555;
}

/* Кнопка удаления */
.delete-button {
  align-self: flex-start;
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
