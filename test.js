const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

function save() {
  pool.query("CREATE TABLE Visitors(id SERIAL PRIMARY KEY, name VARCHAR(30), age INT, dateOfVisit DATE, timeOfVisit TIME, assistedBy VARCHAR(30), comments VARCHAR(100))", (error, results) => {
	console.log(error, results);
    	pool.end();
  })
}

function addNewVisitor(name, age, dateOfVisit, timeOfVisit, assistedBy, comments){
  var queryString = `INSERT INTO Visitors(name, age, dateOfVisit, timeOfVisit, assistedBy, comments)`
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

function updateVisitor(name, value1, value2) {

  //UPDATE Visitors SET name = 'Malaika Kekana' WHERE name = 'Alice Cooper'
  var queryString = `UPDATE Visitors SET ${name} = ${value2} WHERE ${name} = ${value1}`;

  pool.query(queryString, (error, results) => {
    console.log(error, results);
    pool.end()
  })

}

updateVisitor();
//deleteVisitor(4);

//save();
//addNewVisitor('Tebogo Gaba', 35, '2019-11-24', '11:08:18', 'Makhadzi Ndou', 'Poor service');
