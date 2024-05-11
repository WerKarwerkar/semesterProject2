import register from "../api/auth/register.mjs";



window.listenSignIn = function(){
        
    const sign_in_form = document.querySelector('#sign-in-form');
    sign_in_form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(sign_in_form);
        const profile = Object.fromEntries(formData.entries());

      
        const fetchResponse = await register(profile);
           
    });
}