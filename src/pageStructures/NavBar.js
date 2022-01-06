import {React} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

function NavBar() {
    return (
<nav className="mynavbar navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex flex-row justify-content-between align-items-center">
    <div className="brand">
      <a className="navbar-brand" href="/">
        <FontAwesomeIcon className="icon" icon={faReact} />
        Front-End Comparator
        <FontAwesomeIcon className="icon" icon={faChartBar} />
      </a>
    </div>
    <div className="menu">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav d-flex justify-content-between align-items-baseline">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/smload">Sm load</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mdload">Md load</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lgload">Lg load</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crud">CRUD</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animations">Animations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/changingdata">Changing data</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item app-change d-flex flex-row">
            <a className="nav-link p-1" href="http://localhost:4200/about" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faAngular} /></a>
            <a className="nav-link p-1" href="/"><FontAwesomeIcon className="icon" icon={faReact} /></a>
            <a className="nav-link p-1" href="/"><FontAwesomeIcon className="icon" icon={faVuejs} /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    );
}

export default NavBar;