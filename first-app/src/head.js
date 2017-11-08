import React from 'react'

// class {ten component} extends React.Component{ 
//     render(){
//         return (
//             <content />
//         )
//     }
//  }

// props read-only
class Headerrr extends React.Component{
    constructor(){
        this.state = {
            name : "David",
            age : 27
        }
    }
    render(){
        return (
            <div>
                <h1>I am { this.state.name }</h1>
                <h2>I am { this.props.weight }</h2>
                <h2>I am { this.props.age } years old.</h2>
                <h3>My favourite color is { this.props.color }</h3>
            </div>
        )
    }
}

// Exports components
export default Headerrr;