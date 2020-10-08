import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableClient from './components/tableclient';
import InputSearch from './components/searchglobal';
import InputDate from './components/searchdate';
import AjoutClient from "./components/ajoutclient"

function App() {
  return (
    <div className="App">
      <InputSearch/>
      <InputDate/>
      <AjoutClient/>
      <TableClient/>
    </div>
  );
}

export default App;
