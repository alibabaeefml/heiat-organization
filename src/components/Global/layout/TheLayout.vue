<template>
  <v-card>
    <v-layout>
      <v-app-bar
        v-if="router.currentRoute.value.name != 'Intro'"
        :color="
          scrolled
            ? theme == 'dark'
              ? 'rgba(0,0,0,0.3)'
              : 'rgba(255,255,255,.5)'
            : 'transparent'
        "
        height="100"
        class="px-3"
        :style="{
          width: display.width.value >= 2400 ? '2400px' : '100%',
          left: display.width.value >= 2400 ? 'calc(50% - 1200px)' : 0,
          backdropFilter: 'blur(5px)',
        }"
      >
        <div class="d-flex flex-column align-center">
          <router-link :to="{ name: 'Home' }">
            <v-img width="60" height="60" src="@/assets/images/logo.png">
            </v-img>
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
        <HeaderSubtitle
          v-if="display.smAndUp.value && router_name == 'Home'"
          style="width: 50%"
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
          <router-link
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
          </router-link>
          <router-link
            :to="{ name: 'CategorizedNews' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'CategorizedNews',
            }"
          >
            اخبار
          </router-link>
          <router-link
            :to="{ name: 'MultiMedia' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router_name == 'MultiMedia',
            }"
          >
            چندرسانه ای
          </router-link>
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
          </router-link>
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
        class="pa-5 h-75"
        style="z-index: 9999"
        temporary
      >
        <div
          class="d-flex flex-column justify-between gap-2 text-center"
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
          <router-link
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
          </router-link>
          <router-link
            :to="{ name: 'CategorizedNews' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'CategorizedNews',
            }"
          >
            اخبار
          </router-link>
          <router-link
            :to="{ name: 'MultiMedia' }"
            :class="{
              link: true,
              dark: false,
              active: router_name == 'MultiMedia',
            }"
          >
            چندرسانه ای
          </router-link>
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
          </router-link>
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
            <v-row class="pa-3 px-16">
              <v-col cols="12" md="3" class="d-flex flex-column gap-1">
                <div class="d-flex flex-column">
                  <router-link :to="{ name: 'Home' }">
                    <v-img
                      width="60"
                      height="60"
                      src="@/assets/images/logo.png"
                    >
                    </v-img>
                  </router-link>
                  <h3
                    :style="{
                      'font-size': '7px',
                      'letter-spacing': '-0.5px',
                    }"
                    class="text-primary"
                  >
                    سازمان هیئت و تشکل های دینی
                  </h3>
                </div>
                <p class="limited">{{ persian_lorem }}</p>
              </v-col>
              <v-col
                cols="12"
                md="3"
                class="text-center d-flex flex-column align-center"
              >
                <h3 class="text-primary">دسترسی سریع</h3>
                <v-row class="d-flex justify-center mt-2"
                  ><v-col cols="6" class="d-flex flex-column">
                    <v-btn
                      variant="plain"
                      :to="{ name: item.link || 'Home' }"
                      v-for="item in 5"
                      width="max-content"
                    >
                      {{ item.title || "لورم ایپسوم" }}
                    </v-btn>
                  </v-col>
                  <v-col cols="6" class="d-flex flex-column">
                    <v-btn
                      variant="plain"
                      :to="{ name: item.link || 'Home' }"
                      v-for="item in 5"
                      width="max-content"
                    >
                      {{ item.title || "لورم ایپسوم" }}
                    </v-btn>
                  </v-col></v-row
                >
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="d-flex align-md-end align-center flex-column gap-1"
              >
                <h4>آمار بازدید سایت: {{ visit_stat || 4312 }}</h4>
                <v-row class="w-100">
                  <v-col cols="12" md="4" v-for="item in 3">
                    <router-link :to="{ name: item.link || 'Home' }">
                      <v-img
                        cover
                        class="mr-auto"
                        :width="useDisplay().xs.value ? '100%' : 150"
                        :height="useDisplay().xs.value ? '100%' : 150"
                        :src="item.img || default_img"
                      ></v-img>
                    </router-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div class="bg-primary w-100">
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
import HeaderSubtitle from "@/components/Home/HeaderSubtitle.vue";
import { computed } from "vue";
import Searchbar from "@/components/Global/search/SearchBar.vue";

import { storeToRefs } from "pinia";
import { use_search_store } from "@/store/search";
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

const main_scroll = () => {
  let scroll_top = document.querySelector("main").scrollTop;
  scroll_top > 0 ? (scrolled.value = true) : (scrolled.value = false);
};

const socials = ref([
  {
    icon: "mdi-facebook",
    link: "Home",
  },
  {
    icon: "mdi-instagram",
    link: "Home",
  },
  {
    icon: "mdi-youtube",
    link: "Home",
  },
  {
    icon: "mdi-linkedin",
    link: "Home",
  },
]);

const visit_stat = ref();
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
</style>
