import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_comment_store = defineStore("comment", () => {
  const comments = ref([]);
  const draft = ref({});
  const get_comments = computed(() => comments.value);

  const index_comments = async (table, post_id) => {
    const response = await axios.get(url(`comments/${table}/${post_id}`));
    if ([200, 201].includes(response.status)) {
      comments.value = response.data.comments;
    }
  };

  const create_comment = async (table, post_id) => {
    const response = await axios.post(
      url(`add_comment/${table}/${post_id}`),
      draft.value
    );
    if ([200, 201].includes(response.status)) {
      await index_comments(table, post_id);
      reset_draft();
    }
  };

  const reset_draft = () => (draft.value = {});

  return {
    get_comments,
    draft,
    index_comments,
    create_comment,
    reset_draft,
  };
});
