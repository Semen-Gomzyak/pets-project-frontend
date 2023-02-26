import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllNotices,
  removeNotice,
  addNotice,
  fetchOneNotice,
  getAllNotices,
} from './NoticesOperations';

const initialState = {
  notices: [],
  oneNotice: {},
  isLoading: false,
  error: null,
  ownerNotices: [],
};

const extraActions = [
  fetchAllNotices,
  addNotice,
  removeNotice,
  fetchOneNotice,
  getAllNotices,
];
const getActions = type => extraActions.map(action => action[type]);

// Case reducers
const fetchNoticesSuccessReducer = (state, { payload }) => {
  state.notices = payload.notices;
  state.total = payload.total;
};
const fetchOneNoticeSuccessReducer = (state, { payload }) => {
  state.oneNotice = payload;
};
const addNoticeSuccessReducer = (state, { payload }) => {
  state.notices = payload;
};

const removeNoticeSuccessReducer = (state, { payload }) => {
  const index = state.notices.findIndex(notice => notice._id === payload._id);
  state.notices.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  // Добавляем обработку внешних экшенов
  extraReducers: builder =>
    builder
      .addCase(fetchAllNotices.fulfilled, fetchNoticesSuccessReducer)
      .addCase(addNotice.fulfilled, addNoticeSuccessReducer)
      .addCase(removeNotice.fulfilled, removeNoticeSuccessReducer)
      .addCase(fetchOneNotice.fulfilled, fetchOneNoticeSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
  reducers: {
    clearNotices(state, { payload }) {
      state.notices = payload;
    },
    changeFavoritesNotices(state, { payload }) {
      state.notices = state.notices.filter(notice => notice._id !== payload);
    },
    // getAllNoticesForOwner(state, { payload }) {
    // console.log('getOwnerNotice state', state.notices);
    // console.log('getOwnerNotice payload', payload.userId);
    // state.notices = state.notices.filter(
    //   notice => notice.owner._id === payload.userId
    // );
    // },
  },
});

// Редюсер слайса
const noticesReducer = noticesSlice.reducer;
export default noticesReducer;
export const { clearNotices, changeFavoritesNotices } = noticesSlice.actions;
