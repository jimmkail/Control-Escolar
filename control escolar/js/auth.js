// Simulación de base de datos de usuarios
const users = [
    {
        username: "padre1",
        password: "1234",
        parentName: "Sr. Pérez",
        studentName: "Juan Pérez"
    }
];

// Función para iniciar sesión
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}

// Evento al enviar el formulario
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
});