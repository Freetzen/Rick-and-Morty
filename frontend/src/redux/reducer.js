import { ADD_FAV, FILTER, ORDER_CARDS, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      const filterGender = state.allCharacters.filter(
        ele => ele.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER_CARDS:
      const orderCopy = [...state.myFavorites];
      if (action.payload === "A") {
        orderCopy.sort((a, b) => a.id - b.id);
      }
      if (action.payload === "D") {
        orderCopy.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderCopy,
      };
      
    default:
      return { ...state };
  }
};
export default reducer;
