import React, { Component } from "react";
import Products from "./Products";
import Profiles from "./Profiles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect,
    useLocation,
    useHistory,
    useRouteMatch
  } from "react-router-dom";

class Marketplace extends Component {
    render() {
        return (
            <div>
                <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="http://3.bp.blogspot.com/-iDhD0zDbBHc/UiH6fo1pyoI/AAAAAAAAABc/PyF-s1hVoJs/s1600/jasa+pembuatan+toko+online+1.jpg"
                                alt="" width="30" height="24" className="d-inline-block align-text-middle" />
                            Shop.id
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Navigation/>
                    </div>
                </nav>
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route path="/profile"><Profile/></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Marketplace;

function Navigation() {
    return(
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
            </ul>
        </div>
    );
}

function Home() {
    return (
        <div><Products/></div>
    );
}

function Profile() {
    return (
        <div>
        <Profiles/>
        </div>
    );
}