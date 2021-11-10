import React from 'react';
import data from '../custom/stats.json';

export default class Stats extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            players: data.players
        }


    }


    render(){
        return (
            <div>
                <table style={{width: '100%'}}>
                    <tr><th>#</th><th>Name</th><th>Pos</th><th>GP</th><th>G</th><th>A</th><th>PTS</th><th>PPGA</th><th>PIM</th><th>PPG</th><th>SHG</th><th>GWG</th></tr>
                    {this.state.players.map((player) => 
                        <tr><td>{player.number}</td><td>{player.name}</td><td>{player.pos}</td><td>{player.gp}</td><td>{player.g}</td><td>{player.a}</td><td>{player.pts}</td><td>{player.ppga}</td><td>{player.pim}</td><td>{player.ppg}</td><td>{player.shg}</td><td>{player.gwg}</td></tr>
                    )}
                </table>

            </div>
        );
    }
}