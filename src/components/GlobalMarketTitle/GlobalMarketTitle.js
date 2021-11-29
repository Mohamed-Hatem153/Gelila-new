import React from 'react'
import leaf from "../../Assets/images/leaf.png";
import './GlobalMarketTitle.css'

const GlobalMarketTitle = () => {
    return (
        <div className="global-market-title">
        <p>our global market</p>
        <h3>gelila all over the world</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    )
}

export default GlobalMarketTitle
