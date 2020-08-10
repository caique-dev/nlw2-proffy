const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    // apresentando os dados da tabela
    proffyValue = {
        name: 'Caique P',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGAKCkWXZhc0Q/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=-8A-4813LnwrnQ61oaMRzrTW0Tef0hFv72BMTFjbPcg',
        whatsapp: 400028922,
        bio: 'teste'
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 520,
            time_to: 900
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 600
        }
    ]

    // criando o registro do novo proffy
    await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // consultando os dados
    // todos os proffys
    const electedProffys = await db.all('SELECT * FROM proffys')
    // console.log(electedProffys)

    // consultar dados e classes de um determinado proffy
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    // consultar o horario das aulas - o pesquisado deve ser >= que o time from e < que o time to
    const selectedClassSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "600"
        AND class_schedule.time_to > "600"
    `)
    console.log(selectedClassSchedule)
})