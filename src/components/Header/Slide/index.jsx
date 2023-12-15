import { useLayoutEffect, useState } from 'react';
import './index.css';
import SlideList from './SlideList';

const Slide = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  

  return (
    <div>
      <SlideList widthWindow={widthWindow} setWidthWindow={setWidthWindow} />
    </div>
  );
};

export default Slide;
