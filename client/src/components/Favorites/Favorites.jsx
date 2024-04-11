import React, { useState } from "react";
import style from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import { filterFavs, orderFavs } from "../../redux/actions";

const Favorites = ({myFavorites}) =>{

    const dispatch = useDispatch()

    const optionGender = ["Male", "Female", "Genderless", "unknown", "All"]

    const [ aux, setAux] =useState(false)

    const handleOrder = (e) =>{
        dispatch(orderFavs(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) =>{
        dispatch(filterFavs(e.target.value))
    }

    return(
        
        <div className={style.container}>
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
        {
            optionGender.map((op) => <option key={op} value={op}>
                {op}
            </option>)
        }
            </select>
        </div>
        <div><Cards characters={myFavorites}/></div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites);