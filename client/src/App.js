import './App.css';

import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat'
import User from './components/User'
import Home from './components/Home'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css';

import UserCreate from './components/user-create.component'
import UserList from './components/user-list.component'
import UserEdit from './components/user-edit.component'


function App() {
  return (
    <Route>
      <div className="App">
      
        <NavBar bg="dark" variant="dark">
            <Container>
              <NavBar.Brand>
                <Link to={"/"} className="nav-link">
                  React MERN Stack CRUD
                </Link>
              </NavBar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/user-create"} className="nav-link">Create User</Link>
                </Nav>
                <Nav>
                  <Link to={"/user-list"} className="nav-link">List User</Link>
                </Nav>
                <Nav>
                  <Link to={"/chat"} className="nav-link">Chat</Link>
                </Nav>
              </Nav>
            </Container>
        </NavBar>

        <Container>
          <Row>
            <Col>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/user-create" component={UserCreate}></Route>
                  <Route path="/user-list" component={UserList}></Route>
                  <Route path="/user-edit/:id" component={UserEdit}></Route>
                  <Route path="/chat" component={Chat}></Route>
                  <Route path="/login/:id" component={Login}></Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </Route>
  );
}

export default App;
