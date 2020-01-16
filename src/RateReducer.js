const initState = {
  data: []
};

export const rateReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_REQUEST_SUCCESSFUL":
      console.log('Fresh data rec\'d from Coinbase', action.payload);
      return Object.assign({}, state, {
        data: action.payload
      });
      return state;
    default:
      return state;
  }
};