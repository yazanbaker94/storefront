const initialState = [];

export default function reducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case 'AddItemsCart':
      if (payload.inStock !== 0) {
        return [...state, payload];
      } else { return state }
    default: return state;
  }
};