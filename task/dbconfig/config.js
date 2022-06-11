const mysql=require('mysql')
var config={
    host:"localhost",
    user:"root",
    password:'',
    database:"task",
    dbdriver:'mysqli'
}

const conn=mysql.createConnection(config)
conn.connect(function(err){ 
    if(err) throw err
})
module.exports=conn