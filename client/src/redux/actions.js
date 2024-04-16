import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV} from "./actions-type.js";


import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

// const addFav = (character) => {
//     return{
//         type: ADD_FAV,
//         payload: character
//     }
// }



// const removeFav = (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

const filterFavs = (gender) =>{
    return{
        type: FILTER_FAV,
        payload: gender,
    }
}

const orderFavs = (order) =>{
    return{
        type:ORDER_FAV,
        payload: order
    }
}

export {addFav, removeFav, filterFavs, orderFavs}