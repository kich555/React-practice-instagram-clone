import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
    </div>
  );
}

export default App;
