export const GET_NEWS = 'GET_NEWS';

export const newsReducer = (store = [], action) => {
  if (action.type === GET_NEWS) {
    return ([...action.payload.data]);
  }
  return store;
};

export const actionGetNews = (payload) => {
  return (
    { type: GET_NEWS, payload }
  );
};
