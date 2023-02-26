import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { PokemonDetails } from "../components/PokemonDetails";

export function MyRoutes2({setURL, setChangeGeneration}) {

  return(
    <Router>
      <Routes>
        <Route exac path="/" element=
          {
            <>
              <Header setURL={setURL} setChangeGeneration={setChangeGeneration} /> 
              <Menu setURL={setURL} setChangeGeneration={setChangeGeneration} />
            </>
          } >       
        </Route>            
      </Routes>
    </Router>
  );
}