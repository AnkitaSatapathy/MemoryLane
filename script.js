document.addEventListener('DOMContentLoaded', () => {
    // Get the RSVP button
    const rsvpButton = document.getElementById('rsvpButton');

    // Add event listener for the button
    rsvpButton.addEventListener('click', function () {
        // Show a prompt message when the button is clicked
        alert("Your response has been recorded. I’m excited to see you!");
    });
});
