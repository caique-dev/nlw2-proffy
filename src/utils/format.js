const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Filosofia",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// passando de número para matéria
function getSubject(subjectNumber) {
    const position = subjectNumber - 1
    return subjects[position]
}
 
// hora para minuto 
function convertToMinutes(time) {
    const [hours, minutes] = time.split(':')
    return Number((60 * hours) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertToMinutes 
}