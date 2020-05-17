import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {
    render() {
        return(
            <div>
                <h1>Catalogue de voitures</h1>
                <Car brand="Ford" color="" />
                <Car brand="Mercedes" color="Noire" />
                <Car brand="BMW" color="Bleue" />
            </div>
        )
    }
}

export default MyCars;