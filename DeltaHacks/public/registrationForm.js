var firebaseConfig = {
    apiKey: "AIzaSyBfsB2GdQYXOhE1WzObP8Wr7N9Ha3q41qo",
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
let formMessage = firebase.database().ref('registerForm');

//listen for submit event//
document.getElementById('registrationForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    let phone = document.querySelector('#phone').value;
    let busiName = document.querySelector('#busiName').value;
    let busiAddress = document.querySelector('#busiAddress').value;

    //send message values
    sendMessage(name, email, password, phone, busiName, busiAddress);

    //Form Reset After Submission
    document.getElementById('registrationForm').reset();

    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';
    }, 7000);
  }

function sendMessage(name, email, password, phone, busiName, busiAddress) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      password: password,
      phone: phone,
      busiName: busiName,
      busiAddress: busiAddress
    });
}
