import createListing from "../auctions/createListing.mjs";

window.listenCratingListing = function(){
        
    const create_form = document.querySelector('#create-listing');


    create_form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(create_form);
        const profile = Object.fromEntries(formData.entries());

      
        const fetchResponse = await createListing(profile);
           

    });
}