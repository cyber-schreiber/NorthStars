import React from 'react';
import graphic from '../custom/graphic.png';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{display: 'flex', height: '20vh', backgroundColor: 'rgba(255,255,255,0)'}}>

                <div style={{flex: 5, display: 'flex', flexDirection: 'column', marginRight: 10}}>

                    <div style={{backgroundColor: 'rgba(255,255,255,0.7)', padding: 20, fontSize: 22, display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: 300}}>
                            <a target="_blank" href="https://www.majorserieslacrosse.ca/">Owen Sound Majors Classic Series Info</a>
                        </div>
                    </div>

                    <div style={{backgroundColor: 'rgba(255,255,255,0.7)', marginTop: 20, padding: 20, fontSize: 22, display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: 300}}>                    
                        <a target="_blank" href="https://www.majorserieslacrosse.ca/news">Updates and News About League and Teams</a>
                        </div>
                    </div>
                </div>
                <div style={{flex: 3, marginLeft: 10}}>
                    <img src={graphic} style={{width: '100%'}}/>
                </div>

            </div>
        );
    }
}