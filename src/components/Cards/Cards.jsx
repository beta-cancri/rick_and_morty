import Card from '../Card/Card';

export default function Cards({ characters }) {
   return (<div>
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
 