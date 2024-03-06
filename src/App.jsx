import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import  About from './components/About/About.jsx';
import Detail from  './components/Detail/Detail.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios, { formToJSON } from 'axios';

function App() {

   const [characters, setCharacters] = useState([])

   const onClose = (id) => {

      let filterCharacters = characters.filter((ch) => {return ch.id !== id})

      setCharacters(filterCharacters)
   }

   function onSearch(id) {
      axios.get(`https://rym2.up.railway.app/api/character/${id}?key={pi-beta-cancri}`).then(
         // data cna be change for anything and then replace in data.name for xxx.data.name and data for xxx.data
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   // this is in order to force it because we had no axios
   // const onSearch = () => {

   //    const example = {
   //       id: 1,
   //       name: 'Rick Sanchez',
   //       status: 'Alive',
   //       species: 'Human',
   //       gender: 'Male',
   //       origin: {
   //          name: 'Earth (C-137)',
   //          url: 'https://rickandmortyapi.com/api/location/1'
   //       },
   //       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   //    };

   //    // the ...characters is in order to duplicate the previous card
   //    setCharacters ([...characters, example])
   // }

   

   return (
      <div className="App">
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         {/* <Nav onSearch={onSearch}/> */}
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
         {/* // <Cards characters={characters} onClose={onClose}/> */}
      </div>
   );
}

export default App;
