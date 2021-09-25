import './App.css';
import { Link, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat'
import User from './components/User'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div><h3>Home</h3></div>
)


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
        <Route exact path="/"><Home /></Route>
        <Route path="/user"><User /></Route>
        <Route path="/chat"><Chat /></Route>
        
        <Route path="/:id">
          404 Not Found
        </Route>
      </Switch>
    </div>
    
    
  );
}

export default App;
