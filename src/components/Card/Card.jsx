import style from "./card.module.css"

export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>

         <div className={style.buttonContainer}>
         <button className={style.btn} onClick={onClose}>X</button>
         </div>

         <div className={style.imgContainer}>
         <img src={image} alt='' />
         <h2 className={style.name}>{name}</h2>
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
