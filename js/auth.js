const users = [
    {
        username: "padre1",
        password: "1234",
        parentName: "Eduardo Lara",
        studentName: "Eduardo Emiliano Lara"
    }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
