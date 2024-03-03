import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
const onClose = () => window.alert("Emulamos que se cierra la card");

   return (
      <div className="App">
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
