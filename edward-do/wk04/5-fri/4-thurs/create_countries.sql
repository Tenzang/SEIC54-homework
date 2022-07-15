CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    capital TEXT,
    population INTEGER,
    map TEXT -- URL for the map
);

-- sample seed data
INSERT INTO countries (name, capital, population) VALUES ('Chile', 'Santiago', 19);
INSERT INTO countries (name, capital, population) VALUES ('Mexico', 'Mexico City', 130);
INSERT INTO countries (name, capital, population) VALUES ('Colombia', 'Bogota', 51);