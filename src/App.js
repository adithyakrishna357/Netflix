import React from 'react';
import './App.css';
import { action ,orginals,comedymovies,horrormovies,romancemovies,documentaries } from './urls';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedymovies} title='Comedy' isSmall/>
      <RowPost url={horrormovies} title='Horror' isSmall/>
      <RowPost url={romancemovies} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
