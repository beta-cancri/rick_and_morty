import style from "./card.module.css"
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id){
            setIsFav(true)
         }
      });
   }, [myFavorites]);

   const handleFavorite = () =>{
       isFav ? removeFav(id) 
      : addFav({id, name, status, species, gender, origin, image});
      setIsFav(!isFav);
   };



   const navigate = useNavigate()
   return (
      <div className={style.container}>
         {isFav ? (
            <button className={style.follow} onClick={handleFavorite}>❤️</button>) 
            : (<button className={style.unfollow} onClick={handleFavorite}>🤍</button>)
         }

         <div className={style.buttonContainer}>
         <button className={style.btn} onClick={() => onClose(id)}></button>
         </div>

         <div className={style.imgContainer}>
         <img src={image} alt='' />
         <h2 className={style.name} onClick={() => navigate(`/detail/${id}`)}>{name}</h2>
         </div>
         
         <div className={style.descriptionContainer}>
            <h2>Status: <span>{status}</span></h2>
            <h2>Species: <span>{species}</span></h2>
            <h2>Gender: <span>{gender}</span></h2>
            <h2>Origin: <span>{origin}</span></h2>   
            </div>
         

         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);