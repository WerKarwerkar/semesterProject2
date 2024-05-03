import { API_REGISTER } from "../constants.mjs";
import { API_AUTH, API_BASE } from "../constants.mjs";

const action = "/auth/register";
const method = "post";



export async function register(name, email, password) {
   

    const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
        headers: {
            "content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name, email, password })
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Failed to register");

}   



