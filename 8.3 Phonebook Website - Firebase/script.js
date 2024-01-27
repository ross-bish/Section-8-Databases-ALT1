// Copy your web app's Firebase configuration here ...
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALGL2YjiwdrDB1KF9YqmpVUxP6-0vcYnc",
  authDomain: "phonebook-b37f2.firebaseapp.com",
  projectId: "phonebook-b37f2",
  storageBucket: "phonebook-b37f2.appspot.com",
  messagingSenderId: "85885986548",
  appId: "1:85885986548:web:61bc008c3af8041d3ca0a1",
  measurementId: "G-9XSJGXFDQH"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle (handle is a type of function)
const myDBCxn = firebase.database().ref('/Information');
//Information is the name of the root node in the project data tree. THIS IS WHAT STUDENTS WILL CHANGE

// Tell JavaScript to call saveData when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveData);

// Submit clicked so post the data to the server
function saveData() {
  // Read the data from the first name field
  const fNameField = document.getElementById("firstName");
  const fNameFieldValue = fNameField.value;

  // Read the data from the last name field
  const lNameField = document.getElementById("lastName");
  const lNameFieldValue = lNameField.value;

   // Read the data from the age field
  const numField = document.getElementById("contactNumber");
  const numFieldValue = numField.value;

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {firstName: fNameFieldValue,lastName: lNameFieldValue,contactNumber: numFieldValue});
}

// Code to retrieve and display the data goes here ...
myDBCxn.on("child_added", displayData);

function displayData(data, prevChildKey) {
    const datapoint = data.val();
    //info1, info2, info3 are the areas in the table
    document.getElementById("info1").value += datapoint.firstName + "\n";
    document.getElementById("info2").value += datapoint.lastName + "\n";
    document.getElementById("info3").value += datapoint.contactNumber + "\n";
}

