var students = [
    student_1 = prompt("Введите ФИО студента 1"),
    student_2 = prompt("Введите ФИО студента 2"),
    student_3 = prompt("Введите ФИО студента 3"),
];

document.write("<p>"+students[0]+"<p>");
document.write("<p>"+students[1]+"<p>");
document.write("<p>"+students[2]+"<p>");

for (var i = 0; i<students.length; ++i){
    document.write("<p> "+i+". "+ students[i]+"<p>");
}