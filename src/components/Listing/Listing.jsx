import React, { useEffect, useState } from "react";
import "./Listing.css";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import { setCharacters } from "../../redux/characterSlice";
import PageNavigator from "../PageNavigator/PageNavigator";
import Table from "../Table/Table";
import { fetchCharacterData } from "../../actions/characterAction";
import Limit from "../Limit/Limit";
import FilterBox from "../FilterBox/FilterBox";
import DisplayUser from "../DisplayUser/DisplayUser";

const Listing = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [visibility, setVisibility] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showLoading());
    fetchCharacterData()
      .then((response) => {
        dispatch(hideLoading());
        dispatch(setCharacters(response.data.docs));
        setCharacterData(response.data.docs);
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log(err);
      });
  }, [page, limit, dispatch]);
  return (
    <div className="Listing">
      {visibility ? (
        <>
          <h4 className="mt-4 my-3">
            Characters{" "}
            <span>
              <i class="fa-solid fa-2xs fa-chevron-right"></i>
            </span>
            <span className="ms-3">{userData.name}</span>
          </h4>
          <DisplayUser userData={userData} setVisibility={setVisibility}/>
        </>
      ) : (
        <>
          {characterData.length > 0 || filteredData.length > 0 ? (
            <>
              <h3 className="mt-4">Characters</h3>
              <FilterBox setFilteredData={setFilteredData} />
              <Table
                page={page}
                limit={limit}
                characterData={characterData}
                filteredData={filteredData}
                setVisibility={setVisibility}
                setUserData={setUserData}
              />
              <div className="w-100 d-flex justify-content-between">
                <PageNavigator page={page} setPage={setPage} />
                <Limit setLimit={setLimit} />
              </div>
            </>
          ) : (
            <p className="text-center text-danger">No data. Please check your connection.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Listing;
