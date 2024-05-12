
function ScrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed"); // Log to indicate that the DOM has finished loading
   
    // Check login state
    checkLogState().then(loggedIn => {
        console.log(loggedIn); // Log the login state to the console
        
        if (loggedIn) {
            // If the user is logged in
            const logoutButton = document.querySelector('.przyciskkk'); // Select the logout button
            logoutButton.textContent = 'Log Out'; // Update button text to "Log Out"
 
            // Add click event to log out
            logoutButton.addEventListener('click', logOut);
 
            // For the second button
            const profileButton = document.querySelector('.przyciskkk2'); // Select the profile button
            profileButton.innerHTML = `<a style="text-decoration: none" href="/profile.html">Profile</a>`; // Update inner HTML with a link to the profile page
 
            // Remove the onclick attribute if it exists
            profileButton.removeAttribute('onclick');
        }
    }).catch(error => {
        // Log an error if checking the login state fails
        console.error("An error occurred while checking the login state:", error);
    });
});
