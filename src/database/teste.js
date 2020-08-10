const 
    Database = require('./db'),
    createProffy = require('./createProffy')

Database.then( async (db) => {
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '40028922',
        bio: 'Professor de educação física'
    }

    classValue = {
        subject: '1',
        cost: '20'
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1500
        },
        {
            weekday: 2,
            time_from: 920,
            time_to: 1400
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // consultando os dados

    // proffys
    const selectedProffys = await db.all('SELECT * FROM proffys')
    // console.log(selectedProffys)

    // determinado professor, seus dados e classes
    const selectedClassesAndProffy = await db.all(`
        SELECT proffys.*, classes.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffy)

    // horário das aulas 
    const selectedClassSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "920"
        AND class_schedule.time_to > "920"
    `)
    console.log(selectedClassSchedules)
})