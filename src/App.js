import React from 'react';
import Navigation from './components/Navigation'
import Main from './components/Main'
import Message from './components/Message'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/navbar.css'
import './styles/message.css'
import './styles/main.css'

function App() {
  return (
    <div>
      <Navigation />
      <Message />
      <Main />
    </div>
  );
}

export default App;
