import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDeNwR4FT8l4vzes33akPt65yV5YY2S3rI",
    authDomain: "invoice-app-yt-b048d.firebaseapp.com",
    projectId: "invoice-app-yt-b048d",
    storageBucket: "invoice-app-yt-b048d.appspot.com",
    messagingSenderId: "761884376635",
    appId: "1:761884376635:web:7ed629fc79dbaf8412a61e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()