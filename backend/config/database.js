import mysql from "mysql2";
  

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restful_api'
});
 
export default db;