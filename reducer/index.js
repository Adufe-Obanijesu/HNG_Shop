// reducer.js
export const initialState = {
  cart: [],
};

export function reducer(state, action) {
  let updatedCart;
  switch (action.type) {
    case 'INITIALIZE_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'ADD_TO_CART':
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        updatedCart = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
      }
      localStorage.setItem('hng_arries_cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case 'REMOVE_FROM_CART':
      updatedCart = state.cart
        .map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0);
      localStorage.setItem('hng_arries_cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case 'DELETE':
      updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      localStorage.setItem('hng_arries_cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case 'CLEAR':
      localStorage.removeItem('hng_arries_cart');
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
