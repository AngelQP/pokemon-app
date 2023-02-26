import * as React from 'react';
import styled from 'styled-components';
import BoxGeneration from './BoxGeneration';
import {UseFetch} from '../../utils/UseFetch'
import {URLGENERATION} from '../../utils/URL'

const Menu = ({className, setURL, setChangeGeneration}) => {
  const estado = UseFetch(URLGENERATION);
  const {cargando, data} = estado;
  // cargando ? console.log("cargando") : console.log(data.results);
  return(
    <div className={className}>
      {
        cargando ?
        <h1>Cargando ...</h1>
        :
        data.results.map((element,index) => <BoxGeneration setURL={setURL} key={element.name} index={index+1} setChangeGeneration={setChangeGeneration}>Generación {index+1}</BoxGeneration>)
      }
    </div>
  );
}


export default styled(Menu)`
  min-width: 300px;
  width: 100%;
  margin: 10px 0;
  height: auto;
  border-radius: 18px;
  padding: 5px 0;
  gap: 10px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  
`;