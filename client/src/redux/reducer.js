import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actions-type";
import axios from "axios";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

function rootReducer(state = initialState, action ){

    switch (action.type) {
        // REDUCER | ADD_FAV
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        // REDUCER | REMOVE_FAV
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };

        case FILTER_FAV:

            const filteredGender = action.payload === "All" ?
            state.allCharacters:           
            state.allCharacters.filter( (char) => char.gender === action.payload)

            return{
                ...state,
                myFavorites: filteredGender,
            };

        case ORDER_FAV:
            const orderFavs = state.myFavorites.sort((a, b) => {
                return action.payload === "A"? a.id - b.id : b.id - a.id;
            });

            return{
                ...state,
                myFavorites: orderFavs,
            }

    
        default:
            return {...state}
    }
}

export default rootReducer

// case ADD_FAV:
        //     return{
        //         ...state,
        //         myFavorites: [...state.myFavorites, action.payload],
        //         allCharacters: [...state.allCharacters, action.payload]
        //     }


            
        // case REMOVE_FAV:
        //     const filteredFavs = state.myFavorites.filter((fav) => {
        //         fav.id !== Number(action.payload)
        //     })  
        //     return {
        //         ...state,
        //         myFavorites: filteredFavs
        //     }; 