// Copy your web app's Firebase configuration here ...

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoOJWRNztLAPyJHMOKoKP99OQXNCXR_qQ",
  authDomain: "myfirstproject-47c2d.firebaseapp.com",
  databaseURL: "https://myfirstproject-47c2d-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-47c2d",
  storageBucket: "myfirstproject-47c2d.appspot.com",
  messagingSenderId: "564361599562",
  appId: "1:564361599562:web:4e0044b86fc26febd7e4b3",
  measurementId: "G-CSFQ32GY8Q"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle (handle is a type of function)
const myDBCxn = firebase.database().ref('/Contacts');
//Contacts is the name of the root node in the project data tree.

// Tell JavaScript to call saveData when SUBMIT button is clicked
const btn = document.getElementById("submit-data");

// btn.addEventListener("click", saveData);  *** ?? Why does this not work ?? ****

// Rob Shocks Solution
// Check if btn is present to avoid type error
if (btn) {
  btn.addEventListener("click", saveData);
}



// Submit clicked so post the data to the server
function saveData() {
  // Read the data from the Email Address field
  const eMail = document.getElementById("emailAddress");
  const eMailValue = eMail.value;
 

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set({emailAddress: eMailValue});
}

// Code to retrieve and display the data goes here ...
myDBCxn.on("child_added", displayData);

// Retrieve the new data and update the user interface accordingly. 
function displayData(data, prevChildKey) {
    const datapoint = data.val();
    //info1 is the area in the table
    document.getElementById("info1").value += datapoint.emailAddress + "\n";
   
}
