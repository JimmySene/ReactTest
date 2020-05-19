import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {

    state = {
        cars: [
            {
                brand: "Ford",
                color: "Bleue",
                year: "2000"
            },
            {
                brand: "Mercedes",
                color: "Noire",
                year: "2010"
            },
            {
                brand: "BMW",
                color: "Blanche",
                year: "2018"
            }
        ]
    }

    year = new Date().getFullYear();

    render() {
        return(
            <div>
                <h1>Catalogue de voitures</h1>
                {
                    this.state.cars.map((car, index) => {
                        return(
                            <Car key={index} brand={car.brand} color={car.color} year={this.year - car.year} />
                        )
                    })
                }
            </div>
        )
    }
}

export default MyCars;