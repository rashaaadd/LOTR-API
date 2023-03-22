import React from "react";
import './Table.css'

const Table = ({ page, limit, characterData, filteredData, setVisibility, setUserData}) => {
  const getUserData = (character) => {
    setUserData(character);
    setVisibility(true);
  }
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Race</th>
          <th scope="col">Gender</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {(filteredData.length>0 ? filteredData : characterData)
          .slice(page === 1 ? page - 1 : (page - 1) * limit, page * limit)
          .map((character) => {
            return (
              <tr key={character._id}>
                <th scope="row">{characterData.indexOf(character) + 1}</th>
                <td>{character.name}</td>
                <td>{character.race}</td>
                <td>{character.gender}</td>
                <td onClick={()=>getUserData(character)} style={{cursor:'pointer'}}>Details &raquo;</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
