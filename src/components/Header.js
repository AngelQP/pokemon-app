import React from 'react';
import styled from 'styled-components';
import imagen from '../assets/img/encabezado.png';
import Formulario from './Formulario';
import {Link} from "react-router-dom";
import { URLGENERATION } from '../utils/URL';


const Title = styled.div`
  width: 150px;
  height: 100px;
  background-image: url(${imagen});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Header = ({className, setURL, setChangeGeneration}) => {

  const onClick = () =>{
    setURL(`${URLGENERATION}1`)
    setChangeGeneration(true);
  }
  return (
    <div className={className}>
      <Link to={"/"}>
        <Title onClick={onClick} />
      </Link>
      {/* <Formulario /> */}
    </div>
  );
}




export default styled(Header)`
  width: 100%;
  /* padding: 10px; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 700px) {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;