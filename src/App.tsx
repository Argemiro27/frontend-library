import React from 'react';
import { GlobalStyle } from './styles/global';
import MyRoutes from './Router/Routes';

function App() {
  return (
    <div className="App">
      <GlobalStyle  />
      <MyRoutes />
    </div>
  );
}

export default App;
