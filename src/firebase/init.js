import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyC7KKGdpf_hyH7ILn52j-mSHb5hECt5HKU',
  authDomain: 'tacos-7ebbf.firebaseapp.com',
  databaseURL: 'https://tacos-7ebbf.firebaseio.com',
  projectId: 'tacos-7ebbf',
  storageBucket: 'tacos-7ebbf.appspot.com',
  messagingSenderId: '1006091722992'
}

firebase.initializeApp(config)
