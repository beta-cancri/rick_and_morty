import {Container, Button, InputContainer} from "./styled";

export default function SearchBar({onSearch}){
   return(
      <Container>
         <InputContainer>
         <input type="search" />
         <Button onClick={onSearch}>Agregar</Button>
         </InputContainer>         
      </Container>
   );
}

