import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./FilterBox.css";

const FilterBox = ({ setFilteredData }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [raceFilter, setRaceFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const { characterData } = useSelector((state)=>state.characters)
  const handleSubmit = () => {
    const filteredData = characterData
      .filter(
        (character) => nameFilter === "" || character.name.includes(nameFilter)
      )
      .filter(
        (character) =>
          raceFilter.length === 0 || raceFilter.includes(character.race)
      )
      .filter(
        (character) => genderFilter === "" || character.gender === genderFilter
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    setFilteredData(filteredData);
  };
  return (
    <div className="FilterBox">
      <div className="row justify-content-between">
        <div className="col-md-6 col-lg-6">
          <label className="me-3">Search by name:</label>
          <input
            className=""
            type="text"
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <div className="my-3 col-md-6 col-lg-6">
          <label className="me-3">Filter by race:</label>
          <select onChange={(e) => setRaceFilter(e.target.value)}>
            <option value="Hobbit">Hobbit</option>
            <option value="Human">Human</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Orc">Orc</option>
            <option value="Ent">Ent</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="my-3 col-md-6 col-lg-6">
          <label className="me-3">Filter by gender:</label>
          <select onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="my-3 col-md-6 col-lg-6">
          <label className="me-3">Sort by name:</label>
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <button className="btn btn-secondary mb-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FilterBox;
