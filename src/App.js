import React, { useState } from 'react';
import useSound from 'use-sound';

import scratchSfx from '../src/sounds/scratch.mp3';

function App() {
  const [lastKnownScrollTop, setLastKnownScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [play] = useSound(scratchSfx, {
    sprite: {
      low: [66, 115],
      high: [145, 160],
    },
  });

  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;

    if (scrollTop > lastKnownScrollTop) {
      if (!isScrollingDown) {
        play({ id: 'high' });
      }

      setIsScrollingDown(true);
    } else {
      if (isScrollingDown) {
        play({ id: 'low' });
      }

      setIsScrollingDown(false);
    }

    setLastKnownScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  return (
    <div className="App" onScroll={handleScroll}>
      <div className="inner"></div>
    </div>
  );
}

export default App;
