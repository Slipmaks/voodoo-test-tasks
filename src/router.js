import { createRouter, createWebHistory } from "vue-router";
import FirstTask from "./components/pages/FirstTask.vue";
import SecondTask from "./components/pages/SecondTask.vue";
const routes = [
  {
    path: "/",
    name: "FirstTask",
    component: FirstTask,
  },
  {
    path: "/second-task",
    name: "SecondTask",
    component: SecondTask,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
