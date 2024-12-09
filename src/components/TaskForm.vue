<template>
  <div class="task-form-container">
    <form class="task-form" @submit.prevent="submitTask">
      <input
        class="form-input"
        v-model="title"
        placeholder="Название задачи"
        required
      />
      <textarea
        class="form-textarea"
        v-model="description"
        placeholder="Описание задачи"
      ></textarea>
      <select class="form-select" v-model="priority">
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      <input class="form-date" type="date" v-model="deadline" required />
      <button class="form-button" type="submit">Добавить задачу</button>
    </form>
  </div>
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

<style scoped>
/* Контейнер формы */
.task-form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Общий стиль для формы */
.task-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Поля ввода */
.form-input,
.form-textarea,
.form-select,
.form-date {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
}

/* Текстовое поле */
.form-textarea {
  resize: vertical;
  min-height: 80px;
}

/* Выпадающий список */
.form-select {
  cursor: pointer;
}

/* Кнопка */
.form-button {
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #2ecc71;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #27ae60;
}
</style>
