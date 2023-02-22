export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUser = state => state.auth.user;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.token;

export const selectFavoriteNotices = state => state.auth.user.favoriteNotices;
