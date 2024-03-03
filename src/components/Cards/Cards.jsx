import Card from '../Card/Card';
import style from "./cards.module.css"

export default function Cards({ characters }) {
   return (<div className={style.container}>
      {
         characters.map((ch) => {
            return <Card 
            id={ch.id}
            name={ch.name}
            status={ch.status}
            species={ch.species}
            gender={ch.gender}
            origin={ch.origin.name}
            image={ch.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
   </div>
   );
   
}
 