import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAWCPdiy5vxxqP2wXnCULrQID9-GpX9G0g',
  authDomain: 'material-ui-learning-13c87.firebaseapp.com',
  projectId: 'material-ui-learning-13c87',
  storageBucket: 'material-ui-learning-13c87.appspot.com',
  messagingSenderId: '338411008953',
  appId: '1:338411008953:web:e6110b1e6e35c4cecc7c68',
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
