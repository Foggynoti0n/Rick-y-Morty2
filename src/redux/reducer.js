import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions/type";
const initialState = {
    characters: [],
    allCharacters: [],
    myFavorites: [], 
 
  };
  
  export default function reducer(state = initialState, { type, payload }) {
    switch (type) {

      case ADD_FAV:
        return { ...state,
           myFavorites: payload,
           allCharacters: payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: payload };

      case FILTER:
        const newFilter = state.allCharacters.filter(
          (ch) => ch.gender === payload
        );
        return {
          ...state,
          myFavorites: newFilter,
        };
      case ORDER:
        const newFilterAtoZ = state.allCharacters.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        });
        return {
          ...state,
          myFavorites: newFilterAtoZ,
        };

      default:
        return state;
    }
  }