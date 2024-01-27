// Initialize Firebase Database
const database = firebase.database();

// Get form element
const form = document.getElementById('patient-form');



// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const doctorName = document.getElementById('doctor-name').value;
    const patientName = document.getElementById('patient-name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const sex = document.getElementById('sex').value;
    
    // Push data to Firebase
    const patientsRef = database.ref('patients');
    patientsRef.push({
        doctorName,
        patientName,
        age,
        address,
        sex
    });
    
    // Clear the form
    form.reset();
});