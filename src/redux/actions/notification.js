export const notify = (data) => async (dispatch, getState) => {
  dispatch({
    type: "notify",
    payload: data,
  });

  return data;
};
