<template>
  <div class="position-relative bg-secondary-3" style="min-height: 1200px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 1rem;
        position: relative;
        z-index: 11;
      "
    >
      <div
        class="d-flex flex-sm-row flex-column align-center justify-space-between"
      >
        <TextGroup
          title="اخبار برگزیده مجامع میان تخصصی"
          title_class="text-secondary-4"
          no_desc="true"
        />

        <div
          class="d-flex flex-sm-row flex-column align-center gap-1"
          :style="{ width: useDisplay().xs.value ? '100%' : 'auto' }"
        >
          <div class="d-flex align-center justify-space-between w-100 gap-1">
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
      <PrimaryNewsSwiper class="mt-5" />
    </div>
    <v-spacer class="py-10"></v-spacer>
    <!-- lower mask -->
    <div
      class="w-100 position-absolute d-flex align-center justify-end"
      style="bottom: 0"
    >
      <v-img
        cover
        src="@/assets/images/white_mask.png"
        style="object-fit: cover"
      ></v-img>
    </div>
  </div>
  <div class="position-relative" style="min-height: 1200px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-inline: 1rem; position: relative; z-index: 11">
      <CulturalCentersOrganization />
      <InterprofessionalOrganizationCategoryItem
        class="my-10"
        v-for="item in 4"
      />
    </div>
  </div>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import PrimaryNewsSwiper from "@/components/InterprofessionalOrganizationsCategorizedNews/PrimaryNewsSwiper.vue";
import CulturalCentersOrganization from "@/components/InterprofessionalOrganizationsCategorizedNews/CulturalCentersOrganization.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import InterprofessionalOrganizationCategoryItem from "@/components/InterprofessionalOrganizationsCategorizedNews/InterprofessionalOrganizationCategoryItem.vue";
const data = ref({});
</script>
