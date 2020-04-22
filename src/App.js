import React from 'react';
import useSound from 'use-sound';

import scratchSfx from '../src/sounds/scratch.mp3';

function App() {
  const [play] = useSound(scratchSfx, {
    sprite: {
      down: [66, 115],
      up: [145, 160],
    },
  });

  return (
    <div className="App">
      <button onClick={() => play({ id: 'down' })}>play down</button>
      <button onClick={() => play({ id: 'up' })}>play up</button>
    </div>
  );
}

export default App;
