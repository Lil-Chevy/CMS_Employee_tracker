const db = require("../db/connection");
const cTable = require(".console.table");

getDepartment = function () {
  db.query(`SELECT * FROM department`, (err, rows) => {
    console.table(rows);
    startProgram();
  });
};

addDepartment = function (name) {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  db.query(sql, name, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`The ${name} department was added`);
  });
  startProgram();
};

deleteDepartment = function () {
  db.query(`DELETE FROM department WHERE name = ?`, name, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  startProgram();
};

module.export = { getDepartment, addDepartment, deleteDepartment };
