import React, { Component } from 'react';
import './App.css';
import Highmap from './components/Highchart'
import Test from './components/StateSelectToggle'



class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="Map">
                    <Test />

                </div>
                <div id="territoryInfo">
              
                    
                </div>
            </div>

        )
    }
}

export default App;