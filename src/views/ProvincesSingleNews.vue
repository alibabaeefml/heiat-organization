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
              <h2 class="text-primary">{{ news.title || 'تیتر خبر' }}</h2>
              <div class="mt-2 d-flex gap-1 align-center">
                <v-icon color="primary">mdi-calendar</v-icon>
                <p>{{ news.date || 'یازدهم مرداد ۱۴۰۱ - ۱۳:۲۳' }}</p>
              </div>
            </div>
            <div dir="ltr">
              <div class="d-flex align-center gap-1" >
               <Actions/>
              </div>
              <v-rating color="yellow" density="compact" v-model="rating" hover ></v-rating>
            </div>
          </div>
          <p class="text-justify">{{ news.text || persian_lorem  }}</p>
          
          <Comments class="mt-10"/>
        </v-col>
        <v-col cols="12" md="3">
            <h2 class="text-primary">اخبار مرتبط</h2>
            <v-spacer class="my-5"></v-spacer>
            <VerticalCard v-for="item in 3" :data="{card_theme:'primary'}"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Comments from "@/components/Global/comment/Comments.vue"
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import Actions from "@/components/Global/button_group/Actions.vue";
const news = ref({});


const rating = ref()
</script>
