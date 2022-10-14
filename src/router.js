import { createRouter, createWebHistory } from "vue-router";
import FirstTask from "./components/pages/first/FirstTask.vue";
import SecondTask from "./components/pages/second/SecondTask.vue";
import ThirdTask from "./components/pages/third/ThirdTask.vue";
import FourthTask from "./components/pages/fourth/FourthTask.vue";
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
  {
    path: "/third-task",
    name: "ThirdTask",
    component: ThirdTask,
  },
  {
    path: "/fourth-task",
    name: "FourthTask",
    component: FourthTask,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
