import {HashRouter, Switch, Route} from 'react-router-dom'
import { useEffect } from 'react'
import Home from './home'
import Header from './header'
import Projects from './projects'
import Contact from './contact'
import './App.css';

function App() {
  useEffect(() => {
    
    document.title = `Portfolio`;
  });
  return (
    <HashRouter basename='/'>
    
    <Header/>
    <Switch>
      <Route exact path='/'>
        <Home/>

      </Route>
    </Switch>
    <Switch>
      <Route exact path='/about'>
        
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/projects'>
        <Projects/>
        
      </Route>
      
    </Switch>
    <Switch>
      <Route exact path='/contact'>
        <Contact/>
        
      </Route>
    </Switch>
    </HashRouter>   
  );
}
export default App;