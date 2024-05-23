import { API_PROFILE } from "../constants.mjs";
import { getStorage } from "../storage.js";


if(getStorage('accesToken')){
    console.log("hi")
}else{
    window.location = "/"
}
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
        <div class="col d-flex justify-content-evenly align-items-center mb-3 text-center">
            <img id="avatar-display" src="${profile.avatar.url}" class="img-fluid avatar" alt="${profile.avatar.alt}">
            <h4 class="user wrap-text"> Hello - ${profile.name}</h4>
        </div>
    </div>
    <form class="d-flex justify-content-start px-5">
    <input class="form-control custom-rounded form-width" type="text" id="avatar" placeholder="Add image url">
    <button class="btn btn-secondary pe-4 ps-4" onclick="changeAvatar()">Change Avatar</button>
    <h4 class="" id="avatar-error"></h4>
    </form>
      <hr class="hr-custom mt-5">
    `

    document.querySelector('#profile-display').innerHTML = html
   
    setTimeout(() => {
        document.querySelector('#credits').innerHTML = ` ${profile.credits} Credits`
    }, 500);

    // window.location.reload()
}
getProfile()