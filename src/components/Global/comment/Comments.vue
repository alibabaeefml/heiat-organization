<template>
  <div>
    <h2 class="text-primary">{{ data?.title || "نظرات کاربران" }}</h2>
    <v-card class="mt-5 overflow-y-auto" color="secondary-3" height="350px">
      <v-card-text>
        <v-list style="background-color: var(--secondary-3)">
          <v-list-item v-for="comment in 1">
            <div class="d-flex align-center gap-1">
              <v-avatar
                size="50"
                :image="comment.avatar || default_img"
              ></v-avatar>
              <h4>{{ comment.author?.name || "نام کاربری" }}</h4>
            </div>
            <p class="mt-2">{{ comment.text || persian_lorem }}</p>
            <div class="mt-3 ms-auto" style="width: 95%">
              <div class="d-flex align-center gap-1">
                <v-avatar
                  size="50"
                  :image="comment.reply?.avatar || default_img"
                ></v-avatar>
                <h4>{{ comment.reply?.author?.name || "نام کاربری" }}</h4>
              </div>
              <p class="mt-2">{{ comment.reply?.text || persian_lorem }}</p>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-spacer class="my-5"></v-spacer>
    <h4>نظر خود را با ما در میان بگذارید</h4>
    <v-card class="mt-3 pa-3" color="secondary-3">
      <v-form>
        <v-text-field
          variant="underlined"
          name="username"
          label="نام و نام خانوادگی"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          name="phone"
          label="شماره همراه"
        ></v-text-field>
        <v-textarea
          placeholder="نوشته خود را اینجا وارد کنید ..."
          variant="underlined"
          name="comment"
        >
        </v-textarea>
        <v-card-actions class="d-felx justify-end">
          <v-btn type="submit" color="primary" variant="elevated"
            >ارسال نظر</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script setup>
const props = defineProps(["data"]);
</script>
