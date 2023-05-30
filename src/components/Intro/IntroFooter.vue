<template>
  <v-footer
    color="primary"
    class="d-flex flex-sm-row flex-column align-center justify-space-between"
  >
    <ul class="d-flex justify-center align-center flex-wrap">
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Provinces' }"
          >استان ها</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'InterprofessionalOrganizationsCategorizedNews' }"
          >مجامع میان تخصصی</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          >رویدادها</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          >خدمات الکترونیک</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'CategorizedNews' }"
          >اخبار</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'AboutUs' }"
          >معرفی سازمان</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'MultiMedia' }"
          >چندرسانه ای</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'ContactUs' }"
          >تماس با ما</v-btn
        >
      </li>
    </ul>
    <p style="color: #aaca54">
      پايگاه اطلاع‌رسانی سازمان هیأت و تشکل های دینی کشور
    </p>
  </v-footer>
</template>
<script setup></script>