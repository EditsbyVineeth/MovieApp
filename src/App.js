import React, { useState } from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import Layout from './Components/Layout';
import SecondPages from './Components/SecondPages';
import ThirdPage from './Components/ThirdPage';

function App() {
  const [displayLayout, setDisplayLayout] = useState(false);

  const showLayout = () => {
    setDisplayLayout(true);
  };
  const hideLayout = () => {
    setDisplayLayout(false);
  };

  return (
    <div className="App  bg-black">
      {!displayLayout && (
        <>
          <FirstPage showLayout={showLayout} />
          <SecondPages />
          <ThirdPage/>
        </>
      )}
      {displayLayout && <Layout hideLayout={hideLayout}/>}
    </div>
  );
}

export default App;
