// Funkcja do ustawiania storage
export function setStorage(name, value) {
    localStorage.setItem(name, value);
}

// Funkcja do pobierania wartości storage
export function getStorage(name) {
    var loggedIn = localStorage.getItem(name);
    return loggedIn
   
}
export function deleteStorage(name) {
    localStorage.removeItem(name);
}