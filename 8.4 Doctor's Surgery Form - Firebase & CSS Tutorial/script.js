// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIc_5r7G2LOec7b4_seCS01ZaNB09g-OI",
  authDomain: "doctor-s-surgery.firebaseapp.com",
  databaseURL: "https://doctor-s-surgery-default-rtdb.firebaseio.com",
  projectId: "doctor-s-surgery",
  storageBucket: "doctor-s-surgery.appspot.com",
  messagingSenderId: "452392020909",
  appId: "1:452392020909:web:aedb0cc51e212796868f24",
  measurementId: "G-D8E0E4J39L"
};


firebase.initializeApp(firebaseConfig);

// Initialize Firebase Database
const database = firebase.database();

// Wrap code in Event Listener (ensure that the script is executed after the HTML content has been loaded.)
document.addEventListener('DOMContentLoaded', function () {
  // Get form element by its ID
  const form = document.getElementById('patient-form');
  // Handle form submission
  form.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get values from form input fields
    const doctorName = document.getElementById('doctor-name').value;
    const patientName = document.getElementById('patient-name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const sex = document.getElementById('sex').value;

    // Create a new reference in the Firebase database
    const patientsRef = database.ref('patients');

  // After processing, navigate to "patients.html"
        window.location.href = 'patients.html';

    // Push patient data to the database
    patientsRef.push({
        doctorName: doctorName,
        patientName: patientName,
        age: age,
        address: address,
        sex: sex
            
    });
  });

    // Clear the form fields
     form.reset();
});

// Reference to the "patients" data in Firebase
const patientsRef = database.ref('patients');

// Function to display patient data
function displayPatients(snapshot) {
    const patientList = document.getElementById('patient-list');
    console.log('patientList:', patientList); // Debugging line
    patientList.innerHTML = ''; // Clear existing data

    snapshot.forEach(function (childSnapshot) {
        const data = childSnapshot.val();
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.doctorName}</td>
            <td>${data.patientName}</td>
            <td>${data.age}</td>
            <td>${data.address}</td>
            <td>${data.sex}</td>
        `;
        patientList.appendChild(row);
    });
}

// Listen for changes in the patient data and update the display
patientsRef.on('value', function (snapshot) {
    displayPatients(snapshot);
});
