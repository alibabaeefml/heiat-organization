4
<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-bottom: 5rem;
        position: relative;
        z-index: 11;
      "
    >
      <v-row class="px-16">
        <v-col cols="12" md="6">
          <v-form action="">
            <span class="d-sm-flex gap-1">
              <v-text-field label="نام" bg-color="secondary-3"> </v-text-field>
              <v-text-field
                label="نام خانوادگی"
                bg-color="secondary-3"
                :rules="[(v) => (v ? true : 'این فیلد الزامی است')]"
              >
              </v-text-field>
            </span>
            <span class="d-sm-flex gap-1">
              <v-text-field
                label="شماره تماس"
                bg-color="secondary-3"
                :rules="[
                  (v) =>
                    v
                      ? (v[0] == 0 && v[1] == 9 && v.length == 11) ||
                        'باید شماره همراه یازده رقمی باشد'
                      : true,
                ]"
                maxlength="11"
                hint="فرمت صحیح: 09000000000"
                required
              >
              </v-text-field>
              <v-text-field
                label="ایمیل"
                bg-color="secondary-3"
                :rules="[
                  (v) => (v ? true : 'این فیلد الزامی است'),
                  (v) =>
                    (v.includes('@') && v.includes('.com')) ||
                    'باید ایمیل باشد',
                ]"
                hint="فرمت صحیح: example@gmail.com"
              >
              </v-text-field>
            </span>
            <v-text-field label="موضوع" bg-color="secondary-3"> </v-text-field>
            <v-textarea
              label="متن پیام"
              placeholder="پیام خود را اینجا وارد کنید..."
              bg-color="secondary-3"
              :rules="[(v) => (v ? true : 'این فیلد الزامی است')]"
            >
            </v-textarea>

            <div class="mt-5 d-flex justify-end">
              <v-btn color="primary" type="submit"> ارسال نظر </v-btn>
            </div>
          </v-form>
          <div
            class="mt-5 pa-3 bg-secondary-3 rounded-lg text-primary font-bold"
          >
            <p>{{ language.value.contactus_address || "آدرس: لورم ایپسوم" }}</p>
            <p class="mt-5">
              {{ language.value.contactus_phones || "شماره تماس: لورم ایپسوم" }}
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            class="rounded-xl w-100 h-100"
            cover
            
            :src="get_settings?.aboutus_map_img"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { use_settings_store } from "@/store/settings";
import { storeToRefs } from "pinia";

const { get_settings } = storeToRefs(use_settings_store());
</script>

<style scoped></style>
