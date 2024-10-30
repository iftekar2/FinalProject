import React, { useState } from "react";
import styled from "styled-components";

export default function Inputs() {
  const [selectedOption, setSelectedOption] = useState("Learning");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <InputFeilds>
        <SearchBar>
          <input placeholder="Add a new goal..."></input>
        </SearchBar>

        <SelectOptions>
          <select
            id="activity-dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="Learning">Learning</option>
            <option value="Health">Health</option>
            <option value="Money">Money</option>
          </select>
        </SelectOptions>

        <AddButton>
          <button>Add a goal</button>
        </AddButton>
      </InputFeilds>
    </div>
  );
}

const InputFeilds = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.div`
  input {
    height: 40px;
    width: 300px;
    padding-left: 10px;
    font-size: 16px;
    border-style: solid;
    border-color: #e4e4e7;
    border-radius: 7px;
  }
`;

const SelectOptions = styled.div`
  select {
    height: 40px;
    width: 150px;
    font-size: 16px;
    border-style: solid;
    border-color: #e4e4e7;
    border-radius: 7px;
    padding-left: 10px;
  }
`;

const AddButton = styled.div`
  button {
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 7px;
    background-color: #8cd3c5;
    font-size: 16px;
    font-weight: 550;
  }
`;

//How are polimorphesum and inhaterence connected to OOP.
