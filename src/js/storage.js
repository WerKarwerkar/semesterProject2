// Function to set storage
export function setStorage(name, value) {
    localStorage.setItem(name, value);
}

// Function to get storage
export function getStorage(name) {
    var loggedIn = localStorage.getItem(name);
    return loggedIn
   
}
export function deleteStorage(name) {
    localStorage.removeItem(name);
}