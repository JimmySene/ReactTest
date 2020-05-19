import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {

    state = {
        title: "Catalogue de voitures"
    }

    noCopy = () => {
        alert('Merci de ne pas copier !');
    }

    changeTitle = (title) => {
        this.setState({title});
    }

    changeInput = (e) => {
        this.setState({title:e.target.value})
    }
   

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, libero! Odit ipsa dignissimos ut quia eveniet nobis eius maxime illo totam, delectus id esse fugiat doloremque perferendis excepturi vel quo.</p>
                <Car brand="Ford" color="" />
                <Car brand="Mercedes" color="Noire" />
                <Car brand="BMW" color="Bleue" />
                <input type="text" onChange={this.changeInput} value={this.state.title}/>
                <button onClick={() => this.changeTitle("Nouveau titre !")}>Changer le titre</button>
            </div>
        )
    }
}

export default MyCars;