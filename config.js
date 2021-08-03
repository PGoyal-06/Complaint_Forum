import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyBeIj8_9tGf_LoXWYAHLXYaDsx6Ov2n7mE",
  authDomain: "project-71-96700.firebaseapp.com",
  projectId: "project-71-96700",
  storageBucket: "project-71-96700.appspot.com",
  messagingSenderId: "369488605368",
  appId: "1:369488605368:web:da22c264c8fb4ada72044d"
};
if(!firebase.apps.length){
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore()

