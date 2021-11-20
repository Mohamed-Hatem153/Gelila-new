import SlideOneImg from '../../Assets/images/slide_v1_1.jpg'
import SlideTwoImg from '../../Assets/images/slide_v1_2.jpg'
import SlideThreeImg from '../../Assets/images/slide_v1_3.jpg'
import './Header.css'
// import React, { Component } from "react";
// import Slider from "react-slick";

import React, { Component } from "react";
import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
import { Zoom ,Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  SlideOneImg,
  SlideTwoImg,
  SlideThreeImg
];
const fadeImages = [
  {
  url: SlideOneImg,
  caption: 'First Slide'
  },
  {
  url: SlideTwoImg,
  caption: 'Second Slide'
  },
  {
  url: SlideThreeImg,
  caption: 'Third Slide'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} alt='slide'/>
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
    )
}
export default Slideshow