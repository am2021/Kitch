import React from 'react';
import Main from './Main'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/navbar.css'
import './styles/message.css'
import './styles/main.css'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main/>
    </div>
  );
}

export default App;
