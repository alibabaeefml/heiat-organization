const base_url = "https://sazmanheyat.ir/api/";

const create_filters = (filters = null) => {
  if (filters) {
    let query = "?";

    for (let item in filters) {
      query = query + item + "=" + filters[item] + "&";
    }

    return query;
  }
  return "";
};

export const url = (table, filters = null) =>
  base_url + table + create_filters(filters);
