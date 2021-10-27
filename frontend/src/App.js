import Field from "./components/Field";
import { Form } from './components/Form/Form';
import Header from './components/Header';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  const [hotels, setHotels] = useState([]);
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact>
          <div className="App">
          <Form>
          <Field text='User Name: '/>
          <Field text='Password: '/>
          <Header/>
          </Form>
          </div>
        </Route>
        <Route path='/helloThere'> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
