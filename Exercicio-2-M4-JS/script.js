const students = [
  {
    name: "Luiz",
    number1: 8,
    number2: 6,   
  },
  {
    name: "Alexandra",
    number1: 6,
    number2: 3,  
  },
  {
    name: "Carlos",
    number1: 6,
    number2: 9,  
  },
  {
    name: "Rute",
    number1: 5,
    number2: 9,  
  },
  {
    name: "Jessica",
    number1: 9,
    number2: 9,  
  },
]

function average (grade1, grade2){
  return ((grade1 + grade2) / 2)
}

function printStudentsAverage(student) {
  let result = average(student.number1, student.number2)
  
  if (result >= 7) {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${result} \n Parabéns ${student.name}! Você foi aprovado(a) no concurso.`)
  }else {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${result} \n Não foi dessa vez ${student.name}! tente novamente.`)
  }
}

for (let student of students) {
  let MessageAverage = printStudentsAverage(student)
}

