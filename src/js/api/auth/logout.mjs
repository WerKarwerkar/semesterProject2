import { deleteStorage } from "../../storage.js";

window.logOut = function(){
    deleteStorage("accesToken");
    deleteStorage("profile");
    window.location.reload()
}
