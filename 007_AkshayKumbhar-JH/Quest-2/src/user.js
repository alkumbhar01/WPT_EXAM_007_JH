const mysql = require ("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"exam"
};

async function sendmsg(message) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    
    const sql = `insert into message(id, msg) values (?,?)`;
    await connection.queryAsync(sql, [message.id, message.msg]);

    console.log("user Added Message");

    await connection.endAsync();
};

async function showmsg() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    
    const sql = `select * from message`;
    const list= await connection.queryAsync(sql);

    console.log(list);

    await connection.endAsync();
};

//const data ={msg:"All Goood...!"};
//sendmsg(data);

// showmsg();

module.exports={sendmsg, showmsg};



