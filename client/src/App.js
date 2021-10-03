import './App.css';
import { Link, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat'
import User from './components/User'
import Home from './components/Home'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/login/:id"><Login /></Route>
        <Route exact path="/"><Home /></Route>
        <Route path="/user"><User /></Route>
        <Route path="/chat"><Chat /></Route>
        
        {/* <Route path="">
          404 Not Found
        </Route> */}
      </Switch>
    </div>
    
    
  );
}

export default App;
