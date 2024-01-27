// Initialize Firebase Database
const database = firebase.database();

// Reference to the patient data in Firebase
const patientsRef = database.ref('patients');

// Function to display patient data
function displayPatients(snapshot) {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear existing data
    
    snapshot.forEach((childSnapshot) => {
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
patientsRef.on('value', (snapshot) => {
    displayPatients(snapshot);
});