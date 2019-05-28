import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4MzBtnreXykRgza55pVHqv55gajLwgrY",
    authDomain: "smoothies-5787d.firebaseapp.com",
    databaseURL: "https://smoothies-5787d.firebaseio.com",
    projectId: "smoothies-5787d",
    storageBucket: "smoothies-5787d.appspot.com",
    messagingSenderId: "931619094177",
    appId: "1:931619094177:web:265657ddde23e486"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  

  //export firestore database
  export default firebaseApp.firestore()