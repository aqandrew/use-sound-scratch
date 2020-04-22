import React, { useState } from 'react';
import useSound from 'use-sound';

import scratchSfx from '../src/sounds/scratch.mp3';

function App() {
  const [lastKnownScrollTop, setLastKnownScrollTop] = useState(0);
  const [play] = useSound(scratchSfx, {
    sprite: {
      down: [66, 115],
      up: [145, 160],
    },
  });

  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;

    if (scrollTop > lastKnownScrollTop) {
      play({ id: 'up' });
    } else {
      play({ id: 'down' });
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
