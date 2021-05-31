import AppWrapper from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyB6aH60VwZiSpQnnOvCK4t6PhE4weP9xDQ",
//     authDomain: "beliv-315217.firebaseapp.com",
//     projectId: "beliv-315217",
//     storageBucket: "beliv-315217.appspot.com",
//     messagingSenderId: "422317457275",
//     appId: "1:422317457275:web:bd4b69b6c6cbd543b787de",
//     measurementId: "G-SHZ1VK8RRZ"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
