export function sum(a, b) {
    return a + b;
}

const params = new URLSearchParams(location.search);
const user = params.get("name");

const el = document.getElementById("welcome");
if (el) {
    // Solución segura: usar textContent en lugar de innerHTML
    el.textContent = "Hola, " + user;
}
