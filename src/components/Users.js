import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        data : {}
    }

    componentDidMount() {
        const userID =  this.props.match.params.id;
        axios({
            method: "get",
            url:"https://jsonplaceholder.typicode.com/users"
        }).then(resp => {
            this.setState({data:resp.data[userID]});
        });

    }

    render() {
        
        return(
            this.state.data ? (
        <div>
            <h1>Utilisateur {this.state.data.username}</h1>
            <p>Email : {this.state.data.email }</p>
        </div>
            ) : (
                <div>
                    <p>Cet utilisateur n'existe pas !</p>
                </div>
            )
        );
    }
}

export default Users;