import React, {useState} from "react";
import {app} from '../base';
import firebase from 'firebase';

const db = app.firestore();
const storage = app.storage();

export const NewPhoto = ({currentAlbum}) => {

    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const onUpload = async () => {
        if (file == null){alert('Please select a file to upload!'); return;}
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        db.collection("albums").doc(currentAlbum).update({
            images: firebase.firestore.FieldValue.arrayUnion({
                name: file.name,
                url: await fileRef.getDownloadURL(),
            })
        });
    }

    return (
        <div style={{backgroundColor: 'rgba(255,255,255,0.7)', padding: 15, borderRadius: 10}}>
            <input type="file" onChange={onFileChange}></input>
            <button onClick={onUpload}>Upload image</button>
        </div>
    );
}