import { API_ALLAUCTIONS } from "../constants.mjs";
const no_img_url = "https://static.vecteezy.com/system/resources/previews/022/014/063/large_2x/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
// const no_img_url = "./assets/img/mona lisa 1.jpg"
const bid_price = 5

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes} ${day}-${month}-${year}`;
}



window.getAuctions = async function(){
    const url = API_ALLAUCTIONS;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchResponse = await fetch(url, options);
    const jsonData = await fetchResponse.json();

    // Start building the first element
    let html = `
    <div class="container mt-5">
        <div class="row">
            <div class="col mb-3 ">
                <h2 class="subject fs-4">All Auctions</h2>
            </div>
        </div>
        <div class="row">
    `;

    jsonData.data.forEach((element, index) => {
        // If index is not divisible by 3, close the row and start a new one
        if (index % 3 === 0 && index !== 0) {
            html += `
                </div>
            </div>
            <div class="container mt-5'">
                <div class="row">
            `;
        }

        // Add auctions to existing row
        html += `
            <div class="col-md-4 mb-5">
                <div class="">
                    <img src="${element.media[0]?.url || no_img_url}" class="card-img img-fluid custom-rounded-bottom" alt="${element.media[0]?.alt || "Auction Without Image"}">
                    <div class="card-body">
                        <h5 class="card-title mt-4 mb-2 titlecustom">${element.title}</h5>
                        <p class="card-text mb-0 extrainfo">Current bid price: ${element._count.bids * bid_price} credits</p>
                        <p class="card-text extrainfo">Due date: ${formatDate(element.endsAt)}</p>
                        <div class="d-flex justify-content-center">
                            <a href="./specific-listing.html?id=${element.id}" class="btn btn-outline-primary custom-rounded pe-5 ps-5">Make an offer</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    // End the last row
    html += `
        </div>
    </div>
    `;

    document.getElementById('all-auctions-constainer').innerHTML = html;
}
getAuctions()

// const array = [{id:1,text:"hejka"},2,3,4,5,6,7,8,9]

// array.forEach(element => {
//     console.log(element)
// });