import React from 'react';
import {IoCallOutline, IoMailOutline} from 'react-icons/io5';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{backgroundColor: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', padding: 20}}>

                <div style={{marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><IoCallOutline size={30} style={{marginRight: 10}}/> (310)-924-1961</div>
                <div style={{marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><IoMailOutline size={30} style={{marginRight: 10}}/> northstarslax@gmail.com</div>
                <a 
                target="_blank"
                href="http://northstarslax.com/assets/NorthStars_2020_3_fold_sponsorship_bro72469.pdf">Click here for Sponsorship Information</a>

            </div>
        );
    }
}