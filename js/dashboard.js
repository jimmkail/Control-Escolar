// Datos del estudiante (simulados)
const studentData = {
    studentName: "Eduardo Emiliano Lara",
    parentName: "Eduardo Lara",
    schoolName: "Escuela Juan de la Barrera",
    avatar: "assets/avatars/student-eduardo.png",
    classInfo: {
        grade: "2°",
        teacher: "Maestra Karelia",
        room: "A-12",
        shift: "Matutino"
    },
    grades: [
        { subject: "Matemáticas", grade: 9.5 },
        { subject: "Español", grade: 8.7 },
        { subject: "Ciencias", grade: 9.0 },
        { subject: "Historia", grade: 8.5 }
    ],
    tasks: [
        { 
            task: "Ensayo sobre la Revolución Mexicana", 
            dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 días después
        },
        { 
            task: "Proyecto de ciencias: Ecosistemas", 
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 días después
        }
    ]
};

// Función para calcular días restantes
function getDaysLeft(dueDate) {
    const today = new Date();
    const timeDiff = dueDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

// Cargar datos al iniciar
document.addEventListener("DOMContentLoaded", () => {
    // Datos del perfil
    document.getElementById("parentName").textContent = studentData.parentName;
    document.getElementById("studentName").textContent = studentData.studentName;
    document.querySelector(".school-name").textContent = studentData.schoolName;
    
    // Avatar
    const avatarImg = document.querySelector(".avatar");
    avatarImg.src = studentData.avatar;
    avatarImg.alt = studentData.studentName;

    // Información del grupo
    document.getElementById("classGrade").textContent = studentData.classInfo.grade;
    document.getElementById("classTeacher").textContent = studentData.classInfo.teacher;
    document.getElementById("classRoom").textContent = studentData.classInfo.room;
    document.getElementById("classInfo").textContent = 
        `${studentData.classInfo.grade} - ${studentData.classInfo.teacher}`;

    // Calificaciones
    const gradesList = document.getElementById("gradesList");
    gradesList.innerHTML = studentData.grades.map(subject => `
        <li>
            <span class="subject">${subject.subject}:</span>
            <span class="grade">${subject.grade}</span>
        </li>
    `).join("");

    // Tareas
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = studentData.tasks.map(task => {
        const daysLeft = getDaysLeft(task.dueDate);
        return `
            <li class="task-item">
                <span class="task-text">📌 ${task.task}</span>
                <span class="task-due ${daysLeft <= 3 ? 'urgent' : ''}">
                    ${daysLeft > 0 ? `Faltan ${daysLeft} días` : '¡Vencida!'}
                </span>
            </li>
        `;
    }).join("");

    // Cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
        if(confirm('¿Estás seguro de cerrar sesión?')) {
            window.location.href = 'index.html';
        }
    });
});
