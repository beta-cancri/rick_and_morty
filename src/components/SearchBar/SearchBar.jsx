import { useState } from "react";
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

