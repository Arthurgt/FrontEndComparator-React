import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/about';
import Animations from './pages/animations';
import ChangingdataComponent from './pages/changingdata';
import Crud from './pages/crud';
import Smload from './pages/smload';
import Mdload from './pages/mdload';
import Lgload from './pages/lgload';
import Services from './pages/services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './pageStructures/NavBar';
import Footer from './pageStructures/Footer';
import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar></NavBar>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/animations" component={Animations}></Route>
        <Route exact path="/changingdata" component={ChangingdataComponent}></Route>
        <Route exact path="/crud" component={Crud}></Route>
        <Route exact path="/smload" component={Smload}></Route>
        <Route exact path="/mdload" component={Mdload}></Route>
        <Route exact path="/lgload" component={Lgload}></Route>
        <Route exact path="/services" component={Services}></Route>
      <Footer></Footer>
  </div>
  </Router>
  );
}

export default App;
