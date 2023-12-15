import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
};
export const notifyReducer = createReducer(initialState, {
  notify: (state, action) => {
    const { type, message } = action.payload;
    state.type = type;
    state.message = message;
    return state;
  },
});
