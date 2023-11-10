<template>
  <section class="wrapper bg-secondary-3 position-relative">
    <div class="position-relative pa-16" style="z-index: 11">
      <div
        class="d-flex align-center gap-1 flex-md-row flex-column justify-space-between"
      >
        <TextGroup
          :title="language.value.index_sec4_news_title"
          :pretitle="language.value.index_sec4_news_subtitle"
          :desc="language.value.index_sec4_news_desc"
        />
        <v-btn
          color="primary"
          class="rounded-lg font-weight-bold"
          :width="useDisplay().xs.value ? '100%' : 'auto'"
          :to="{ name: 'News' }"
          >نمایش همه</v-btn
        >
      </div>

      <v-row class="mt-5 h-100">
        <v-col cols="12" md="6" class="h-100">
          <router-link to="" class="d-block position-relative h-100">
            <v-img :src="get_news[0]?.img" block class="rounded-xl" />
            <h3
              class="position-absolute text-secondary ma-4"
              style="bottom: 0; right: 0; z-index: 2"
            >
              {{ get_news[0]?.title }}
            </h3>
            <div
              class="position-absolute w-100 h-100 rounded-xl"
              style="
                top: 0;
                z-index: 1;
                box-shadow: rgba(16, 16, 16, 0.6) 0px -20px 20px 20px inset;
              "
            ></div>
          </router-link>
        </v-col>
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" style="border: 2px solid var(--secondary-2)">
            <v-card-title
              class="d-flex align-center gap-1 bg-secondary text-primary"
            >
              <v-icon>mdi-eye</v-icon>
              <h3>پر بازدید ترین ها</h3>
            </v-card-title>
            <v-btn
              icon="mdi-arrow-left"
              position="absolute"
              location="top left"
              variant="text"
              color="primary"
            ></v-btn>
            <v-card-body>
              <v-list>
                <v-list-item to="/news" v-for="item in 5">
                  <div class="d-flex align-center gap-1">
                    <div style="width: 80px; height: 50px">
                      <v-img
                        src="src/assets/images/logo.png"
                        class="rounded-xl"
                      ></v-img>
                    </div>
                    <p>عنوان پست در این قسمت</p>
                  </div>
                </v-list-item>
              </v-list>
            </v-card-body>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" style="border: 2px solid var(--secondary-2)">
            <v-card-title
              class="d-flex align-center gap-1 bg-secondary text-primary"
            >
              <v-icon>mdi-star</v-icon>
              <h3>اخبار برگزیده</h3>
            </v-card-title>
            <v-btn
              icon="mdi-arrow-left"
              position="absolute"
              location="top left"
              variant="text"
              color="primary"
            ></v-btn>
            <v-card-body>
              <v-list>
                <v-list-item to="/news" v-for="item in 5">
                  <div class="d-flex align-center gap-1">
                    <div style="width: 80px; height: 50px">
                      <v-img
                        src="src/assets/images/logo.png"
                        class="rounded-xl"
                      ></v-img>
                    </div>
                    <p>عنوان پست در این قسمت</p>
                  </div>
                </v-list-item>
              </v-list>
            </v-card-body>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { use_news_store } from "@/store/news";
import { storeToRefs } from "pinia";
import { ref } from "vue";

use_news_store().index_news();
const { get_news } = storeToRefs(use_news_store());
</script>

<style scoped>
.wrapper {
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: max-content;
  padding-bottom: 200px;
}

.wrapper::after {
  content: "";
  display: flex;
  background-image: url(@/assets/images/white_mask.png);
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
