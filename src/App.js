import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './home'
import Header from './header'
import Projects from './projects'
import Contact from './contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    <Header/>
    <Switch>
      <Route exact  path='/'>
        <Home/>

      </Route>
    </Switch>
    <Switch>
      <Route path='/about'>
        
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

    
    
    
    
    </BrowserRouter>
      
    
  );
}

export default App;
