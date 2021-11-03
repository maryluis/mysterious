export const GET_PROFILE = 'GET_PROFILE';

export const profileReducer = (store = {}, action) => {
  if (action.type === GET_PROFILE) {
    return ({ ...action.payload.data });
  }
  return store;
};

export const actionGetProfile = (payload) => {
  return (
    { type: GET_PROFILE, payload }
  );
};
