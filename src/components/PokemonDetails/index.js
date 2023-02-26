import * as React from 'react';
import { useParams } from 'react-router-dom';
import { URLLISTPOKEMON } from '../../utils/URL'
import { UseFetch } from '../../utils/UseFetch';
import './ContainerDetail.css'
import { Detail } from './Detail';

export const PokemonDetails = () => {

  const {pokemonId} = useParams();

  const estado = UseFetch(`${URLLISTPOKEMON}${pokemonId}`);
  const {cargando, data} = estado;

  if(cargando) {
    return(<div className='container-detail'> </div>);
  }
  else {
    return(<Detail data={data} />)
  }

}
