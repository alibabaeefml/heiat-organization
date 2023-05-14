<template>
  <v-card>
    <v-layout>
      <v-app-bar
        :color="scrolled ? 'rgba(0,0,0,0.6)' : 'transparent'"
        height="100"
        class="px-3"
        :style="{
          minWidth: useDisplay().xlAndUp.value ? '2400px' : '100%',
          maxWidth: useDisplay().xlAndUp.value ? '2400px' : '100%',
          left: useDisplay().xlAndUp.value ? 'calc(50% - 1200px)' : 0,
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
          v-if="
            display.smAndUp.value && router.currentRoute.value.name == 'Home'
          "
        />

        <div
          class="d-flex justify-between gap-1"
          v-if="
            display.mdAndUp.value && router.currentRoute.value.name != 'Home'
          "
          gap="3rem"
        >
          <router-link
            :to="{ name: 'Home' }"
            :class="{
              link: true,
              dark: theme == 'dark',
              active: router.currentRoute.value.name == 'Home',
            }"
          >
            صفحه اصلی
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            استان ها
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            تشکل های میان تخصصی
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            اخبار
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            چندرسانه ای
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: theme == 'dark', active: false }"
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
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          :color="theme == 'dark' ? '#fff' : 'var(--primary)'"
          v-if="display.smAndDown.value"
        ></v-app-bar-nav-icon>
        <v-text-field
          variant="underlined"
          v-if="show_search_bar"
          :color="theme == 'dark' ? '#fff' : '#000'"
          bg-color="rgba(255,255,255,.3)"
          clearable
          class="pl-5"
          autofocus
          label="جستجو"
          append-inner-icon="mdi-magnify"
          @click:append-inner="search"
        >
        </v-text-field>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
        class="mobile-nav pa-5"
        style="height: max-content"
      >
        <div
          class="d-flex flex-column justify-between gap-2 text-center mobile-nav"
          gap="3rem"
        >
          <router-link
            :to="{ name: 'Home' }"
            :class="{
              link: true,
              dark: false,
              active: router.currentRoute.value.name == 'Home',
            }"
          >
            صفحه اصلی
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            استان ها
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            تشکل های میان تخصصی
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            اخبار
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            چندرسانه ای
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            :to="{ name: 'Home' }"
            :class="{ link: true, dark: false, active: false }"
          >
            تماس با ما
          </router-link>
        </div>
      </v-navigation-drawer>

      <v-main
        style="height: 100vh; overflow: auto"
        class="pa-0"
        :onscroll="main_scroll"
      >
        <v-container class="h-100 pa-0" :fluid="useDisplay().xlAndDown.value">
          <router-view />
        </v-container>
      </v-main>
      <v-footer class="d-flex flex-column bg-primary" color="primary">
        <div>FOOTER</div>
      </v-footer>
    </v-layout>
  </v-card>
</template>
<script setup>
import { watch } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";
import HeaderSubtitle from "@/components/Home/HeaderSubtitle.vue";

const router = useRouter();
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const theme = ref(router.currentRoute.value.meta.theme);

const display = useDisplay();

const show_search_bar = ref(false);
const search = () => console.log("to search later");

const scrolled = ref(false);

const main_scroll = () => {
  let scroll_top = document.querySelector("main").scrollTop;
  scroll_top > 0 ? (scrolled.value = true) : (scrolled.value = false);
};
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
