
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLZYEILeEJaG8b5ubkpPH0FSvlfSxLnzU",
    authDomain: "ekitch-6ec86.firebaseapp.com",
    databaseURL: "https://ekitch-6ec86.firebaseio.com",
    projectId: "ekitch-6ec86",
    storageBucket: "ekitch-6ec86.appspot.com",
    messagingSenderId: "333787714683",
    appId: "1:333787714683:web:ab20e7d2a26dd712007ede",
    measurementId: "G-BDJZDYZ8DP"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;