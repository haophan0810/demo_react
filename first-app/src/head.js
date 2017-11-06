import React from 'react';


//declare a component, customized with props

class Headerrr extends React.Component{
    render(){
        return (
            <div>
                <h1>i am {this.props.name}</h1>
                <h2>weight: {this.props.weight}</h2>
                <h3>age: {this.props.age} years old. </h3>
                <h3>My favourite color is {this.props.color} </h3>
            </div>
        )
    }

}

export default Headerrr;