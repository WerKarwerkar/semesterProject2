import { API_PROFILE } from "../constants.mjs";
import { getStorage } from "../storage.js";

const accessToken = getStorage('accesToken')
const name = (JSON.parse(getStorage("profile")).name)

window.getProfile = async function(){
    const url = API_PROFILE+`${name}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            "X-Noroff-API-Key": "ab56ab33-bc31-4630-a6a2-4c6744dbe4ab",
            'Content-Type': 'application/json' 
        },
      
    };
    
    const fetchResponse = await fetch(url, options);
    const jsondata = await fetchResponse.json();
    const profile = jsondata.data

    let html = `
    <div class="row">
        <div class="col d-flex justify-content-evenly align-items-center px-5">
            <img id="avatar-display" src="${profile.avatar.url}" class="img-fluid fluido" alt="${profile.avatar.alt}">
            <h4 class="user"> Hello - ${profile.name}</h4>
        </div>
    </div>
    <input type="text" id="avatar">
    <button onclick="changeAvatar()">Zmien</button>
    <h4 class="" id="avatar-error"></h4>
      <hr class="hr-custom mt-5">
    `

    document.querySelector('#profile-display').innerHTML = html
    document.querySelector('#credits').innerHTML = ` ${profile.credits} Credits`
    // window.location.reload()
}
getProfile()