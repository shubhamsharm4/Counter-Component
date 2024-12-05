import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterControl from './component/CounterControl'
import LikeParentComponent from './component/LikeParentComponent';

function App() {
  return (
    <>
      <CounterControl/>
      <LikeParentComponent/>
    </>
  );
}

export default App;
