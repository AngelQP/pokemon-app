import * as React from 'react';
import './App.css';
// import {Cards} from './components/Cards/Cards'
import { URLGENERATION } from './utils/URL';
import {MyRoutes} from './routers/routes'
import {MyRoutes2} from './routers/routes2'
// import Menu from './components/Menu';
// import Header from "./components/Header";



function App() {

  // Para obtener la lista de Pokemones que  
  const [listPokemon, setListPokemon] = React.useState({cargando: true, data: null});
  
  // Carga inicial de la lista de Pokemones
  const [url, setURL] = React.useState(`${URLGENERATION}${1}`);

  // Carga de de generaciones
  const [changeGeneration, setChangeGeneration] = React.useState(false);

  // Aqui se hace la lista de pokemons de una sola generación
  const fetchListPokemon = async function(url) {

    setListPokemon({cargando:true, data: null});

    const response = await fetch(url);
    const data = await response.json();

    const regex = /\d+/gm;
    const datos = data.pokemon_species.reduce((acumulador,numero) => {
      const ar = numero.url.match(regex);
      return [...acumulador, {...numero, position: ar[1]}];        
    },[]);
    datos.sort((a,b) => a.position - b.position);
    setListPokemon({cargando:false, data: datos})
    console.log(datos);
  }
  
  
  
  React.useEffect(() => {
    console.log(url);
    
    fetchListPokemon(url);
    
    setChangeGeneration(false);

  }, [url, changeGeneration]);

 
  return (
    <React.StrictMode>

    <div className="App">

      <MyRoutes2 setURL={setURL} setChangeGeneration={setChangeGeneration} />

      {
        listPokemon.cargando
        ?
        ""
        :
        <MyRoutes results={listPokemon.data} setURL={setURL}/>
        // <ContainerCards results={listPokemon.data} />

      }

      {/* {
        setListPokemon.cargando
        ?
        <h1>Cargando ...</h1>
        :
        <Cards results={setListPokemon.results} />
      } */}
    </div>
    </React.StrictMode>
  );

}

export default App;
