export const initialState = {
  basket: [],
  user: undefined,
  length: 0,
  pageIndex: 1,
};
export const getBasketTotal = (basket) => {
  return basket.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
};
export const getArrayLength = (length) => {
  return length;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "SET_BASKET":
      return { ...state, basket: [...action.basket] };
      break;
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        return {
          ...state,
          basket: newBasket,
        };
      }
      break;
    case "REMOVE_MULTIPLE_FROM_BASKET":
      let newBasket1 = [...state.basket];
      while (newBasket1.findIndex((item) => item.id === action.id) != -1) {
        const index = newBasket1.findIndex((item) => item.id === action.id);
        newBasket1.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket1,
      };
      break;
    case "SET_USER":
      return { ...state, user: action.user };
      break;
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
      break;
    case "SET_LENGTH":
      return { ...state, length: action.length };
      break;
    case "SET_PAGE_INDEX":
      return { ...state, pageIndex: action.pageIndex };
      break;
    default:
      return state;
  }
};
export default reducer;
