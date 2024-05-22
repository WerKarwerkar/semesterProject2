import { API_REGISTER, } from "../../constants.mjs";


export default async function register(profile) {
    const reg_message_display = document.querySelector('#sign-in-form #reg-message');
    var reg_message = ""
    try {
        const url = API_REGISTER;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        };
        const fetchResponse = await fetch(url, options);
        if (fetchResponse) {
            const responseData = await fetchResponse.json();

            ShowMessage(false, "Account created! ", "/")
        } else {
            const responseData = await fetchResponse.json();
            reg_message = responseData.errors[0].message

            ShowMessage(true, `Creating account failed: ${reg_message}`)
        }
    } catch (error) {
        reg_message = error;

        ShowMessage(true, `Registration failed: ${reg_message}`)
    }
    
    function ShowMessage(error, message, location){
        if(error){
            console.error(message);
            reg_message_display.innerHTML = message
        }else{
            console.log(message);
            reg_message_display.innerHTML = message
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }
}
