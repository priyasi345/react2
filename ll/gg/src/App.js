import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";
import  {Button,Alert,Row,Col}  from 'react-bootstrap';
import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';
function App() {
  return (
    <div className="App">
 <Menu/>
  <Row className="landing">
    <Col> <LeftSide/></Col>
    <Col> <RightSide/></Col>
    
  </Row>
    </div>
  );
}

export default App;
