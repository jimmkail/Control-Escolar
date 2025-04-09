const studentData = {
    studentName: "Eduardo Emiliano Lara",
    parentName: "Eduardo Lara",
    school: "Escuela Juan de la Barrera",
    classInfo: {
        grade: "6°",
        teacher: "Maestra Karelia",
        room: "A-12",
        shift: "Matutino"
    },
    grades: [
        { subject: "Matemáticas", grade: 9.5 },
        { subject: "Español", grade: 8.7 },
        { subject: "Ciencias", grade: 9.0 }
    ],
    tasks: [
        { 
            title: "Ensayo: La Independencia de México",
            dueDate: "2024-05-15",
            bookLink: "https://www.conaliteg.sep.gob.mx/2023/P2HIA.htm#page/82",
            page: 82
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("currentUser")) {
        window.location.href = "index.html";
        return;
    }

    // Mostrar datos del estudiante
    document.getElementById("parentName").textContent = studentData.parentName;
    
    // Cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
        if(confirm('¿Estás seguro de cerrar sesión?')) {
            sessionStorage.removeItem("currentUser");
            window.location.href = "index.html";
        }
    });
});
