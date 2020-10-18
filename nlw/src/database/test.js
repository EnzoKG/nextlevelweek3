const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    const instOrphanage = {
        lat: "-21.4820604",
        lng: "-56.1433031",
        name: "Lar dos meninos",
        about: "Presta assistência a crinças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "null",
        images: [
            "https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598135753053-2e3075f90763?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    };

    // inserir dados na tabela
    //await saveOrphanage(db, instOrphanage)

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    // deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id = '1'")
    //await db.run("DELETE FROM orphanages WHERE id = '2'")
})