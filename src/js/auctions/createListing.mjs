import { API_CREATE } from "../constants.mjs";
import { getStorage } from "../storage.js";

const accessToken = getStorage('accesToken')

export default async function createListing(info) {
    const reg_message_display = document.querySelector('#create-listing #reg-message');
  

    const mediaArray = info.url.split(',').map((url_input, index) => ({
        url: url_input,
        alt: `Image ${index + 1}`
    }));
    info.media = mediaArray;


    const tagsArray = info.tags.split(',').map(tag => tag.trim());
    info.tags = tagsArray;



    var reg_message = ""
    try {
        const url = API_CREATE;
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                "X-Noroff-API-Key": "ab56ab33-bc31-4630-a6a2-4c6744dbe4ab",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        const fetchResponse = await fetch(url, options);
        if (fetchResponse) {
            const responseData = await fetchResponse.json();
            const listing = responseData.data

            ShowMessage(false, "Listing Created ", `/specific-listing.html?id=${listing.id}`)
        } else {
            const responseData = await fetchResponse.json();
            reg_message = responseData.errors[0].message

            ShowMessage(true, `Creating listing failed: ${reg_message}`)
        }
    } catch (error) {
        reg_message = error;

        ShowMessage(true, `Creating filed: ${reg_message}`)
    }
    
    function ShowMessage(error, message, location){
        if(error){
            console.error(message);
            reg_message_display.innerHTML = message
        }else{
            console.log(message);
            reg_message_display.innerHTML = message
            setTimeout(() => {
                window.location=location
            }, 1000);
        }
    }
}
