import React from "react";
import "./OurServecisDetails.css";
import leaf from "../../Assets/images/leaf.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const OurServecisDetails = () => {
  return (
    <>
      <div className="departments">
        <div className="container grid">
          <div className="our-departments-title">
            <Zoom>
              <h3>our Departments</h3>
              <div>
                <img src={leaf} alt="leaf" />
              </div>
            </Zoom>
          </div>
          <Fade left>
            <div className="department">
              <h3>Production</h3>
              <p>
                Since its inception, Gelila has focused on providing a precise
                culinary experience to its clients. we are able to meet the
                ever-changing customer demands.
              </p>
              <br />
              <p>
                Gelila production team guarantees 100% fresh fruits, vegetables
                . Each product under goes thorough quality checks and
                traceability, making sure our clients receive fresh products.
                Our well trained staff are very precise when it comes to
                handling and storing of our products.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="department">
              <h3>Quality</h3>
              <p>
                GELILA maintains quality in fresh fruits and vegetables by
                controlled atmospheres. Post-harvest quality maintenance in
                fresh fruits and vegetables are greatly influenced by the
                temperature, relative humidity, and atmospheric composition of
                their environment. GELILAfollows strict compliance according to
                the International ISO 2000-2005 and HACCP principles, always
                being a frontrunner and a role model in the matters of quality
                and hygiene.
              </p>
              <br />
              <p>
                GELILA quality control department prioritizes to enhance and
                maintain the originality and distinctive characteristics of each
                product maintain its nutritional value.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="department">
              <h3>Logistics</h3>
              <p>
                GELILA group is playing a key role in our daily operations.
                Fully maintained, latest delivery vehicles equipped with
                standardized and approved chiller units and year round
                logistical independence, delivering across the world . All our
                vehicles are certified for food transport.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="department">
              <h3>Marketing</h3>
              <p>
                Our marketing team consists of professionals, designers and
                Marketing experts who strategize, plan and execute campaign to
                promote our business and also assist the sales team by reaching
                out to a wider audience and bringing them close to the company.
                They ensure that our client demands are fulfilled and also
                provide a platform to share their views and opinions.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="department">
              <h3>Human Resource Development</h3>
              <p>
                GELILA management strongly believes, a business is successful by
                its employees, the way customer satisfaction is important for
                GELILA, employee satisfaction as well is equally important for
                us. Our employees are carefully screened on the basis of
                loyalty, dedication, cooperation, and willingness to work.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="department">
              <h3>Business Development</h3>
              <p>
                GELILA has an excellent business development department,
                experienced in wholesale and retail of fresh fruits and
                vegetables, who assist in developing the business further in
                domestic and international markets. Our department maintains
                constant and ongoing interaction with leading retailers,
                exporters, wholesalers, hotels, caterers, processors etc. to
                drive in the sales in the domestic market and overseas.
              </p>
            </div>
          </Fade>
          <Zoom>
            <div className="services-item">
              <div className="our-departments-title">
                <h3>sadat industrial City</h3>
                <div>
                  <img src={leaf} alt="leaf" />
                </div>
              </div>
              <p>
                We produce a line of fresh hand-picked fruits and vegetables
                from the best farms in Egypt. Our Products are available in
                different types and sizes.
              </p>
              <div className="other-list">
                <p>Packing house : 26325 m2</p>
                <p>
                  Citrus Packing area : 8000 m2 - Production capacity : 65
                  ton/hour
                </p>
                <p>
                  Cold storage area 4000 m2 - with storage capacity : 7000 ton
                </p>
                <p>
                  Vegetable packing house : Production capacity : 100 ton/day
                </p>
                <p>Pre cooling : 4 pre-cooling rooms capacity : 350 ton/day</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default OurServecisDetails;
