// reducer.js
export const initialState = {
    cart: [],
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cart.find(item => item.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, qty: 1 }],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart
            .map(item =>
              item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            )
            .filter(item => item.qty > 0),
        };
      case "DELETE":
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
        }
      case "CLEAR":
        return {
            ...state,
            cart: [],
        }
      default:
        return state;
    }
  }
  