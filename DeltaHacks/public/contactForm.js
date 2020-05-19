var firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "nourish-b38bd.firebaseapp.com",
    databaseURL: "https://nourish-b38bd.firebaseio.com",
    projectId: "nourish-b38bd",
    storageBucket: "nourish-b38bd.appspot.com",
    messagingSenderId: "393414666328",
    appId: "1:393414666328:web:6ab91ee3dd9844938cc22d",
    measurementId: "G-CM9L47PV4S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.database().ref('contactForm');

//listen for submit event//
document.getElementById('contactForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#mail').value;
    let message = document.querySelector('#contactMessage').value;

    //send message values
    sendMessage(name, email, message);

    //Form Reset After Submission
    document.getElementById('contactForm').reset();

    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';
    }, 7000);
}

function sendMessage(name, email, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      message: message,
    });
}
