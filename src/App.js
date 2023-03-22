import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useSelector } from 'react-redux'

function App() {
  const { loading } = useSelector((state)=>state.alerts)
  return (
    <BrowserRouter>
      <div className="App">
        {loading && (
          <div className="spinner-parent">
            <div className="spinner-border text-white" role="status"></div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "./redux/alertSlice";
// import { setCharacters } from "./redux/characterSlice";
// import { API } from "./utils/axios";

// const App = () => {
//   const [nameFilter, setNameFilter] = useState("");
//   const [raceFilter, setRaceFilter] = useState("");
//   const [genderFilter, setGenderFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [resultsPerPage, setResultsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState("");

//   const dispatch = useDispatch();
//   const characters = useSelector((state) => state.characters);
//   const loading = useSelector((state) => state.loading);
//   const error = useSelector((state) => state.error);

//   const fetchCharacterData = async () => {
//     try {
//       dispatch(showLoading());
//       const response = await API.get("/character");
//       dispatch(hideLoading());
//       console.log(response.data.docs, "asdada");
//       dispatch(setCharacters(response.data.docs))
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error, "Error fetching data");
//     }
//   };

//   const selectCharacter = (character) => {
//     console.log(character,'brrrrrr')
//   }
//   useEffect(() => {
//     dispatch(fetchCharacterData());
//   }, [dispatch]);

//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <div>
//           <div>
//             <label>Search by name:</label>
//             <input
//               type="text"
//               onChange={(e) => setNameFilter(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Filter by race:</label>
//             <select
//               multiple={true}
//               onChange={(e) => setRaceFilter(e.target.value)}
//             >
//               <option value="Hobbit">Hobbit</option>
//               <option value="Human">Human</option>
//               <option value="Dwarf">Dwarf</option>
//               <option value="Elf">Elf</option>
//               <option value="Orc">Orc</option>
//               <option value="Ent">Ent</option>
//             </select>
//           </div>
//           <div>
//             <label>Filter by gender:</label>
//             <select onChange={(e) => setGenderFilter(e.target.value)}>
//               <option value="">Any</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//           <div>
//             <label>Sort by name:</label>
//             <select onChange={(e) => setSortOrder(e.target.value)}>
//               <option value="asc">Ascending</option>
//               <option value="desc">Descending</option>
//             </select>
//           </div>
//           <div>
//             <label>Results per page:</label>
//             <select onChange={(e) => setResultsPerPage(e.target.value)}>
//               <option value="10">10</option>
//               <option value="20">20</option>
//               <option value="50">50</option>
//             </select>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Race</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//               {characters
//                 .filter(
//                   (character) =>
//                     nameFilter === "" || character.name.includes(nameFilter)
//                 )
//                 .filter(
//                   (character) =>
//                     raceFilter.length === 0 ||
//                     raceFilter.includes(character.race)
//                 )
//                 .filter(
//                   (character) =>
//                     genderFilter === "" || character.gender === genderFilter
//                 )
//                 .sort((a, b) =>
//                   sortOrder === "asc"
//                     ? a.name.localeCompare(b.name)
//                     : b.name.localeCompare(a.name)
//                 )
//                 .slice(
//                   (currentPage - 1) * resultsPerPage,
//                   currentPage * resultsPerPage
//                 )
//                 .map((character) => (
//                   <tr
//                     key={character._id}
//                     onClick={() => selectCharacter(character)}
//                   >
//                     <td>{character.name}</td>
//                     <td>{character.race}</td>
//                     <td>{character.gender}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <div>
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//             ></button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default App;
