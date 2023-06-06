<template>
  <div class="position-relative mb-3">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <v-row>
        <v-col cols="12" md="9">
          <div class="d-flex align-center gap-1">
            <div class="d-flex flex-column justify-space-between align-center">
              <div class="d-flex flex-column align-center">
                <Actions />
              </div>
              <v-rating
                color="yellow"
                density="compact"
                v-model="rating"
                hover
                class="d-flex flex-column"
              ></v-rating>
            </div>
            <v-img :src="news.img || default_img" height="380" cover></v-img>
          </div>
          <h2 class="mt-5">{{ news.title || "تیتر خبر سازمان" }}</h2>
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center gap-1 mt-5">
              <v-avatar size="30" :image="news.author?.img || default_img">
              </v-avatar>
              <h4>{{ news.author?.name || "نام نویسنده" }}</h4>
            </div>
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
          <v-divider
            :thickness="3"
            color="primary"
            class="my-3 border-opacity-100"
          ></v-divider>
          <div class="text-justify" v-html="news.desc || persian_lorem"></div>
          <v-divider
            :thickness="3"
            color="primary"
            class="my-3 border-opacity-100"
          ></v-divider>
          <Comments />
        </v-col>

        <v-col cols="12" md="3">
          <div class="d-flex flex-column gap-1 align-center">
            <h2 class="text-primary">اخبار مرتبط به</h2>
            <v-img
              width="100%"
              height="300"
              :src="organization.img || default_img"
            ></v-img>
            <h2 class="text-primary text-center">
              {{ organization.title || "عنوان سازمان" }}
            </h2>
          </div>

          <div class="d-flex flex-column gap-1 mt-5">
            <VerticalCard
              :data="{
                title: item.title,
                img: item.thumbnail,
                text: item.lead,
                link: { name: 'OrganizationSingleNews', id: item.id },
              }"
              v-for="item in relative_news"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import Comments from "@/components/Global/comment/Comments.vue";
import Actions from "@/components/Global/button_group/Actions.vue";
import { ref } from "vue";
import { use_news_store } from "@/store/news";
import { use_organization_store } from "@/store/organization";
import { useRouter } from "vue-router";

const news = ref({});
const relative_news = ref([]);
const organization = ref({});
const rating = ref();

const router = useRouter();

const load_data = async () => {
  const { id } = router.currentRoute.value.params;
  news.value = await use_news_store().show_organizations_news({ id });

  relative_news.value = await use_news_store().index_organizations_news({
    organization_id: news.value.organization_id,
  });

  organization.value = await use_organization_store().show_organization({
    id: news.value.organization_id,
  });
};

load_data();
</script>
