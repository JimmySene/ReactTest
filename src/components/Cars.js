import React from 'react';

const Car = (props) => {
    const color = props.color ? props.color : 'Aucune';
    if(props.brand)
    {
        return(
            <div style={{'backgroundColor':'pink', 'width':'400px', 'padding':'20px', 'margin':'5px auto'}}>
                <p>Marque : {props.brand}</p>
                <p>Couleur : {color}</p>
            </div>
        );
    } else{
        return <div></div>
    }
}

export default Car;