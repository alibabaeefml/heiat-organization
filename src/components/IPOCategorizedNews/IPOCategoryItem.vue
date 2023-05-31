<template>
  <div class="d-flex flex-column gap-1">
    <div class="d-flex align-center gap-1">
      <v-row>
        <v-col cols="12" md="2" :order="useDisplay().mdAndUp.value ? 2 : 1">
          <v-img
            :src="data.logo || default_img"
            cover
            max-width="160"
            height="160"
            class="mx-auto"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="10" :order="useDisplay().mdAndUp.value ? 1 : 2">
          <div
            class="d-flex flex-sm-row flex-column align-center justify-space-between"
          >
            <TextGroup
              :title="data.title || 'عنوان مجمع تخصصی'"
              title_class="text-secondary-4"
              no_desc="true"
            />

            <div
              class="d-flex flex-sm-row flex-column align-center gap-1"
              :style="{ width: useDisplay().xs.value ? '100%' : 'auto' }"
            >
              <div
                class="d-flex align-center justify-space-between w-100 gap-1"
              >
                <v-btn
                  class="next-slide"
                  icon="mdi-arrow-right"
                  color="secondary"
                ></v-btn>
                <v-btn
                  class="prev-slide"
                  icon="mdi-arrow-left"
                  color="secondary"
                ></v-btn>
              </div>
              <v-btn
                color="secondary-4"
                class="rounded-lg font-weight-bold"
                :width="useDisplay().xs.value ? '100%' : 'max-content'"
                >نمایش همه</v-btn
              >
            </div>
          </div>
          <p class="limited">
            {{ data.desc || persian_lorem }}
          </p>
        </v-col>
      </v-row>
    </div>
    <HorizontalSwiper class="mt-5" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import TextGroup from "../Global/text/TextGroup.vue";
import HorizontalSwiper from "../Global/swiper/HorizontalSwiper.vue";

const data = ref({});
</script>
