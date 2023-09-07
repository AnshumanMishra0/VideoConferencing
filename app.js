// Get access to user's camera and microphone (you need to handle permissions in a real app)
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
        const localVideo = document.getElementById('localVideo');
        localVideo.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing camera and microphone:', error);
    });

// Create a WebSocket connection for chat (you need a server for this)
const socket = new WebSocket('ws://your-chat-server-url');

socket.addEventListener('open', (event) => {
    // Handle connection opened
});

socket.addEventListener('message', (event) => {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p>${event.data}</p>`;
});

document.getElementById('send-button').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    // Send the message to the server (you need to implement server-side logic)
    socket.send(message);

    // Display the message locally
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p>${message}</p>`;

    // Clear the input field
    chatInput.value = '';
});
