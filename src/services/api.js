const base_url = "https://sazmanheyat.ir/api/";

const create_filters = (filters = {}) => {
  let query = "?";

  for (let item in filters) {
    query = query + item + "=" + filters[item] + "&";
  }

  return query;
};

export const url = (table, filters = {}) =>
  base_url + table + create_filters(filters);
