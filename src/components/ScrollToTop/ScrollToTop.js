import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollToTop.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;
// import React, { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Top: 0 takes us all the way back to the top of the page
//   // Behavior: smooth keeps it smooth!
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     // Button is displayed after scrolling for 500 pixels
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 500) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

// //scroll-to-top classes: fixed, bottom:0, right:0
//   return (
//     <div className="scroll-to-top">
//       {isVisible && (
//         <div onClick={scrollToTop}>
//             <FaArrowCircleUp className='scroll'/>
//         </div>
//       )}
//     </div>
//   );
// }