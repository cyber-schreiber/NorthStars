
import React, {useState, useEffect} from "react";
import { NewPhoto  } from "./NewPhoto";

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {app} from '../base';

const db = app.firestore();



export const PhotoGallery = () => {

    const [images, setImages] = useState([]);
    const [addImage, setAddImage] = useState(false);
    const [auth, setAuth] = useState(false);
    const [password, setPassword] = useState("");

    const album = "first album";

    useEffect(() => {
        db.collection('albums').doc(album).onSnapshot((doc) => {
            setImages(doc.data().images);
        })
    }, []);

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{maxWidth: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Carousel>
                    {
                        images.map(image => 
                            <aside key={image.name}>
                                <h3 style={{color: 'white'}}>{image.name}</h3>
                                <img src={image.url} alt="album"/>
                            </aside>
                        )
                    }
                    
                </Carousel>
            </div>

            {!auth && !addImage && <button onClick={() => setAddImage(true)}>Upload image</button>}
            {!auth && addImage && <div><input type="password" value={password} onChange={onPasswordChange}/><button onClick={() => {if (password=="hack"){setAuth(true);}}}>Submit password</button></div>}
            {auth && <footer><NewPhoto currentAlbum={album}/></footer>}
                
        </div>
    );
    
}

