import React from "react";
import './DisplayUser.css'

const DisplayUser = ({ userData, setVisibility }) => {
  return (
    <div className="DisplayUser w-100">
      <i class="backHyperLink fa fa-xl fa-xmark" style={{color: "#535455",cursor:"pointer"}} onClick={()=>setVisibility(false)}></i>
      <div className="row d-flex justify-content-center px-3">
        <div className="col-3 d-flex flex-column">
          <h6>Name</h6>
          <h6>WikiURL</h6>
          <h6>Race</h6>
          <h6>Gender</h6>
          <h6>Height</h6>
          <h6>Hair</h6>
          <h6>Realm</h6>
          <h6>Birth</h6>
          <h6>Spouse</h6>
          <h6>Death</h6>
        </div>
        <div className="col-9 d-flex flex-column">
          <h6>{userData.name}</h6>
          <h6>{userData.wikiUrl}</h6>
          <h6>{userData.race}</h6>
          <h6>{userData.gender}</h6>
          <h6>{userData.height ? userData.height : "-"}</h6>
          <h6>{userData.hair ? userData.hair : "-"}</h6>
          <h6>{userData.realm ? userData.realm : "-"}</h6>
          <h6>{userData.birth ? userData.birth : "-"}</h6>
          <h6>{userData.spouse ? userData.spouse : "-"}</h6>
          <h6>{userData.death ? userData.death : "-"}</h6>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
