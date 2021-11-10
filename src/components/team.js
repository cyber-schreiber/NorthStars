import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from '../custom/stats.json';

import player3 from '../custom/teamphotos/3.png';
import player4 from '../custom/teamphotos/4.png';
import player5 from '../custom/teamphotos/5.png';
import player17 from '../custom/teamphotos/17.png';
import player45 from '../custom/teamphotos/45.png';

export default class Team extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imgs: {
                3: player3,
                4: player4,
                5: player5,
                17: player17,
                45: player45,
            }
        }
    }

    render(){
        return (<div style={{display: 'flex', justifyContent: 'center'}}><div style={{maxWidth: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {!!this.state.imgs ? <Carousel>
                {data.players.map((player) => 
                    {
                    let imgSrc = this.state.imgs[player.number];
                    return (<div>
                        <img src={imgSrc} />
                        <p className="legend" style={{marginBottom: 0, }}>{player.name}</p>
                    </div>)}
                )}
                
            </Carousel> : <div/>}
            </div></div>
        );
    }
}