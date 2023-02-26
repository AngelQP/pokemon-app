import * as React from 'react';
import styled from 'styled-components';
import { URLLISTPOKEMON } from '../../utils/URL';
import Card from '../Card'

const ContainerCards = ({className, results}) => {

  // console.log(results);

  return (
    <ul className={className}>
        {
          results.map( p => (
            <li key={p.name}>
              <Card url={URLLISTPOKEMON+p.position} />
            </li>
          ))
        }
      </ul>
  );

}

export default styled(ContainerCards)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  margin: 20px 0;

  li {
    list-style: none;
  }

`;