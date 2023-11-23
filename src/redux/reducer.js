import { ADD_FAV, FILTER, ORDER_CARDS, REMOVE_ALL_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_ALL_FAV:
      return {
        ...state,
        myFavorites: [],
      };

    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter(
        (fav) => fav.id !== Number(action.payload)
      );
      return {
        ...state,
        allCharacters: filteredFavs,
        myFavorites: filteredFavs,
      };

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
