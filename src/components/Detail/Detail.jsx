import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from './detail.module.css'
import axios from "axios"


const Detail = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(`https://rym2.up.railway.app/api/character/${id}?key={pi-beta-cancri}`).then(
         // data cna be change for anything and then replace in data.name for xxx.data.name and data for xxx.data
         ({ data }) => {
            if (data.name) {
               setCharacter(() => data);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
    }, [id])


    return !character ? <div>Loading...</div> :(
        <div className={style.container}>

         <div className={style.buttonContainer}>
         {/* <button className={style.btn} onClick={() => onClose(id)}>X</button> */}
         </div>

         <div className={style.imgContainer}>
         <img src={character.image} alt='' />
         <h2 className={style.name}>{character.name}</h2>
         </div>
         
         <div className={style.descriptionContainer}>
            <h2>Status: <span>{character.status}</span></h2>
            <h2>Species: <span>{character.species}</span></h2>
            <h2>Gender: <span>{character.gender}</span></h2>
            <h2>Origin: <span>{character.origin.name}</span></h2>   
            </div>
         

         
      </div>
    )

}

export default Detail