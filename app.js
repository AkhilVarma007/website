// Access the camera and display the video stream
const video = document.getElementById('video');
const scanBtn = document.getElementById('scan-btn');
const statusText = document.getElementById('status');
const studentName = document.getElementById('student-name');
const studentId = document.getElementById('student-id');
const studentStatus = document.getElementById('student-status');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: ", err);
        statusText.textContent = "Error accessing the camera.";
    });

    
   // Function to start camera
   async function startCamera() {
    try {
        // Request user media (camera)
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Get the video element and set the stream as the source
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

// Simulate face scanning and database matching
scanBtn.addEventListener('click', () => {
    statusText.textContent = "Scanning...";
    setTimeout(() => {
        // Simulate a successful scan and database match
        const studentData = {
            name: "Akhil VArma",
            id: "086254",
            access: "Granted"
        };

        studentName.textContent = `Name: ${studentData.name}`;
        studentId.textContent = `ID: ${studentData.id}`;
        studentStatus.textContent = `Access: ${studentData.access}`;
        statusText.textContent = "Scan complete. Access granted.";
    }, 2000); // Simulate a 2-second delay for scanning
});



