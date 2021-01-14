import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';

import loaderlogo from '../images/artilectlogo.png';

export default function Loader() {
  const loader = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(loader.current, 0.5, { y: 18 }, { y: -18, yoyo: true, repeat: -1 });
    TweenMax.fromTo(image.current, 0.5, { y: 18 }, { y: -18, yoyo: true, repeat: -1 });
  }, []);

  return(
    <div className="loader-container">
      <div className="loader">
        <img src={loaderlogo} alt='loading' ref={image} className='loader-logo' />
        <h1 ref={loader}>Artilect</h1>
      </div>
    </div>
  );
}