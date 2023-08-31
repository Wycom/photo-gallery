 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAGNCKkdsWKkBPlEt_kXrFkMB2IkidHHL8",
    authDomain: "photo-gallery-tutorial.firebaseapp.com",
    projectId: "photo-gallery-tutorial",
    storageBucket: "photo-gallery-tutorial.appspot.com",
    messagingSenderId: "947224576233",
    appId: "1:947224576233:web:3640fd5163261f9f0b7078"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };