import * as React from 'react';
import styled from 'styled-components';
import { UseFetch } from '../../utils/UseFetch'
import Pokebola from '../../assets/img/pokebola.svg';
import {Link} from "react-router-dom";

const Card = ({className,url}) => {

  const firstLetterUpper = (word) =>  (word[0].toUpperCase() + word.substring(1))
  
  const estado = UseFetch(url);
  const {cargando, data} = estado;
  // console.log(data.sprites.other.home.front_default);
  // <img src={data.sprites.other.dream_world.front_default ?? data.sprites.other.home.front_default} alt={`Pokemon ${data.name}}

  return(
      <div>
      {
        cargando
        ?
        <div className={className}>
          <img className='img-pokebola' src={Pokebola} alt="Pokebola"></img>
        </div>
        :
        <div className={`${className} ${data.types[0].type.name ?? 'normal'} borde`}>
          <h3>{data.id}.- {firstLetterUpper(data.name)}</h3>
          <Link to={"/pokemon/" + data.id}>
            <img className={`img-pokemon ${data.sprites.other.home.front_default ?? "pokebola"}`} src={`${data.sprites.other.home.front_default ?? Pokebola}`} alt={`Pokemon ${data.name}}`}></img>
          </Link>
        </div>
      }
    </div>
  )
}

export default styled(Card)`
  min-width: 150px;
  height: 200px;
  width: 160px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 0.9rem;
  }

  .img-pokemon {
    width: 160px;
    height: 150px;
    object-fit: contain;
  }
  .img-pokebola {
    width: 80px;
    height: 110px;
  }
  .pokebola {
    width: 80px;
    height: 80px;
    margin-top: 50px;
    object-fit: cover;
  }

`;