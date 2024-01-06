import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Poem from './components/Poem';

function App() {
  return (
    <section>
      <div className='formater'>
        <DarkModeToggle />
        <Poem />
      </div>
    </section>
  );
}

export default App;
