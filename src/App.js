import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import 'antd/dist/antd.css';
import login from  './components/Login/login';
import Public from './components/public_page/Public';
import Registation from './components/Registation/Registation';

function App() {
  return (
    <Router>
   
     
      <Switch>
        <Route path='/Registation' exact component={Registation} />
        <Route path='/public' exact component={Public} />
        <Route path='/' exact component={login} />
        
      

      </Switch>

   
    </Router>
  
  );
}

export default App;

