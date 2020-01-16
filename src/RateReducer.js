const initState = {
  rates: [
    { USD: null, id: null },
    { GBP: null, id: null },
    { EUR: null, id: null }
  ]
};

export const rateReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_REQUEST_SUCCESSFUL":
      state = {
        rates: [
          { USD: data.bpi.USD.rate, id: data.bpi.USD.code },
          { GBP: data.bpi.GBP.rate, id: data.bpi.GBP.code },
          { EUR: data.bpi.EUR.rate, id: data.bpi.EUR.code }
        ]
      };
      return state;
    default:
      return state;
  }
};
