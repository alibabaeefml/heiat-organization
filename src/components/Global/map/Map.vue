<template>
  <div class="d-flex flex-column align-center">
    <div
      id="iran_map"
      class="mx-auto"
      :style="{
        width: useDisplay().smAndUp.value ? '500px' : '100%',
        height: '500px',
      }"
    ></div>
    <p>* استان مد نظر خود را انتخاب کنید</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

onMounted(() => {
  const jvm_map = $("#iran_map");
  jvm_map.vectorMap({
    map: "ir_mill",
    enableZoom: false,
    backgroundColor: "transparent",
    zoomOnScroll: false,
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: true,
    regionStyle: {
      initial: {
        fill: "var(--secondary)",
        "fill-opacity": 1,
        stroke: "#fff",
        "stroke-width": 2,
        "stroke-opacity": 1,
      },
      hover: {
        fill: "var(--primary)",
      },
    },
    onRegionClick: function (event, code) {
      $("path[data-code]").removeClass("active")
      $(`path[data-code=${code}]`).addClass("active");
    },
  });
});
</script>

<style scoped></style>
