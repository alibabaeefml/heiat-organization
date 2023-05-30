// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Intro",
        component: () => import("@/views/Intro.vue"),
        meta: {
          title: "صفحه اصلی",
          theme: "dark",
        },
      },
      {
        path: "/home",
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
        path: "/news/:province_id?",
        name: "News",
        component: () => import("@/views/News.vue"),
        meta: {
          title: "لیست اخبار",
          theme: "light",
        },
      },
      {
        path: "/provinces-single-news/:id",
        name: "ProvincesSingleNews",
        component: () => import("@/views/ProvincesSingleNews.vue"),
        meta: {
          title: "تک خبر استان ها",
          theme: "light",
        },
      },
      {
        path: "/single-news/:id",
        name: "SingleNews",
        component: () => import("@/views/SingleNews.vue"),
        meta: {
          title: "تک خبر",
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
        component: () =>
          import("@/views/InterprofessionalOrganizationsCategorizedNews.vue"),
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
      {
        path: "/about-us",
        name: "AboutUs",
        component: () => import("@/views/AboutUs.vue"),
        meta: {
          title: "ویژه نامه",
          theme: "light",
        },
      },
      {
        path: "/contact-us",
        name: "ContactUs",
        component: () => import("@/views/ContactUs.vue"),
        meta: {
          title: "تماس با ما",
          theme: "light",
        },
      },
      {
        path: "/multimedia",
        name: "MultiMedia",
        component: () => import("@/views/MultiMedia.vue"),
        meta: {
          title: "چند رسانه ای",
          theme: "light",
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: () => import("@/views/PageNotFound.vue"),
        meta: {
          title: ":)",
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
