import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  "projectId": "northstars",
  "appId": "1:946822983740:web:083d8a37b5bfc6a8f39339",
  "storageBucket": "northstars.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyD02fNhb5ALDyjLhTEBjvL3ys3ATbOA0h8",
  "authDomain": "northstars.firebaseapp.com",
  "messagingSenderId": "946822983740"
});

