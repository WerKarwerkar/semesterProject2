import { API_PROFILE } from "../constants.mjs";
import { getStorage } from "../storage.js";

const no_img_url = "https://static.vecteezy.com/system/resources/previews/022/014/063/large_2x/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
const accessToken = getStorage('accesToken')
const name = (JSON.parse(getStorage("profile")).name)

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes} ${day}-${month}-${year}`;
}

window.getBids = async function(){
    const url = API_PROFILE+`${name}/bids?_listings=true`;
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
    const bids = jsondata.data
    // console.log(bids)


    // Begin of main element
    let html = `
    <div class="container mt-5">
    <div class="row">
        <div class="col d-flex justify-content-between align-items-center px-">
            <h2 class="subject fs-4">Your Bids</h2>
            </div>
    </div>
    <div class="row">
    `;

    bids.forEach((element, index) => {
        // If index is divisible by 3 and not 0 start new row
        if (index % 3 === 0 && index !== 0) {
            html += `
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
            `;
        }

        // Add auction to actual row
        html += `
            <div class="col-md-4 mb-5">
                <div class="hi">
                    <div class="card-body">
                        <h5 class="card-title mt-4 mb-2">${element.listing.title}</h5>
                        <p class="card-text">Due date: ${formatDate(element.listing.endsAt)}</p>
                        <div class="d-flex justify-content-center">
                            <a href="./specific-listing.html?id=${element.listing.id}" class="btn btn-outline-primary custom-rounded pe-5 ps-5">Check bid</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    // End of main element
    html += `
        </div>
    </div>
    `;
    
    document.querySelector('#your-bids').innerHTML = html

    // window.location.reload()
}
getBids()