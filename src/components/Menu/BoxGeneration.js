import styled from "styled-components";
import {Link} from "react-router-dom";

const URLGENERATION = "https://pokeapi.co/api/v2/generation/";

const BoxGeneration = ({className, children, index, setURL, setChangeGeneration}) => {
  const handleclick = () => {
    setURL(`${URLGENERATION}${index}`);
    setChangeGeneration(true);
    console.log(`${URLGENERATION}${index}`);
  }
  return(
    <Link to={"/"}>
      <button className={className} onClick={handleclick}>
        {children}
      </button>
    </Link>
  );
}

export default styled(BoxGeneration)`
  border: 2px solid #006d77;
  outline: none;

  border-radius: 10px;
  width: 100px;
  height: auto;
  padding: 5px 10px;
  color: #333;
  background-color: rgba(255,255,255,1);

  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  
`;