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
        path: "/news",
        name: "News",
        component: () => import("@/views/News.vue"),
        meta: {
          title: "لیست اخبار",
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
        path: "/organization-single-news",
        name: "OrganizationSingleNews",
        component: () => import("@/views/OrganizationSingleNews.vue"),
        meta: {
          title: "تک خبر سازمان / تشکل",
          theme: "light",
        },
      },
      {
        path: "/categorized-news",
        name: "CategorizedNews",
        component: () => import("@/views/CategorizedNews.vue"),
        meta: {
          title: "اخبار",
          theme: "light",
        },
      },
      {
        path: "/interprofessional-organizations-categorized-news",
        name: "InterprofessionalOrganizationsCategorizedNews",
        component: () => import("@/views/InterprofessionalOrganizationsCategorizedNews.vue"),
        meta: {
          title: "دسته بندی اخبار تشکل های میان تخصصی",
          theme: "light",
        },
      },
      {
        path: "/special-news",
        name: "SpecialNews",
        component: () => import("@/views/SpecialNews.vue"),
        meta: {
          title: "ویژه نامه",
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
