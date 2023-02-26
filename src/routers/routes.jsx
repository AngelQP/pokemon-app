import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerCards from "../components/ContainerCards";
import { PokemonDetails } from "../components/PokemonDetails";
// import Header from "../components/Header";
// import Menu from "../components/Menu";

export function MyRoutes({results}) {

  return(
    <Router>
      <Routes>
        <Route exac path="/" element= {<ContainerCards results={results} />} ></Route>          
        <Route exac path="/pokemon/:pokemonId" element= {<PokemonDetails />} >
        </Route>
      </Routes>
    </Router>
  );
}