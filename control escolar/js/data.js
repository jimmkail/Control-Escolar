// Datos simulados (puedes reemplazar con una API real)
const studentData = {
    "Juan Pérez": {
        avatar: "assets/avatars/student-juan.png",
        classInfo: {
            grade: "2°",
            teacher: "Maestra Karelia",
            room: "A-12",
            shift: "Matutino"
        },
        grades: [
            { subject: "Matemáticas", grade: 9.5 },
            { subject: "Español", grade: 8.7 }
        ],
        attendance: 95,
        tasks: [
            { task: "Ensayo sobre la Revolución", dueDate: "2024-05-15" }
        ]
    }
};

// Obtener datos del estudiante actual
function getStudentData() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return studentData[currentUser.studentName];
}