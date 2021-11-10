import MyCalendar from './calendar.js';
import React from 'react';

export default class Schedule extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{backgroundColor: 'rgba(255,255,255,0.7)'}}>
                <MyCalendar/>
            </div>
        );
    }
}