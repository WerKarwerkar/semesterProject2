import { API_LOGIN, } from "../../constants.mjs";
import { setStorage, getStorage } from "../../storage.js";

var logged = false;

window.checkLogState = async function() {
    // console.log(logged);
   
    const storage_token = getStorage("accesToken");
    const storage_profile = getStorage("profile");
    // console.log(storage_profile, storage_token);
    
    if (!storage_profile || !storage_token) return false;

    // console.log("ew");
    
    try {
        const loginResponse = await login(JSON.parse(storage_profile), true);
        // console.log(loginResponse)
        if (loginResponse === true) {
            logged = true;
            // console.log("zalogowane");
            return true;
        } else {
            // console.log(loginResponse)
            return false;
        } 
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
}



export default async function login(profile, auto) {
    
    if(logged === true){
        // console.log("zalogowany")
        return true;
    }
    const reg_message_display = document.querySelector('#log-in-form #reg-message');
    var reg_message = ""
    try {
        const url = API_LOGIN;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        };
        const fetchResponse = await fetch(url, options);
        if (fetchResponse.ok) {
            const responseData = await fetchResponse.json();
            const accesToken= responseData.data.accessToken
            logged = true
            // console.log("ustanwowiaon logowanie")
            setStorage("accesToken", accesToken, 1);
            setStorage("profile", JSON.stringify(profile), 1);
            
            
            ShowMessage(false, "Logged ", "/")
            return true
        } else {
            const responseData = await fetchResponse.json();
            reg_message = responseData.errors[0].message


            ShowMessage(true, `Login Failed: ${reg_message}`)
            return false
        }
    } catch (error) {
        reg_message = error;


        ShowMessage(true, `Login failed: ${reg_message}`)
        return false
    }
    
    function ShowMessage(error, message, location){
        if(error){
            // console.error(message);
            if(!auto)reg_message_display.innerHTML = message
        }else{
            // console.log(message);
            if(!auto){
                reg_message_display.innerHTML = message
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        }
    }
}
