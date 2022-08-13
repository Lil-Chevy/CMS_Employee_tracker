const db = require("../db/connection");
const cTable = require("console.table");
const { start } = require("repl");

getRoles = () => {
  const sql = `SELECT roles.id, roles.title, roles.yearly_salary, department.name AS department
  FROM roles
  LEFT JOIN department ON roles.department_id = department.id`;
  db.query(sql),
    (err, res) => {
      console.table(rows);
      startProgram();
    };
};

addRole = (title, yearly_salary, department_id) => {
  salaray = parseInt(yearly_salary);

  const params = [title, salaray, department_id];

  db.query(
    `INSERT INTO roles (title, yearly_salary, department_id )
  VALUES (?,?,?)`,
    params,
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
  startProgram();
};

deleteRole = (title) => {
  db.query(` DELETE FROM roles WHERE title = ?`, title, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  startProgram();
};

updateRole = (title, yearly_salary) => {
  salaray = parseInt(yearly_salary);
  const params = [salaray, title];

  db.query(
    `UPDATE roles SET yearly_salary = ? WHERE title = ?`,
    params,
    (err, result) => {
      if (err) {
        console.log("please try again");
      } else if (!result.affectedRows) {
        console.log("not found ");
      }
    }
  );
  startProgram();
};

module.exports = { getRoles, addRole, deleteRole, updateRole };
