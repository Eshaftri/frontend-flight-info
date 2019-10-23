import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavComp from './components/NavComp'
import SearchComp from './components/SearchComp'

function App() {
  return (
    <React.Fragment>
    <NavComp/>
    <SearchComp/>
    </React.Fragment>
  );
}

export default App;
