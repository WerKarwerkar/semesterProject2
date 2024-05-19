

//API URLS
export const API_BASE = 'https://v2.api.noroff.dev';
export const API_AUTH = '/auth';
export const API_REGISTER = API_BASE+API_AUTH+'/register';
export const API_LOGIN = API_BASE+API_AUTH+'/login';
export const API_CREATE = API_BASE+`/auction/listings`;
export const API_PROFILE = API_BASE+'/auction/profiles/';
export const API_KEY = API_BASE+API_AUTH+`/create-api-key`;
export const API_ALLAUCTIONS = API_BASE+"/auction/listings/";


//INPUTS
export const sign_in_form = document.querySelector('#sign-in-form');
export const name_input = document.querySelector('#inputName');
export const email_input = document.querySelector('#inputEmail');
export const pass_input = document.querySelector('#inputPassword');


