import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import scratchSfx from './sounds/scratch.mp3';

function App() {
  const [okayClicked, setOkayClicked] = useState(false);
  const [lastKnownScrollTop, setLastKnownScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [play] = useSound(scratchSfx, {
    sprite: {
      low: [66, 115],
      high: [145, 160],
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (event) => {
    // TODO Attach handleScroll to .App in JSX below,
    // after figuring out this Pen's CSS witchcraft
    // https://codepen.io/geoffgraham/pen/KLGKqJ
    const scrollingElement = document.querySelector('html');
    let scrollTop = scrollingElement.scrollTop;

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
    <div className="App">
      <div id="instructions">
        <h1>Scroll me!</h1>
        {!okayClicked ? (
          <button onClick={() => setOkayClicked(true)}>Okay</button>
        ) : null}
      </div>
      <div className="inner"></div>
    </div>
  );
}

export default App;
