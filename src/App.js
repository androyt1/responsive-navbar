import {useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'

function App() {
  const[toggle,setToggle] = useState(false);
  
  const toggleHandler = () => setToggle(!toggle);

  return (
    <Router>
       <Backdrop show={toggle} click={toggleHandler}/>
      <Navbar show={toggle} click={toggleHandler}/>  
      <Sidebar show={toggle}/>   
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
  );
}

export default App;
