<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <v-img height="380" cover :src="album.thumbnail || default_img"> </v-img>
      <div class="pa-16">
        <div class="d-flex align-center justify-space-between">
          <div>
            <h2 class="text-primary">
              {{ album.title || "تیتر آلبوم" }}
            </h2>
            <div class="mt-2 d-flex gap-1 align-center">
              <v-icon color="primary">mdi-calendar</v-icon>
              <p>
                {{ album.date || "یازدهم مرداد ۱۴۰۱" }}
                -
                {{
                  new Date(Number(album.timecreated)).getHours() +
                  ":" +
                  new Date(Number(album.timecreated)).getMinutes()
                }}
              </p>
            </div>
          </div>
          <div dir="ltr">
            <div class="d-flex align-center gap-1">
              <Actions />
            </div>
            <v-rating
              color="yellow"
              density="compact"
              v-model="rating"
              hover
            ></v-rating>
          </div>
        </div>
        <div class="text-justify" v-html="album.desc"></div>
        <h2 class="mt-5">تصاویر مربوطه</h2>
        <PhotosSwiper :slides="album.album" v-if="album.album" />
        <Comments :cols="useDisplay().mdAndUp.value ? 6 : 12" class="mt-10" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Comments from "@/components/Global/comment/Comments.vue";
import Actions from "@/components/Global/button_group/Actions.vue";
import PhotosSwiper from "@/components/Global/gallery/PhotosSwiper.vue";
import { useRoute, useRouter } from "vue-router";
import { use_photo_store } from "@/store/photo";
import { watch } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const album = ref({});

const router = useRouter();
const load_data = async () => {
  const { id } = router.currentRoute.value.params;
  album.value = await use_photo_store().show_album({ id });
};

load_data();

const rating = ref();
</script>
