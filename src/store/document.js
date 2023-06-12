import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";

export const use_document_store = defineStore("document", () => {
  const index_documents = async () => {
    const response = await axios.get(url("codocuments"));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  return {
    index_documents
  };
});
