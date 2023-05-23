import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const use_province_store = defineStore("province", () => {
  const all_provinces = ref([
    {
      name_en: "ir_west_azerbaijan",
      name_fa: "آذربایجان غربی",
      id: 11,
    },
    {
      name_en: "ir_ardebil",
      name_fa: "اردبیل",
      id: 12,
    },
    {
      name_en: "ir_east_azerbaijan",
      name_fa: "آذربایجان شرقی",
      id: 10,
    },
    {
      name_en: "ir_hamedan",
      name_fa: "همدان",
      id: 39,
    },
    {
      name_en: "ir_zanjan",
      name_fa: "زنجان",
      id: 23,
    },
    {
      name_en: "ir_kurdistan",
      name_fa: "کردستان",
      id: 29,
    },
    {
      name_en: "ir_mazandaran",
      name_fa: "مازندران",
      id: 36,
    },
    {
      name_en: "ir_qazvin",
      name_fa: "قزوین",
      id: 27,
    },
    {
      name_en: "ir_gilan",
      name_fa: "گیلان",
      id: 34,
    },
    {
      name_en: "ir_ilam",
      name_fa: "ایلام",
      id: 15,
    },
    {
      name_en: "ir_lorestan",
      name_fa: "لرستان",
      id: 35,
    },
    {
      name_en: "ir_kermanshah",
      name_fa: "کرمانشاه",
      id: 31,
    },
    {
      name_en: "ir_qom",
      name_fa: "قم",
      id: 28,
    },
    {
      name_en: "ir_markazi",
      name_fa: "مرکزی",
      id: 37,
    },
    {
      name_en: "ir_alborz",
      name_fa: "البرز",
      id: 14,
    },
    {
      name_en: "ir_tehran",
      name_fa: "تهران",
      id: 17,
    },
    {
      name_en: "ir_chahar_mahal",
      name_fa: "چهارمحال بختیاری",
      id: 18,
    },
    {
      name_en: "ir_bushehr",
      name_fa: "بوشهر",
      id: 16,
    },
    {
      name_en: "ir_khuzestan",
      name_fa: "خوزستان",
      id: 22,
    },
    {
      name_en: "ir_kohgiloyeh",
      name_fa: "کهگیلویه و بویراحمد",
      id: 32,
    },
    {
      name_en: "ir_yazd",
      name_fa: "یزد",
      id: 40,
    },
    {
      name_en: "ir_fars",
      name_fa: "فارس",
      id: 26,
    },
    {
      name_en: "ir_isfahan",
      name_fa: "اصفهان",
      id: 13,
    },
    {
      name_en: "ir_khorasan_razavi",
      name_fa: "خراسان رضوی",
      id: 20,
    },
    {
      name_en: "ir_golestan",
      name_fa: "گلستان",
      id: 33,
    },
    {
      name_en: "ir_semnan",
      name_fa: "سمنان",
      id: 24,
    },
    {
      name_en: "ir_north_khorasan",
      name_fa: "خراسان شمالی",
      id: 21,
    },
    {
      name_en: "ir_sistan",
      name_fa: "سیستان و بلوچستان",
      id: 25,
    },
    {
      name_en: "ir_kerman",
      name_fa: "کرمان",
      id: 30,
    },
    {
      name_en: "ir_hormozgan",
      name_fa: "هرمزگان",
      id: 38,
    },
    {
      name_en: "ir_south_khorasan",
      name_fa: "خراسان جنوبی",
      id: 19,
    },
  ]);
  const get_all_provinces = computed(() => all_provinces.value);

  return {
    get_all_provinces,
  };
});
