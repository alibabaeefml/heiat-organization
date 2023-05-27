export const page_count = (items_count, items_per_page_count) => {
  if (items_count <= items_per_page_count) return 1;
  let pages_count = parseInt(items_count / items_per_page_count);
  pages_count =
    pages_count + (items_count - pages_count * items_per_page_count);
  return pages_count;
};

export default (data = {}) => ({
  page: data.page_count || 1,
  items: data.items || 12,
});
