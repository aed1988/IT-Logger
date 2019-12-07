import React, {useEffect} from 'react';

import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize';
import './App.css';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';

function App() {
  useEffect(() => {
    // Initialise materilize.js
    M.AutoInit();
  })
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <Logs />
      </div>
      
    </>
  );
}

export default App;
