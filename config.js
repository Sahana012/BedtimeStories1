import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAo2w9hhacUyZMsUZRenan2SbmOOMwW42U",
  authDomain: "bedtime-stories-b98b9.firebaseapp.com",
  projectId: "bedtime-stories-b98b9",
  storageBucket: "bedtime-stories-b98b9.appspot.com",
  messagingSenderId: "77770386133",
  appId: "1:77770386133:web:384cf5b452ca609b3c105c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();