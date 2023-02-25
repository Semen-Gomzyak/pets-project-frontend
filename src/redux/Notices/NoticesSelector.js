import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.notices;
export const selectOneNotice = state => state.notices.oneNotice;
export const selectNoticesIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
// export const selectNoticesOwner = state => state.notices.owner;
export const selectFilter = state => state.filter;

export const selectFilterNotices = createSelector(
  [selectNotices, selectFilter],
  (notices, filter) => {
    return notices.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
