import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeM from "./components/HomeM.vue";
import ProfileM from "./components/ProfileM.vue";
import TasksM from "./components/TasksM.vue";
import CalenderM from "./components/CalenderM.vue";
// define the routes => component
const routes = [
  { path: "/", component: HomeM },
  { path: "/tasks", component: TasksM },
  { path: "/calendar", component: CalenderM },
  {path:'/profile', component: ProfileM}
];

// instance of the router
const router = createRouter({
    history:createWebHistory(),
    routes,
});

// create an instance of the app
const app = createApp(App);
app.use(router);
app.mount("#app");
