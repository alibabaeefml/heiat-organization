const base_url = "https://sazmanheyat.ir/api/get_table/";

const create_filters = (filters) => {
    let query = '';
    return query;
}

export const url = (url, filters) => base_url + url + create_filters(filters);
