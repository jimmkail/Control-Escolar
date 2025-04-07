function checkDueTasks() {
    const student = getStudentData();
    const today = new Date();
    
    student.tasks.forEach(task => {
        const dueDate = new Date(task.dueDate);
        const daysLeft = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysLeft <= 3) {
            Toastify({
                text: `⏳ Tarea próxima: ${task.task} (${daysLeft} días)`,
                duration: 5000,
                close: true,
                gravity: "top",
                backgroundColor: "#e74c3c"
            }).showToast();
        }
    });
}

// Llamar al cargar el dashboard
checkDueTasks();