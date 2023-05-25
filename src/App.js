// App.js

import React from 'react';
import './style.css';

import NavBar from './components/NavBar';
import BigImage from './components/BigImage';
import BrightFuture from './components/BrightFuture';
import NewSection from './components/NewSection';
import BeigeSection from './components/BeigeSection';
import SmallText from './components/SmallText';

function App() {
  return (
    <main className="mainBody">
      <NavBar />
      <BigImage />
      <BrightFuture />
      <SmallText/>
      <NewSection />
      <BeigeSection />
    </main>
  );
}

export default App;
