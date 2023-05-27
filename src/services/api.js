const base_url = "https://sazmanheyat.ir/api/";

const create_filters = (filters = {}) => {
  let query = "";
  for (let item in filters) {
    query = "/" + filters[item] + "/" + item;
  }

  return query;
};

export const url = (url, filters = {}, paginate = "") =>
  base_url + url + create_filters(filters) + paginate;
