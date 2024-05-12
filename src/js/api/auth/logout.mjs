import { deleteStorage } from "../../storage.js";

window.logOut = function(){
    deleteStorage("accesToken");
    deleteStorage("Profile");
    window.location.reload()
}
