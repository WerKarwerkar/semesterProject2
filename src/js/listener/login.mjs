import login from "../api/auth/login.mjs";



window.listenLogIn = function(){
        
    const sign_in_form = document.querySelector('#log-in-form');
    sign_in_form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(sign_in_form);
        const profile = Object.fromEntries(formData.entries());

      
        const fetchResponse = await login(profile);
           
    });
}