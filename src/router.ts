import { createWebHistory, createRouter } from "vue-router";

import MonthlyView from "./views/MonthlyView.vue";
import WeeklyView from "./views/WeeklyView.vue";
import GraphView from "./views/GraphView.vue";
import SettingsView from "./views/SettingsView.vue";
import AuthView from "./views/AuthView.vue";

const routes = [
  { path: "/login", component: AuthView },
  { path: "/", component: MonthlyView },
  { path: "/weekly", component: WeeklyView },
  { path: "/graph", component: GraphView },
  { path: "/settings", component: SettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
