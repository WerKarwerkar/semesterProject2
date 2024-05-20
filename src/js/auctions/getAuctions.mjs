import { API_ALLAUCTIONS } from "../constants.mjs";
const no_img_url = "https://static.vecteezy.com/system/resources/previews/022/014/063/large_2x/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
const bid_price = 1

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes} ${day}-${month}-${year}`;
}



window.getAuctions = async function(limit,auctions, elementid, header){
    const url = API_ALLAUCTIONS+"?_bids=true";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchResponse = await fetch(url, options);
    const jsonDataarray = await fetchResponse.json();
    // console.log(jsonDataarray)
    const jsonData = jsonDataarray.data.slice(limit,limit + auctions);

    // Begin of main element
    let html = `
    <div class="container mt-5">
        <div class="row">
            <div class="col mb-3">
                <h2 class="subject fs-4">${header}</h2>
            </div>
        </div>
        <div class="row">
    `;


    jsonData.forEach((element, index) => {
        // If index is divisible by 3 and not 0 start new row
        if (index % 3 === 0 && index !== 0) {
            html += `
                </div>
            </div>
            <div class="container mt-5'">
                <div class="row">
            `;
        }
       

        // Add auction to actual row
        html += `
            <div class="col-md-4 mb-5 ${element?.tags?.map(tag => tag + "111").join(" ") || ""} kard" >
                <div class="hi">
                    <img src="${element.media[0]?.url || no_img_url}" class="card-img-top custom-rounded-top img-fluid fluido" alt="${element.media[0]?.alt || "Auction Without Image"}">
                    <div class="card-body">
                        <h5 class="card-title mt-4 mb-2 truncate">${element.title}</h5>
                        <p class="card-text mb-0">Current bid price: ${element.bids[element.bids.length - 1]?.amount + 1 || 0} credits</p>
                        <p class="card-text">Due date: ${formatDate(element.endsAt)}</p>
                        <div class="d-flex justify-content-center">
                            <a href="./specific-listing.html?id=${element.id}" class="btn btn-outline-primary custom-rounded pe-5 ps-5">See more</a>
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

    const element_2 = document.getElementById(elementid);
    if (element_2) {
        element_2.innerHTML = html;
    }
}


getAuctions(0,100,"all-auctions-constainer", "All Auctions")
getAuctions(Math.random() * 90 + 3,3,"one-auction", "Other Auctions")
getAuctions(Math.random() * 90 + 3,3,"landing-auctions", "Recent listings")