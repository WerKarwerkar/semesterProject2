
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

async function changeAvatar(){
    const avatarUrl = document.getElementById('avatar').value;

    const accessToken = localStorage.getItem('accesToken')
     const name = (JSON.parse(localStorage.getItem("profile")).name)


    const data = {
        bio: "",
        avatar: {
            url: `${avatarUrl}`,
            alt: "User avatar"
        },
        banner: {
            url: `${avatarUrl}`,
            alt: "User baner"
        }
    };
    try{

        const url = `https://v2.api.noroff.dev/auction/profiles/${name}`;
        const options = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                "X-Noroff-API-Key": "ab56ab33-bc31-4630-a6a2-4c6744dbe4ab",
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        };
        
        const fetchResponse = await fetch(url, options);
        const jsondata = await fetchResponse.json();
        const profile = jsondata.data
        // console.log(fetchResponse, name)
        if(fetchResponse.ok){
            ShowMessage(false, `Avatar changed`, "")
        }else{
            ShowMessage(true, `Cannot find URL`, "")
        }
        
    }catch(error){
        
    }

}

function ShowMessage(error, message, location){
    const reg_message_display = document.querySelector('#avatar-error');
    var reg_message = ""
    if(error){
        // console.error(message);
        reg_message_display.innerHTML = message
    }else{
        // console.log(message);
       
            reg_message_display.innerHTML = message
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        
    }
}


