// This function returns a number value
// This function expect two integers to tell the user what data to enter
function returnValue(from, to){
    let value = prompt(`Digite a nota da prova ${from} / ${to}`);
    while (value == null || isNaN(value) || value < 0 || value > 10){
        if(value < 0 || value > 10){
            value = prompt("Digite um valor entre 0 e 10");
        }      
        else{
            value = prompt("Digite APENAS NÚMEROS");
        }
    }
    return Number(value);
}

// This function returns an object with list/array number values
// This function expect an integer to end for loop
function inputGrades(to){
    const grades = [];        

    for (let i = 1; i <= to; i++ ){
        const grade = returnValue(i, to);
        grades.push(grade);
    }

    return grades;    
}

// This function returns a simple average value
// This function expect an object with list/array number values
function calcAvg(grades){
    let total = 0;

    grades.forEach((grade) => {
        total += grade;
    })

    return (total / grades.length).toFixed(2);
}

// This function returns an object students containing name, avg, status and grades 
// This function does not expect parameters
function logStudents() {
    let insert = true;
    const students = [];

    while (insert) {
        let inputName = prompt("Digite o nome");
        while (inputName == null || inputName == "" ){
            inputName = prompt("Digite um nome válido");
        }
        
        let inputQtyGrades = prompt("Digite a quantidade de provas/avaliações que deseja inserir para o aluno");
        while (isNaN(inputQtyGrades) || inputQtyGrades <= 0 || inputQtyGrades > 20){
            if(inputQtyGrades <= 0 || inputQtyGrades > 20){
                inputQtyGrades = prompt("Digite um valor entre 1 e 20");
            }
            else{
                inputQtyGrades = prompt("Digite APENAS NÚMEROS");
            }
        }
        inputName = inputName.toUpperCase();
        inputQtyGrades = Number(inputQtyGrades);
        const grades = inputGrades(inputQtyGrades);
        const avg = calcAvg(grades);    
        
        students.push({
            name: inputName,
            grades: grades,
            avg: avg,
            status: avg >= 7 ? "Aprovado!" : "Tente Novamente"
        })
        
        insert = confirm("Deseja inserir mais algum dado?");
    }
    return students;
}

// This is a void function to print/show the results
// This function expects an object students containing name, avg, status and grades 
function showResults(students){

    let msg = "";
    students.forEach((student) => {
        msg += `\nA média da(o) aluna(o):  ${student.name} é de: ${student.avg}. ${student.status}`;
        
        student.grades.forEach((grade, indice) => {
            msg += `\n Avaliação ${indice+1}, nota: ${grade}`;
        })
    })

    alert(msg);
    console.log(msg);
    msg = msg.replace(/(?:\r\n|\r|\n)/g, '<br>');
    document.write(msg);
}

const students = logStudents();
showResults(students);