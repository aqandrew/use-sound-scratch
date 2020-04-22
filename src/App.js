import React from 'react';
import useSound from 'use-sound';

import scratchSfx from '../src/sounds/scratch.mp3';

function App() {
  const [play] = useSound(scratchSfx);

  return (
    <div className="App">
      <button onClick={play}>play sound</button>
    </div>
  );
}

export default App;
