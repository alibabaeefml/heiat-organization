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
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "صفحه اصلی",
          theme: "dark",
        },
      },
      {
        path: "/provinces",
        name: "Provinces",
        component: () => import("@/views/Provinces.vue"),
        meta: {
          title: "استان ها",
          theme: "light",
        },
      },
      {
        path: "/provinces-single-news",
        name: "ProvincesSingleNews",
        component: () => import("@/views/ProvincesSingleNews.vue"),
        meta: {
          title: "تک خبر استان ها",
          theme: "light",
        },
      },
      {
        path: "/categorized-news",
        name: "CategorizedNews",
        component: () => import("@/views/CategorizedNews.vue"),
        meta: {
          title: "اخبار دسته بندی شده",
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

router.beforeEach((to, from) => {
  document.title = to.meta.title;
});
export default router;
