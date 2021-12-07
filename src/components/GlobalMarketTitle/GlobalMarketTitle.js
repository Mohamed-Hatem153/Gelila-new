import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./GlobalMarketTitle.css";
import Zoom from "react-reveal/Zoom";

const GlobalMarketTitle = () => {
  return (
    <Zoom>
      <div className="global-market-title">
        <p>our global market</p>
        <h3>gelila all over the world</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    </Zoom>
  );
};

export default GlobalMarketTitle;
