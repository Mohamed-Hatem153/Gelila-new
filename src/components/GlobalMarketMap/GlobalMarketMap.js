import React from "react";
import "./GlobalMarketMap.css";
import Zoom from "react-reveal/Zoom";
import map from "../../Assets/images/map.png";
import egyptFlag from "../../Assets/images/countries flag/egypt.png";
import saudiFlag from "../../Assets/images/countries flag/sudia.png";
import indiaFlag from "../../Assets/images/countries flag/india.png";
import UAEFlag from "../../Assets/images/countries flag/united-arab-emirates.png";
import chinaFlag from "../../Assets/images/countries flag/china.png";
import bahrainFlag from "../../Assets/images/countries flag/bahrain.png";
import georgiaFlag from "../../Assets/images/countries flag/georgia.png";
import greeceFlag from "../../Assets/images/countries flag/greece.png";
import hongkongFlag from "../../Assets/images/countries flag/hong-kong.png";
import kenyaFlag from "../../Assets/images/countries flag/kenya.png";
import malaysiaFlag from "../../Assets/images/countries flag/malaysia (1).png";
import mauritiusFlag from "../../Assets/images/countries flag/mauritius.png";
import philippinesFlag from "../../Assets/images/countries flag/philippines.png";
import omanFlag from "../../Assets/images/countries flag/oman.png";
import ronamiaFlag from "../../Assets/images/countries flag/romania.png";
import russiaFlag from "../../Assets/images/countries flag/russia.png";
import seychellesFlag from "../../Assets/images/countries flag/seychelles.png";
import singaporeFlag from "../../Assets/images/countries flag/singapore.png";
import sloveniaFlag from "../../Assets/images/countries flag/slovenia.png";
import ukraineFlag from "../../Assets/images/countries flag/ukraine.png";
import netherlandsFlag from "../../Assets/images/countries flag/netherlands.png";
import uruguayFlag from "../../Assets/images/countries flag/uruguay.png";
import brazilFlag from "../../Assets/images/countries flag/brazil.png";
import canadaFlag from "../../Assets/images/countries flag/canada.png";
import gabonFlag from "../../Assets/images/countries flag/gabon.png";
import usaFlag from "../../Assets/images/countries flag/usa-flag.png";
import spainFlag from "../../Assets/images/countries flag/spain.png";
import maldivesFlag from "../../Assets/images/countries flag/maldives.png";
import rwandaFlag from "../../Assets/images/countries flag/rwanda.png";
import ugandaFlag from "../../Assets/images/countries flag/uganda.png";

const GlobalMarketMap = () => {
  return (
    <div className="map countries__map">
      <img
        src={map}
        className="image image_size_full mapImage"
        alt="MapImage"
      />
      <ul className="list flagList">
        <Zoom>
          <li className="flagList__item flagList__item_country_egypt">
            <img
              src={egyptFlag}
              className="flagList__flag flagList__flag_country_egypt"
              alt="egypt flag"
              title="Egypt"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_saudi">
            <img
              src={saudiFlag}
              className="flagList__flag flagList__flag_country_saudi"
              alt="saudi flag"
              title="Saudi Arabia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_india">
            <img
              src={indiaFlag}
              className="flagList__flag flagList__flag_country_india"
              alt="India"
              title="India"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_uae">
            <img
              src={UAEFlag}
              className="flagList__flag flagList__flag_country_uae"
              alt="uae flag"
              title="united-arab-emirates"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_china">
            <img
              src={chinaFlag}
              className="flagList__flag flagList__flag_country_china"
              alt="china flag"
              title="China"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_bahrain">
            <span className="flagList__pointer"></span>
            <img
              src={bahrainFlag}
              className="flagList__flag flagList__flag_country_bahrain"
              alt="bahrain flag"
              title="Bahrain"
            />
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_georgia">
            <img
              src={georgiaFlag}
              className="flagList__flag flagList__flag_country_georgia"
              alt="georgia flag"
              title="Georgia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_greece">
            <img
              src={greeceFlag}
              className="flagList__flag flagList__flag_country_greece"
              alt="greece flag"
              title="Greece"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_hongkong">
            <img
              src={hongkongFlag}
              className="flagList__flag flagList__flag_country_hongkong"
              alt="hongkong flag"
              title="Hong Kong"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_kenya">
            <img
              src={kenyaFlag}
              className="flagList__flag flagList__flag_country_kenya"
              alt="kenya flag"
              title="Kenya"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_malaysia">
            <img
              src={malaysiaFlag}
              className="flagList__flag flagList__flag_country_malaysia"
              alt="malaysia flag"
              title="Malaysia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_mauritius">
            <img
              src={mauritiusFlag}
              className="flagList__flag flagList__flag_country_mauritius"
              alt="mauritius flag"
              title="Mauritius"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_oman">
            <span className="flagList__pointer"></span>
            <img
              src={omanFlag}
              className="flagList__flag flagList__flag_country_oman"
              alt="oman flag"
              title="Oman"
            />
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_philippines">
            <img
              src={philippinesFlag}
              className="flagList__flag flagList__flag_country_philippines"
              alt="philippines flag"
              title="Philippines"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_ronamia">
            <img
              src={ronamiaFlag}
              className="flagList__flag flagList__flag_country_ronamia"
              alt="ronamia flag"
              title="Ronamia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_russia">
            <img
              src={russiaFlag}
              className="flagList__flag flagList__flag_country_russia"
              alt="russia flag"
              title="Russia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_seychelles">
            <img
              src={seychellesFlag}
              className="flagList__flag flagList__flag_country_seychelles"
              alt="seychelles flag"
              title="Seychelles"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_singapore">
            <span className="flagList__pointer"></span>
            <img
              src={singaporeFlag}
              className="flagList__flag flagList__flag_country_singapore"
              alt="singapore flag"
              title="Singapore"
            />
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_slovenia">
            <img
              src={sloveniaFlag}
              className="flagList__flag flagList__flag_country_slovenia"
              alt="slovenia flag"
              title="Slovenia"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_ukraine">
            <img
              src={ukraineFlag}
              className="flagList__flag flagList__flag_country_ukraine"
              alt="ukraine flag"
              title="Ukraine"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_netherlands">
            <img
              src={netherlandsFlag}
              className="flagList__flag flagList__flag_country_netherlands"
              alt="netherlands flag"
              title="Netherlands"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_uruguay">
            <img
              src={uruguayFlag}
              className="flagList__flag flagList__flag_country_uruguay"
              alt="uruguay flag"
              title="Uruguay"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_brazil">
            <img
              src={brazilFlag}
              className="flagList__flag flagList__flag_country_brazil"
              alt="brazil flag"
              title="Brazil"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_canada">
            <img
              src={canadaFlag}
              className="flagList__flag flagList__flag_country_canada"
              alt="canada flag"
              title="Canada"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_gabon">
            <img
              src={gabonFlag}
              className="flagList__flag flagList__flag_country_gabon"
              alt="gabon flag"
              title="Gabon"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_usa">
            <img
              src={usaFlag}
              className="flagList__flag flagList__flag_country_usa"
              alt="usa flag"
              title="USA"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_spain">
            <img
              src={spainFlag}
              className="flagList__flag flagList__flag_country_spain"
              alt="spain flag"
              title="Spain"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_maldives">
            <img
              src={maldivesFlag}
              className="flagList__flag flagList__flag_country_maldives"
              alt="maldives flag"
              title="Maldives"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_rwanda">
            <span className="flagList__pointer"></span>
            <img
              src={rwandaFlag}
              className="flagList__flag flagList__flag_country_rwanda"
              alt="rwanda flag"
              title="Rwanda"
            />
          </li>
        </Zoom>
        <Zoom>
          <li className="flagList__item flagList__item_country_uganda">
            <img
              src={ugandaFlag}
              className="flagList__flag flagList__flag_country_uganda"
              alt="uganda flag"
              title="Uganda"
            />
            <span className="flagList__pointer"></span>
          </li>
        </Zoom>
      </ul>
    </div>
  );
};

export default GlobalMarketMap;
