-- DROP TABLE treats;

CREATE TABLE koalas (
	id SERIAL PRIMARY KEY,
	name varchar(100),
    age varchar(50),
	gender varchar(100),
	transferstatus boolean,
    notes varchar(500)
);

INSERT INTO koalas (name, age, gender, transferStatus, notes)
VALUES ('Scotty', 4, 'M', true, 'Born in Guatemala'),
('Jean', 5, 'F', true, 'Allergic to lots of lava'),
('Ororo', 7, 'F', false, 'Loves listening to Paula (Abdul)'),
('Charlie', 4, 'M', false, 'Favorite band is Nirvana'),
('Betsy', 4, 'F', false, 'Has a pet iguana')
