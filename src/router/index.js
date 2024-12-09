import { createRouter, createWebHistory } from 'vue-router';
import MyTasks from '@/views/MyTasks.vue';
import CreateTask from '@/views/CreateTask.vue';
import TaskDetails from '@/views/TaskDetails.vue';
import Settings from '@/views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'MyTasks',
    component: MyTasks,
  },
  {
    path: '/create',
    name: 'CreateTask',
    component: CreateTask,
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    component: TaskDetails,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
