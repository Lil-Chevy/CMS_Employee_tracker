Insert INTO department (name)
VALUES
('Sales'),
('Legal'),
('Engineering'),
('Finance'); 

Insert INTO roles (title, yearly_salaray, department_id)
VALUES
('Sales Representative', 45000, 1),
('Sales Manager', 90000, 1),
('Paralegal', 45000, 2),
('Company Lawyer', 110000, 2),
('Engineer', 50000, 3),
('Engineers Manager', 200000, 3),
('Finance', 150000, 4),
('Finance Manager', 350000, 4);



Insert INTO employees (first_name, last_name,role_id, manager_id)
VALUES
('Doug', 'Dimmadome', 1, 1),
('Rip', 'Studwell', 2, null),
('Chet', 'Ubetcha', 3, 2),
('Chuck', 'Laser', 4, null),
('Jorgen', 'Von Strangle', 5, 3),
('Trixie', 'Tang', 6, null),
('Adam', 'West', 7, 4),
('Mark', 'Chang', 8, null);

