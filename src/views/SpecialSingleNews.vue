<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <v-img height="380" cover :src="news.img || default_img"> </v-img>
      <v-row class="pa-3">
        <v-col cols="12" md="9">
          <div class="d-flex align-center justify-space-between">
            <div>
              <h2 class="text-primary">
                {{ news.title || "تیتر ویژه نامه" }}
              </h2>
              <div class="mt-2 d-flex gap-1 align-center">
                <v-icon color="primary">mdi-calendar</v-icon>
                <p>
                  {{ news.date || "یازدهم مرداد ۱۴۰۱" }}
                  -
                  {{
                    new Date(Number(news.timecreated)).getHours() +
                    ":" +
                    new Date(Number(news.timecreated)).getMinutes()
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
          <div class="text-justify" v-html="news.desc"></div>

          <Comments class="mt-10" table="specialnews" :post_id="news.id" />
        </v-col>
        <v-col cols="12" md="3">
          <h2 class="text-primary">اخبار مرتبط</h2>
          <v-spacer class="my-5"></v-spacer>
          <VerticalCard
            center_link="true"
            v-for="item in relevants"
            :data="{
              card_theme: 'primary',
              title: item.title,
              img: item.thumbnail,
              text: item.lead,
              link: { name: 'SpecialSingleNews', params: { id: item.id } },
            }"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Comments from "@/components/Global/comment/Comments.vue";
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import Actions from "@/components/Global/button_group/Actions.vue";
import { use_news_store } from "@/store/news";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";

const news = ref({});
const relevants = ref([]);

const router = useRouter();
const load_data = async () => {
  const { id } = router.currentRoute.value.params;
  const res = await use_news_store().show_special_news({
    id,
  });
  news.value = res.data[0];

  relevants.value = res.relevants;
};

load_data();
const route = useRoute();
watch(route, load_data);
const rating = ref();
</script>
