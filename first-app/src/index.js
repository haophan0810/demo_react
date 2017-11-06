import React from 'react';
import ReactDOM from 'react-dom';

import Headerrr from './head'



// first component

class Bodyyy extends React.Component{
    render(){
        return (
            <h1 id="h1">i am Bodyyy </h1>
        )
    }

}
class Footerrr extends React.Component{
    render(){
        return (
            <h1 className="test">i am Footerrr </h1>
        )
    }

}

// homework: tao 3 file voi 3 component , export, su dung tuy bien


ReactDOM.render(
    <div> 
        <Headerrr name="Ronanldo" weight="50kg" age={40} color="red"/>
        <Headerrr name="David" weight="70KG" age={60} color="blue"/>
        
    </div>
    
   ,

    document.getElementById('root')

)
