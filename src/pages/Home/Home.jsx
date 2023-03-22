import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Listing from "../../components/Listing/Listing";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Home">
      {visible ? (
        <>
          <Listing />
        </>
      ) : (
        <>
          <div className="Heading">
            <h1>The Lord of the Rings API</h1>
            <h4>The one API to rule them all</h4>
          </div>
          <FontAwesomeIcon
            className="playIcon"
            icon={faCirclePlay}
            beat
            style={{ color: "#e8e8e9" }}
            size="6x"
            onClick={() => setVisible(true)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
