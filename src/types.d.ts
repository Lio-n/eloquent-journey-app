// declare global {
/* Pagination Data */
type Pagination = {
  offset: number;
  limit: number;
  total: number;
};

type QueryResponse<T> = {
  hits: T[] | [];
  pagination: Pagination;
};

type QueryOptions = {
  order?: "asc" | "desc";
  limit?: number;
  offset?: number;
};
