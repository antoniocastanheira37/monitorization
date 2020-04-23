const {Pool, Client} = require('pg')
const origem = "AIDA"
const destinos = ["RiS", "LAB", "AIDAPCE", "FARM"]
const episodios = [14209572, 50927452, 29857124, 35752975, 91792965]
const eventos = ["A01", "A02", "A03", "A13"]
setInterval(function() {
    
    console.log("Inserting data...")    
    var pgclient = new Client({
        user:'pce', 
        host:'postgres',
        password:'pce',
        database:'pce',
        port:5432
    })
    pgclient.connect()
    var date = new Date()
    var ind = Math.floor(Math.random()*4)
    var evn = ""
    switch (ind) {
        case 0:
            evn = "O23"
            break
        case 1:
            evn = "ORM^001"
            break
        default:
            evn = eventos[Math.floor(Math.random()*4)]
    }
    var query = "INSERT INTO \"hl7envia\" (msgid, origem, destino, evn, dataenv, episodio) VALUES (" + "'" + ["A"+date.getFullYear()+(date.getMonth()+1)+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds(), origem, destinos[ind], evn, date.toISOString(), episodios[Math.floor(Math.random()*4)]] .join("','") + "'" + ") RETURNING *"
    if (Math.floor(Math.random()*4)==0) 
        query = "INSERT INTO \"hl7envia\" (msgid, origem, destino, evn, episodio) VALUES (" + "'" + ["A"+date.getFullYear()+(date.getMonth()+1)+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds(), origem, destinos[ind], evn, episodios[Math.floor(Math.random()*4)]] .join("','") + "'" + ") RETURNING *"
    pgclient.query(query)
    .then(res => {
        console.log(res.rows[0])
        pgclient.end()
    }).catch(e => console.error(e.stack))
    console.log("Ending data insertion...")

}, 5*1000) //em milissegundos
