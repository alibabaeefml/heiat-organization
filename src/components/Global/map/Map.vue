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
    <p>{{ language.value.index_sec2_provinces_maptitle }}</p>
  </div>
</template>

<script setup>
import { use_news_store } from "@/store/news";
import { use_province_store } from "@/store/province";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const props = defineProps({
  province: {},
});

const { get_all_provinces } = storeToRefs(use_province_store());

const calc_circle_radient = (key) => {
  if (key < 10) {
    return 8;
  } else if (key >= 10 && key <= 50) {
    return 10;
  } else {
    return 13;
  }
};

function append_map_stats(path, statistic_data, data_code, attrs = {}) {
  let bbox = path.getBBox();
  let x = bbox.x + bbox.width / 2;
  let y = bbox.y + bbox.height / 2;
  // default attrs
  const defaultAttrs = {
    circle: {
      cx: x,
      cy: y,
      r: calc_circle_radient(statistic_data),
      id: path.id,
      "data-code": data_code,
      style: `pointerEvents: none;
        userSelect: none;
        fill: var(--primary)`,
    },
    text: {
      x: x,
      y: y,
      "data-code": data_code,
      "text-anchor": "middle",
      "alignment-baseline": "middle",
      style: `pointer-events: none;
        user-select: none;
        fill: #fff;
        font-size: 12px`,
    },
  };
  Object.assign(defaultAttrs.circle, attrs.circle);
  Object.assign(defaultAttrs.text, attrs.text);

  let background_circle = document.createElementNS(path.namespaceURI, "circle");

  for (let item in defaultAttrs.circle) {
    background_circle.setAttribute(item, defaultAttrs.circle[item]);
  }

  // append circle after svg path
  $("#iran_map #19").after(background_circle);

  // Create a <text> element
  let data_number = document.createElementNS(path.namespaceURI, "text");

  data_number.textContent = statistic_data;
  // Add this text element directly after the label background path

  for (let item in defaultAttrs.text) {
    data_number.setAttribute(item, defaultAttrs.text[item]);
  }

  background_circle.after(data_number);

  if (selected.value.id == path.id) {
    select_province(path.id);
  }
}

onMounted(async () => {
  await use_news_store().index_provinces_news();
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
  });

  $("[data-code]").each(async (i, e) => {
    let province_name = e.getAttribute("data-code");
    get_all_provinces.value.map((v) => {
      if (v.name_en == province_name) {
        document.querySelector(`[data-code='${province_name}']`).id = v.id;
      }
    });
    let custom_attr = {};
    if (province_name == "ir_west_azerbaijan") {
      custom_attr = {
        circle: {
          cx: 20,
        },
        text: {
          x: 20,
        },
      };
    }
    if (province_name == "ir_tehran") {
      custom_attr = {
        circle: {
          cx: 210,
        },
        text: {
          x: 210,
        },
      };
    }
    const news = await use_news_store().index_provinces_news({
      provinceid: e.id,
    });

    append_map_stats(
      document.querySelector(`[data-code='${province_name}']`),
      news.length,
      province_name,
      custom_attr
    );
  });

  $("#iran_map path").click((e) => {
    select_province(e.currentTarget.id);
  });
});

const emit = defineEmits(["select_province"]);

const select_province = (id) => {
  $("path[data-code], circle").removeClass("active");
  $(`path#${id}, circle[id=${id}]`).addClass("active");
  emit("select_province", id);
};

const selected = computed(() => props.province);

watch(selected, () => select_province(selected.value.id));
</script>

<style scoped></style>
