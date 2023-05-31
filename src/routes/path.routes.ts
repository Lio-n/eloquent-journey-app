const PrivatePaths = {
  DASHBOARD: "/dashboard",
  ARTICLE_LIST: `/article/list`,
  ARTICLE_CREATE: `/article/create`,
  ARTICLE_EDIT: (article_id: number) => `article/${article_id}/edit`,
  PROFILE: `/profile`,
};

const PublicPaths = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  ARTICLE: (article_id: number) => `/article/${article_id}`,
};

export { PublicPaths, PrivatePaths };
