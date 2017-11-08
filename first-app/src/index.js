import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"
// import component ve de render

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number: 0,
            inputValue1: 0,
            inputValue2: 0,
            name : "David"
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : parseInt(event.target.value)
        })
    }

    handleClick = () => {
        this.setState({
            number: this.state.inputValue1 + this.state.inputValue2 
        })
    }
    
    render(){
        return (
            <div>
                <input 
                name="inputValue1" 
                onChange={this.handleChange} 
                value={this.state.inputValue1} />
                <input 
                name="inputValue2"
                onChange={this.handleChange} 
                value={this.state.inputValue2} />
                <button onClick={this.handleClick}>click to add!</button>
                <h2>Sum: {this.state.number}</h2>
            </div>
        )
    }
}



// render noi dung ra trinh duyet
ReactDOM.render(
    <Hello />
    ,
    document.getElementById('root')
)

// Homework: tao 3 file voi 3 components, export, su dung va tuy bien
