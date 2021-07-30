import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/pages'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

{/* <Sidebar />
<Navbar />
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/wallet" component={Wallet} />
  <Route path="/store" component={Store} />
  <Route path="/tasks" component={Tasks} />
  <Route path="/settings" component={Settings} />
  <Route path="/signout" component={Signout} />
</Switch> */}