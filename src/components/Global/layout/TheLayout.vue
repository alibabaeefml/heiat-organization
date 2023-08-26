<template>
  <v-card>
    <v-layout>
      <v-app-bar
        v-if="router.currentRoute.value.name != 'Intro' && show_app_bar"
        :color="
          scrolled
            ? theme == 'dark'
              ? 'rgba(0,0,0,0.3)'
              : 'rgba(255,255,255,.5)'
            : 'transparent'
        "
        height="100"
        class="px-3 app_bar_slide_animation"
        :style="{
          width: display.width.value >= 2400 ? '2400px' : '100%',
          left: display.width.value >= 2400 ? 'calc(50% - 1200px)' : 0,
          backdropFilter: 'blur(5px)',
          zIndex: 20,
        }"
      >
        <div class="d-flex flex-column align-center">
          <router-link :to="{ name: 'Intro' }">
            <v-img width="60" height="60" :src="get_settings?.logo"> </v-img>
          </router-link>
          <span
            :style="{
              'font-size': '7px',
              'letter-spacing': '-0.5px',
              color: theme == 'dark' ? '#fff' : 'var(--primary)',
            }"
            >سازمان هیئت و تشکل های دینی</span
          >
        </div>

        <v-spacer></v-spacer>
        <HeaderSurtitle
          v-if="display.smAndUp.value && router_name == 'Home'"
          style="width: 50%"
          class="mx-2"
        />

        <div
          class="d-flex justify-between gap-1"
          v-if="display.width.value >= 800 && router_name != 'Home'"
          gap="3rem"
        >
          <router-link
            :to="{ name: 'Home' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'Home',
            }"
          >
            صفحه اصلی
          </router-link>
          <!-- <router-link
            :to="{ name: 'Provinces' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'Provinces',
            }"
          >
            استان ها
          </router-link>
          <router-link
            :to="{ name: 'Organizations' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'Organizations',
            }"
          >
            تشکل های میان تخصصی
          </router-link> -->
          <router-link
            :to="{ name: 'ReporterNews' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'ReporterNews',
            }"
          >
            اخبار پویش خبرنگار
          </router-link>
 <!-- <router-link
            :to="{ name: 'CategorizedNews' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'CategorizedNews',
            }"
          >
            اخبار
          </router-link> -->
                   <!-- <div>
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <router-link
                  to="#"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'MultiMedia',
                  }"
                  v-bind="props"
                >
                  چندرسانه ای
                </router-link>
              </template>

              <v-list
                class="mt-1 d-flex flex-column gap-1 text-center bg-secondary"
              >
                <router-link
                  :to="{ name: 'Videos' }"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'Videos',
                  }"
                >
                  فیلم
                </router-link>
                <router-link
                  :to="{ name: 'Audios' }"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'Audios',
                  }"
                >
                  صوت
                </router-link>
                <router-link
                  :to="{ name: 'Albums' }"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'Albums',
                  }"
                >
                  آلبوم
                </router-link>
                <router-link
                  :to="{ name: 'Articles' }"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'Articles',
                  }"
                >
                  مقاله
                </router-link>
                <router-link
                  :to="{ name: 'MultiMedia' }"
                  :class="{
                    link: true,
                    dark: theme == 'dark',
                    active: router_name == 'MultiMedia',
                  }"
                >
                  همه
                </router-link>
              </v-list>
            </v-menu>
          </div>

          <router-link
            :to="{ name: 'AboutUs' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'AboutUs',
            }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            :to="{ name: 'ContactUs' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'ContactUs',
            }"
          >
            تماس با ما
          </router-link> -->
         
        </div>
        <v-btn
          variant="text"
          :icon="show_search_bar ? 'mdi-close' : 'mdi-magnify'"
          :color="theme == 'dark' ? '#fff' : 'var(--primary)'"
          @click="show_search_bar = !show_search_bar"
        ></v-btn>
        <Searchbar
          @onsearch="search"
          :items="get_results"
          :theme="theme"
          item_link="SingleNews"
          class="mx-1"
          v-if="show_search_bar"
        />
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          :color="theme == 'dark' ? '#fff' : 'var(--primary)'"
          v-if="display.width.value <= 800 || router_name == 'Home'"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <!-- drawer menu -->
      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        class="pa-5"
        :class="{ 'h-75': useDisplay().xs.value }"
        style="
          z-index: 9999;
          height: max-content;
          width: 300px;
          left: calc(50% - 150px);
        "
        temporary
      >
        <div
          class="d-flex flex-column justify-between gap-2 text-center overflow-hidden"
          gap="3rem"
        >
          <router-link
            :to="{ name: 'Home' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'Home',
            }"
          >
            صفحه اصلی
          </router-link>
          <!-- <router-link
            :to="{ name: 'Provinces' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'Provinces',
            }"
          >
            استان ها
          </router-link>
          <router-link
            :to="{ name: 'Organizations' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'Organizations',
            }"
          >
            تشکل های میان تخصصی
          </router-link> -->
          <!-- <router-link
            :to="{ name: 'CategorizedNews' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'CategorizedNews',
            }"
          >
            اخبار
          </router-link> -->
          <router-link
            :to="{ name: 'ReporterNews' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'ReporterNews',
            }"
          >
            اخبار پویش خبرنگار
          </router-link>
          <!-- <v-menu open-on-hover open-on-click>
            <template v-slot:activator="{ props }">
              <router-link
                to=""
                :class="{
                  link: true,
                  active: router_name == 'MultiMedia',
                }"
                v-bind="props"
              >
                چندرسانه ای
              </router-link>
            </template>

            <v-list
              class="mt-1 d-flex flex-column gap-1 text-center bg-secondary"
            >
              <router-link
                :to="{ name: 'Videos' }"
                :class="{
                  link: true,
                  active: router_name == 'Videos',
                }"
              >
                فیلم
              </router-link>
              <router-link
                :to="{ name: 'Audios' }"
                :class="{
                  link: true,
                  active: router_name == 'Audios',
                }"
              >
                صوت
              </router-link>
              <router-link
                :to="{ name: 'Albums' }"
                :class="{
                  link: true,
                  active: router_name == 'Albums',
                }"
              >
                آلبوم
              </router-link>
              <router-link
                :to="{ name: 'Articles' }"
                :class="{
                  link: true,
                  active: router_name == 'Articles',
                }"
              >
                مقاله
              </router-link>
              <router-link
                :to="{ name: 'MultiMedia' }"
                :class="{
                  link: true,
                  active: router_name == 'MultiMedia',
                }"
              >
                همه
              </router-link>
            </v-list>
          </v-menu>
          <router-link
            :to="{ name: 'AboutUs' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'AboutUs',
            }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            :to="{ name: 'ContactUs' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'ContactUs',
            }"
          >
            تماس با ما
          </router-link> -->
        </div>
      </v-navigation-drawer>

      <v-main
        style="height: 100vh; overflow-y: auto"
        class="pa-0 overflow-x-hidden"
        :onscroll="main_scroll"
      >
        <v-container class="h-100 pa-0" :fluid="display.xlAndDown.value">
          <router-view />
          <v-footer
            v-if="router.currentRoute.value.name != 'Intro'"
            class="pt-5 d-flex flex-column pa-0"
            color="#FAF8E8"
          >
            <v-row
              class="py-3 px-16 w-100"
              :no-gutters="useDisplay().mdAndUp.value"
            >
              <v-col cols="12" md="4" class="d-flex flex-column gap-1">
                <div class="d-flex flex-column">
                  <router-link
                    class="text-decoration-none"
                    :to="{ name: 'Home' }"
                  >
                    <v-img width="120" height="120" :src="get_settings?.logo">
                    </v-img>
                    <h3
                      :style="{
                        'font-size': '10px',
                        'letter-spacing': '-0.5px',
                      }"
                      class="text-primary"
                    >
                      سازمان هیئت و تشکل های دینی
                    </h3>
                  </router-link>
                </div>
                <p class="limited">{{ language.value.footer_aboutus }}</p>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="text-center d-flex flex-column align-center"
              >
                <h3 class="text-primary">دسترسی سریع</h3>
                <v-row class="mt-2 font-weight-bold"
                  ><v-col cols="12" class="d-flex flex-column align-center">
                    <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'Home' }"
                      width="max-content"
                    >
                      صفحه اصلی
                    </v-btn>
                    <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'ReporterNews' }"
                      width="max-content"
                    >
                      اخبار پویش خبرنگار
                    </v-btn>
                    <!-- <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'AboutUs' }"
                      width="max-content"
                    >
                      درباره ما
                    </v-btn>
                    <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'ContactUs' }"
                      width="max-content"
                    >
                      تماس با ما
                    </v-btn> -->
                  </v-col>
                  <!-- <v-col cols="6" class="d-flex flex-column align-center">
                     <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'Organizations' }"
                      width="max-content"
                    >
                      اخبار تشکل ها
                    </v-btn>
                    <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'News' }"
                      width="max-content"
                    >
                      اخبار سازمان
                    </v-btn>
                    <v-btn
                      variant="text"
                      :active="false"
                      :to="{ name: 'Albums' }"
                      width="max-content"
                    >
                      گالری
                    </v-btn> 
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col cols="12" md="4">
                <div class="d-flex align-md-end align-center flex-column gap-1">
                  <h4>آمار بازدید سایت: {{ visit_stat || 4312 }}</h4>
                  <div
                    class="d-flex flex-sm-row flex-column justify-center justify-sm-end w-100"
                  >
                    <router-link
                      :style="{
                        width: useDisplay().xs.value ? '50%' : '160px',
                        margin: 'auto',
                      }"
                      :to="get_settings?.footer_icon1_link || '/home'"
                    >
                      <v-img
                        cover
                        class="rounded-lg"
                        :src="get_settings?.footer_icon1_img || default_img"
                      ></v-img>
                    </router-link>
                    <router-link
                      :style="{
                        width: useDisplay().xs.value ? '50%' : '160px',
                        margin: 'auto',
                      }"
                      :to="get_settings?.footer_icon1_link || '/home'"
                    >
                      <v-img
                        cover
                        class="rounded-lg"
                        :src="get_settings?.footer_icon2_img || default_img"
                      ></v-img>
                    </router-link>
                    <router-link
                      :style="{
                        width: useDisplay().xs.value ? '50%' : '160px',
                        margin: 'auto',
                      }"
                      :to="get_settings?.footer_icon1_link || '/home'"
                    >
                      <v-img
                        cover
                        class="rounded-lg"
                        :src="get_settings?.footer_icon3_img || default_img"
                      ></v-img>
                    </router-link>
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="w-100" :class="footer_theme_class || 'bg-primary'">
              <div
                class="d-flex align-center w-100 flex-sm-row flex-column justify-space-between pa-3 px-16"
              >
                <p>
                  کلیه حقوق این سایت متعلق به سازمان هیأت و تشکل های دینی
                  می‌باشد.
                </p>
                <div class="d-flex justify-space-between gap-1">
                  <v-btn
                    v-for="item in socials"
                    :key="item"
                    :icon="item.icon"
                    :to="item.link"
                    variant="plain"
                    size="small"
                  >
                  </v-btn>
                </div>
              </div>
            </div>
          </v-footer>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { watch } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";
import HeaderSurtitle from "@/components/Home/HeaderSurtitle.vue";
import { computed } from "vue";
import Searchbar from "@/components/Global/search/SearchBar.vue";

import { storeToRefs } from "pinia";
import { use_search_store } from "@/store/search";
import { getCurrentInstance } from "vue";
import { use_settings_store } from "@/store/settings";

const router = useRouter();
const router_name = computed(() => router.currentRoute.value.name);
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const theme = computed(() => router.currentRoute.value.meta.theme);

const display = useDisplay();

const { get_results } = storeToRefs(use_search_store());
const show_search_bar = ref(false);
const search = async (search_term) => {
  await use_search_store().search(search_term, "news");
};

const scrolled = ref(false);

let lastScrollTop = 0;
const show_app_bar = ref(true);
const main_scroll = () => {
  let scroll_top = document.querySelector("main").scrollTop;
  scroll_top > 0 ? (scrolled.value = true) : (scrolled.value = false);

  if (scroll_top > lastScrollTop) {
    // bottom
    show_app_bar.value = false;
  } else {
    // top
    show_app_bar.value = true;
  }
  lastScrollTop = scroll_top <= 0 ? 0 : scroll_top;
};

const { footer_icon1_url, footer_icon2_url, footer_icon3_url } =
  getCurrentInstance().appContext.config.globalProperties.language.value;
const socials = ref([
  {
    icon: "mdi-facebook",
    link: footer_icon1_url,
  },
  {
    icon: "mdi-instagram",
    link: footer_icon2_url,
  },
  {
    icon: "mdi-youtube",
    link: footer_icon3_url,
  },
]);

const visit_stat = ref();

const { get_settings } = storeToRefs(use_settings_store());
use_settings_store().index_settings();

const footer_theme_class = computed(
  () => router.currentRoute.value.meta.footer_theme_class
);
</script>

<style scoped>
.link {
  text-decoration: none;
  position: relative;
  color: #000;
}
.link:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  margin-top: 2px;
  position: absolute;
  background-color: var(--primary);
  transition: 0.5s;
}
.link:hover::after,
.link.active::after {
  width: 100%;
}
.link.dark {
  color: #fff !important;
}
.link.dark:after {
  background-color: var(--secondary);
}

@keyframes app_bar_slide_animation {
  from {
    top: -200px;
  }
  to {
    top: 0;
  }
}
.app_bar_slide_animation {
  animation: app_bar_slide_animation 0.5s forwards;
}
</style>
