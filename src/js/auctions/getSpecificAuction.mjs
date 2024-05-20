import { API_ALLAUCTIONS } from "../constants.mjs";
import { getStorage } from "../storage.js";

const query_url = new URL(window.location.href)
const params = new URLSearchParams(query_url.search); 
const id = params.get('id');

const no_img_url = "https://static.vecteezy.com/system/resources/previews/022/014/063/large_2x/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
const accessToken = getStorage('accesToken')


function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}-${month}-${year}`;
}



window.bid = async function(amount){
    const url = API_ALLAUCTIONS+`${id}/bids`;
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            "X-Noroff-API-Key": "ab56ab33-bc31-4630-a6a2-4c6744dbe4ab",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'amount': amount}) // Change object to string
    };
    
    const fetchResponse = await fetch(url, options);
    const jsonDataarray = await fetchResponse.json();
    // console.log(amount)
    window.location.reload()
    
    
}

window.getSpecificAuction = async function(){
   


    const url = API_ALLAUCTIONS+id+"?_bids=true";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchResponse = await fetch(url, options);
    const jsonData = await fetchResponse.json();
    const element = jsonData.data
    // console.log(element)
    const html = `
    <div class="container mt-5">
        <div class="row">
        <h2 class="subject mb-3 fs-4">${element.title}</h2>
        </div>

        <div class="container mb-5">
            <div class="row">

              <!-- Product's pictures -->
              <div class="col-md-6 mb-3">
                <div class="row mb-3">
                  <img src="${element.media[0]?.url || no_img_url}" alt="${element.media[0]?.alt || 'No image'}" class="img-fluid custom-rounded-top custom-rounded-bottom">
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <img src="${element.media[1]?.url || element.media[0]?.url || no_img_url}" alt="${element.media[1]?.alt || element.media[0]?.alt || 'No image'}" class="img-fluid custom-rounded-top custom-rounded-bottom">
                  </div>
                  <div class="col-md-6 mb-3">
                    <img <img src="${element.media[2]?.url || element.media[0]?.url || no_img_url}" alt="${element.media[2]?.alt || element.media[0]?.alt || 'No image'}" class="img-fluid custom-rounded-top custom-rounded-bottom">
                  </div>
                </div>
              </div>



                  <!-- Product description -->
              <div class="col-md-6">
                <div class="row">
                  <div class="col-6 text-start">
                    <h5 >Current bid</h5>
                    <h5 class="text-muted">Next bid</h5>
                  </div>
                  <div class="col-6 text-end">
                    <h5>${element.bids[element.bids.length - 1]?.amount || 0}  credit</h5>
                    <h5 class="text-muted">${element.bids[element.bids.length - 1]?.amount + 1 || 1} credit</h5>

                  </div>
                </div>
                <div class="row my-4 ">
                  <div class="col-6">
                    <div class="dropdown">
                      
                      
                  </div>  
                </div>
                <div class="col-6">
                ${new Date(element.endsAt) < new Date() ? '<button class="btn btn-dark w-100">Auction ended</button>' : (accessToken ? `<button class="btn btn-dark w-100" onClick="bid(${element.bids[element.bids.length - 1]?.amount + 1 || 1})">Bid Now</button>` : ' <button class="btn btn-dark w-100" onClick="loginmodal()">Log in to bid</button>')}

         
                  </div>
                </div>
                <hr class="custom-hr">

                <div class="row">
                  <div class="col-6 text-start">
                    <h5 class="text-muted">Due date</h5>
                    </div>
                    <div class="col-6 text-end">
                      <h5 class="text-muted">${formatDate(element.endsAt)}</h5>
                  </div>
                </div>
                <div class="row my-4">
                  <div class="col-12 mt-3">
                    <h5>Description</h5>
                    <p>${element.description}</p>
                  </div>
                </div>
                <hr class="custom-hr mb-5">

               
              
                <!-- Shipping options -->
                <div class="row mt-5">
                  <div class="col-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/img/shipping/Group 46.jpg" class="img-fluid">
                  </div>
                  <div class="col-2 text-center d-flex align-items-center justify-content-center">
                    <p>or</p>
                  </div>
                  <div class="col-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/img/shipping/Group 47.jpg" class="img-fluid">
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
     `
    document.getElementById('auction-container').innerHTML = html;
}
getSpecificAuction()

