import React from 'react';
import Header from './header';
import BottomSide from './bottom_side';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <BottomSide />
    </div>
  );
}

export default App;