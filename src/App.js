// import React, {useEffect, useState} from 'react';
// import {app} from './base';
// import {Switch, Route,} from 'react-router-dom';
// import { Album } from './Album';
// import { Home } from './Home';

// const db = app.firestore();

// function App() {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     db.collection('albums').onSnapshot((snapshot) => {
//       const tempAlbums = [];
//       snapshot.forEach(doc => {
//         tempAlbums.push({...doc.data(), id: doc.id});
//       });
//       setAlbums(tempAlbums);
//     })
//   }, []);

//   return (
//     <>
      
//       <Switch>
//         <Route exact path="/" render={() => <Home albums={albums}/>}/>
//         <Route path="/:album" component={Album} />  
//       </Switch>
//     </>
//   );
// }

// export default App;

import banner from './custom/banner.png';
import './App.css';
import NavbarComp from './components/navbar';

function App() {
  return (
    <div className="App">
      <img src={banner} alt="" />
      <NavbarComp/>
    </div>
  );
}

export default App;
