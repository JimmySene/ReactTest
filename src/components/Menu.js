import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark right-align">
            <NavLink className="navbar-brand" to="/">React TEST</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/voitures">Catalogue de voitures</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/utilisateurs">Utilisateurs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/formulaire">Formulaire</NavLink>
                </li>
                </ul>
            </div>
    </nav>
    )
}

export default Menu;