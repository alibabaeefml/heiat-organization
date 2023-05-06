<template>
  <v-card>
    <v-layout>
      <v-app-bar
        :color="theme == 'dark' ? 'rgba(0,0,0,.5)' : 'transparent'"
        height="100"
      >
        <div class="d-flex flex-column align-center pa-2">
          <v-img width="60" height="60" src="@/assets/images/logo.png"> </v-img>
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
        <div class="d-flex justify-between gap-1" gap="3rem">
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            صفحه اصلی
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            استان ها
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            تشکل های میان تخصصی
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            اخبار
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            چندرسانه ای
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: theme == 'dark', active: false }"
          >
            تماس با ما
          </router-link>
        </div>
        <v-btn
          variant="text"
          icon="mdi-magnify"
          :color="theme == 'dark' ? '#fff' : 'var(--primary)'"
        ></v-btn>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          :color="theme == 'dark' ? '#fff' : 'var(--primary)'"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
        class="mobile-nav pa-5"
        style="height: max-content;"
      >
        <div
          class="d-flex flex-column justify-between gap-2 text-center mobile-nav"
          gap="3rem"
        >
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            صفحه اصلی
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            استان ها
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            تشکل های میان تخصصی
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            اخبار
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            چندرسانه ای
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            معرفی سازمان
          </router-link>
          <router-link
            to="/"
            :class="{ link: true, dark: false, active: false }"
          >
            تماس با ما
          </router-link>
        </div>
      </v-navigation-drawer>

      <v-main style="height: 100vh; overflow: auto" class="pa-0">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { watch } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const theme = ref(router.currentRoute.value.meta.theme);
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
