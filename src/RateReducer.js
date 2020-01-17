const initState = {
  response: 'no data received yet'
};

export const rateReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_REQUEST_SUCCESSFUL":

      console.log('Fresh data rec\'d from Coinbase', action.payload.data);
      return Object.assign({}, state, {
        response: action.payload.data
      });
    default:
      return state;
  }
};