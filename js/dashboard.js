// Cargar datos al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const student = getStudentData();
    if (!student) window.location.href = "index.html";

    // Mostrar información básica
    document.getElementById("studentName").textContent = student.studentName;
    document.getElementById("classGrade").textContent = student.classInfo.grade;

    // Renderizar calificaciones
    const gradesList = document.getElementById("gradesList");
    student.grades.forEach(subject => {
        gradesList.innerHTML += `
            <li>${subject.subject}: <span class="grade">${subject.grade}</span></li>
        `;
    });

    // Cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
        sessionStorage.removeItem('currentUser');
        window.location.href = "index.html";
    });
});