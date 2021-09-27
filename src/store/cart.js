const initialState = [];

export default function reducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case 'AddItemsCart':
      if (payload.basketCount !== 0) {
        return [...state, payload];
      } else { return state }
    default: return state;
  }
};

export function addItemsToCart(product) {
  return {
    type: 'AddItemsCart',
    payload: product
  }
};