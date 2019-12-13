const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

function save() {

  var queryString = `CREATE TABLE Visitors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age INT,
    dateOfVisit DATE,
    timeOfVisit TIME,
    assistedBy VARCHAR(30),
    comments VARCHAR(100))`;
  pool.query(queryString,(error, results) => {
	console.log(error, results);
    	pool.end();
  })
}

function addNewVisitor(name, age, dateOfVisit, timeOfVisit, assistedBy, comments){
  var queryString = `INSERT INTO Visitors(name, age, dateOfVisit, timeOfVisit, assistedBy, comments)`;
  queryString += `VALUES('${name}', ${age}, '${dateOfVisit}', '${timeOfVisit}', '${assistedBy}', '${comments}')`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })
}

function deleteVisitor(id) {

  var queryString = `DELETE FROM Visitors WHERE id = ${id}`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })

}

function updateVisitor() {

  var queryString = `UPDATE Visitors SET name = 'Nthabiseng Lijojo' WHERE name = 'Tebogo Gaba'`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })

}

function listAllVisitors() {

  var queryString = `SELECT DISTINCT id, name FROM Visitors`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })

}

function viewOneVisitor(id) {
  var queryString = `SELECT * FROM Visitors WHERE id=${id}`;
  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })
}

function deleteAllVisitors() {
  var queryString = `DELETE FROM Visitors`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end();
  })
}


//viewOneVisitor(2);
//deleteAllVisitors();
//updateVisitor();
//deleteVisitor(4);
//listAllVisitors();
//save();
//addNewVisitor('Malaika Kekana', 17, '2019-12-04', '10:03:17', 'Makhadzi Ndou', 'The service was very poor');
