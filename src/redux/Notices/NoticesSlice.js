import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllNotices, removeNotice } from './NoticesOperations';

const initialState = {
  notices: [],
  oneNotice: {},
  isLoading: false,
  error: null,
};

const extraActions = [fetchAllNotices, /* addNotice,*/ removeNotice];
const getActions = type => extraActions.map(action => action[type]);

// Case reducers
const fetchNoticesSuccessReducer = (state, { payload }) => {
  state.notices = payload;
};
/*
const addContactSuccessReducer = (state, { payload }) => {
  state.notices.push(payload);
};*/
const removeNoticeSuccessReducer = (state, { payload }) => {
  const index = state.notices.findIndex(notice => notice.id === payload.id);
  state.notices.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const fulfilledreducer = state => {
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
      //   .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(removeNotice.fulfilled, removeNoticeSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledreducer),
});

// Редюсер слайса
const noticesReducer = noticesSlice.reducer;
export default noticesReducer;
