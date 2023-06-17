<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <v-img height="380" cover :src="article.img || default_img"> </v-img>
      <v-row class="pa-3">
        <v-col cols="12" md="9">
          <div class="d-flex align-center justify-space-between">
            <div>
              <h2 class="text-primary">
                {{ article.title || "تیتر مقاله" }}
              </h2>
              <div class="mt-2 d-flex gap-1 align-center">
                <v-icon color="primary">mdi-calendar</v-icon>
                <p>
                  {{ article.date || "یازدهم مرداد ۱۴۰۱" }}
                  -
                  {{
                    new Date(Number(article.timecreated)).getHours() +
                    ":" +
                    new Date(Number(article.timecreated)).getMinutes()
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
          <div
            class="text-justify"
            v-html="article.desc || persian_lorem"
          ></div>
          <Comments class="mt-10" table="articles" :post_id="article.id" />
        </v-col>
        <v-col cols="12" md="3">
          <h2 class="text-primary">اخبار مرتبط</h2>
          <v-spacer class="my-5"></v-spacer>
          <VerticalCard
            v-for="item in relevants"
            :data="{
              card_theme: 'primary',
              title: item.title,
              img: item.thumbnail,
              text: item.lead,
              link: { name: 'SingleArticle', params: { id: item.id } },
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
import { use_article_store } from "@/store/article";
import { useRouter } from "vue-router";

const article = ref({});
const relevants = ref([]);

const router = useRouter();
const load_data = async () => {
  let response = await use_article_store().show_article({
    id: router.currentRoute.value.params.id,
  });
  article.value = response.data[0];

  relevants.value = response.relevants;
};

load_data();
const rating = ref();
</script>
