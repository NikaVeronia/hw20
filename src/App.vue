<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Мои задачи</router-link></li>
          <li><router-link to="/create">Создать задачу</router-link></li>
          <li><router-link to="/settings">Настройки</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Точка рендеринга текущего маршрута -->
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 Task Planner. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Общие стили */
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

/* Стили для шапки и меню */
header {
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a.router-link-exact-active {
  border-bottom: 2px solid white;
}

/* Основной контент */
main {
  padding: 20px;
}

/* Нижний колонтитул */
footer {
  background-color: #f4f4f4;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}
</style>
