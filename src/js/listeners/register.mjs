export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            console.log("it worked");
        });
    } else {
        console.error("Form not found");
    }
}