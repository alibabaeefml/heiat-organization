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
          title: "سازمان هیئت و تشکل های مذهبی",
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
        path: "/provinces/:province_id?",
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
        path: "/provinces-news",
        name: "ProvincesNews",
        component: () => import("@/views/ProvincesNews.vue"),
        meta: {
          title: "لیست اخبار استان ها",
          theme: "light",
        },
      },
      {
        path: "/organizations-news",
        name: "OrganizationsNews",
        component: () => import("@/views/OrganizationsNews.vue"),
        meta: {
          title: "لیست اخبار تشکل ها",
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
        path: "/special-single-news/:id",
        name: "SpecialSingleNews",
        component: () => import("@/views/SpecialSingleNews.vue"),
        meta: {
          title: "تک ویژه نامه",
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
        path: "/organization-single-news/:id",
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
        path: "/organizations",
        name: "Organizations",
        component: () => import("@/views/Organizations.vue"),
        meta: {
          title: "دسته بندی اخبار تشکل های میان تخصصی",
          theme: "light",
        },
      },
      {
        path: "/special-news/:id",
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
        path: "/articles",
        name: "Articles",
        component: () => import("@/views/Articles.vue"),
        meta: {
          title: "لیست مقالات",
          theme: "light",
        },
      },
      {
        path: "/albums",
        name: "Albums",
        component: () => import("@/views/Albums.vue"),
        meta: {
          title: "لیست آلبوم ها",
          theme: "light",
        },
      },
      {
        path: "/single-album/:id?",
        name: "SingleAlbum",
        component: () => import("@/views/SingleAlbum.vue"),
        meta: {
          title: "تک آلبوم",
          theme: "light",
        },
      },
      {
        path: "/single-article/:id",
        name: "SingleArticle",
        component: () => import("@/views/SingleArticle.vue"),
        meta: {
          title: "مقاله",
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
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    $("main").scrollTop(0);
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta.title;
});
export default router;
