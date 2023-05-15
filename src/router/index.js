// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import( "@/views/Home.vue"),
        meta: {
          theme: "dark",
        },
      },
      {
        path: "/provinces",
        name: "Provinces",
        component: () =>
          import( "@/views/Provinces.vue"),
        meta: {
          theme: "light",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
