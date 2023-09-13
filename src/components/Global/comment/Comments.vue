<template>
  <v-row>
    <v-col :cols="cols">
      <h2 class="text-primary">نظرات کاربران</h2>
      <v-card class="mt-5 overflow-y-auto" color="secondary-3" height="350px">
        <v-card-text class="d-flex align-center justify-center h-100">
          <v-list
            style="background-color: var(--secondary-3)"
            v-if="get_comments.length"
          >
            <v-list-item v-for="comment in get_comments">
              <div class="d-flex align-center gap-1">
                <v-avatar
                  size="50"
                  :image="comment.avatar || default_img"
                ></v-avatar>
                <h4>{{ comment.name || "کاربر" }}</h4>
              </div>
              <p class="mt-2 text-justify">{{ comment.comment }}</p>
              <div class="mt-3 ms-auto" style="width: 95%" v-if="comment.reply">
                <div class="d-flex align-center gap-1">
                  <v-avatar
                    size="50"
                    :image="comment.reply?.avatar || default_img"
                  ></v-avatar>
                  <h4>{{ comment.reply?.author?.name || "کاربر" }}</h4>
                </div>
                <p class="mt-2">{{ comment.reply?.text  }}</p>
              </div>
            </v-list-item>
          </v-list>

          <h3 v-else class="">نظری وجود ندارد</h3>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="cols">
      <h4>نظر خود را با ما در میان بگذارید</h4>
      <v-card class="mt-3 pa-3" color="secondary-3">
        <v-text-field
          variant="underlined"
          label="نام و نام خانوادگی"
          v-model="draft.username"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          label="ایمیل"
          v-model="draft.email"
        ></v-text-field>
        <v-textarea
          placeholder="نوشته خود را اینجا وارد کنید ..."
          variant="underlined"
          v-model="draft.comment"
        >
        </v-textarea>
        <v-card-actions class="d-felx justify-end">
          <v-btn
            type="submit"
            color="primary"
            variant="elevated"
            @click="create_comment(table, post_id)"
            :disabled="!draft.comment || !draft.email"
            >ارسال نظر</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { use_comment_store } from "@/store/comment";
import { storeToRefs } from "pinia";
import { onUnmounted } from "vue";

const props = defineProps({
  cols: { default: 12, type: Number },
  table: { default: "", type: String },
  post_id: { default: 0, type: Number },
});

const store = use_comment_store();
const { index_comments, create_comment, draft, reset_draft } = store;
const { get_comments } = storeToRefs(store);

const load_comments = () => {
  index_comments(props.table, props.post_id);
};

load_comments();

onUnmounted(reset_draft);
</script>
