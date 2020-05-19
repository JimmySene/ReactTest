import React from 'react';
import Car from '../car.png';

class Form extends React.Component {

    state = {
        username: '',
        color: '',
        comment: '',
        colors: ["", "blue", "yellow", "green", "red", "black"]
    }

    handlePseudo = e => {
        this.setState({
           username: e.target.value
        })
    }

    handleColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleComment = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleForm = e => {
        e.preventDefault();
        console.log("Formulaire envoyé !", this.state)
    }

    render() {
        return(
            <div>
                <h1>Formulaire</h1>
                <img src={Car} alt=""/>
                <form onSubmit={this.handleForm}>
                    <div>
                        <label>Pseudo</label>
                        <input id="for" type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select name="color" id="color" onChange={this.handleColor}>
                            { this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                            }) }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea name="comment" id="comment" cols="30" rows="10" value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                    <input type="submit" value="Envoyer !"/>
                </form>
                <div>
                    <h2>Résultat :</h2>
                    <p>Pseudo : {this.state.username}<br/>
                    Couleur : {this.state.color}<br />
                    Commentaire : {this.state.comment}</p>
                </div>
            </div>
        );
    }
}

export default Form;