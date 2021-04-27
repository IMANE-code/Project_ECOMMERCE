//import logo from './logo.svg';
import './App.css';
import {Register} from './Register';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch}from 'react-router-dom';
import {Produit} from './Produit';
import {Home} from './Home'

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navigation/>
     
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Produit' component={Produit}/>
          </Switch>
        </BrowserRouter>      
    </div>
  );
}

export default App;
