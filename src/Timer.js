import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state ={
            time : 0
        };
        this.timeCalculator = this.timeCalculator.bind(this);
    }
    componentDidMount(){
       this.timeCalculator = setInterval(this.timeCalculator,1000);
    }
    timeCalculator(){
        this.setState({
            time : new Date()- this.props.start
        });
    }
    render() {
        var time = Math.round(this.state.time/1000);
        return (
            <div className >  
               <span>{time} </span>
            </div>
        );
    }
}

export default Timer;
