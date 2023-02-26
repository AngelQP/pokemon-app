import * as React from "react";
import styled from "styled-components";

const Formulario = ({ className }) => {
  // const [search, setSearch] = React.useState("");

  return (
    <form className={className}>
      <div className="form-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-search"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input className="search" type='text' name="search" placeholder="¿Buscar Pokemón?"></input>
      </div>
      <button type="submit"> Buscar </button>
    </form>
  );
};

export default styled(Formulario)`

  min-width: 300px;
  width: 400px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 5px;

  .form-group {
    position: relative;
    min-width: 200px;
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    padding: 0px 8px 0px 12px;
    gap: 5px;

    border-radius: 18px;
    border: 2px solid rgba(0,0,0, 0.7);
  }
  .icon-search {
    width: 15px;
    height: 15px;
    color: #333;    
  }
  .search {
    width: calc(100% - 15px);
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    height: 40px;
    width: 85px;
    color: white;
    border: none;
    outline: none;
    border-radius: 18px;
    background-color: #006d77;
    font-size: 1rem;

    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
  }
`;
