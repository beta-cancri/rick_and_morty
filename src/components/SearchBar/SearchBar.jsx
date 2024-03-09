import { useState } from "react";
// import style from "./searchbar.css";
import {Container, Button, InputContainer} from "./styled";

export default function SearchBar({onSearch}){

   const [ id, setID ] = useState("");

   const handleChange = (e) => {
      console.log(e.target.value)
      setID(e.target.value)
   }

   const clearInput = () => {
      setID("")
   }

   return(
      <Container>
         <InputContainer>
         <input type="search" onChange={handleChange} value={id}/>
         <Button onClick={() => {onSearch(id); clearInput()}}>Agregar</Button>
         </InputContainer>         
      </Container>
   );


   
}

// const Searchbar = ({onSearch}) => {
//    const [ id, setID ] = useState("");

//    const handleChange = (e) => {
//    console.log(e.target.value)
//    setID(e.target.value)
//    }

//    const clearInput = () => {
//    setID("")
//    }

//    return(
//    <div className={style.container}>
//       <input type="search" 
//       onChange={handleChange} 
//       value={id}
//       placeholder="Search your character"
//       />
//       <Button className={style.buttonsearch} onClick={() => {onSearch(id); clearInput()}}>Agregar</Button>    
//    </div>
// );
// }

// export default Searchbar