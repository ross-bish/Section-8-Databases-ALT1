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
  const ageField = document.getElementById("age");
  const ageFieldValue = ageField.value;

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {firstName: fNameFieldValue,lastName: lNameFieldValue,age: ageFieldValue});
}

// Code to retrieve and display the data goes here ...
myDBCxn.on("child_added", displayData);

function displayData(data, prevChildKey) {
    const datapoint = data.val();
    //info1, info2, info3 are the areas in the table
    document.getElementById("info1").value += datapoint.firstName + "\n";
    document.getElementById("info2").value += datapoint.lastName + "\n";
    document.getElementById("info3").value += datapoint.age + "\n";
}


