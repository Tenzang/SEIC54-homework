CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    population INTEGER,
    capital TEXT
);

INSERT INTO countries (name, population, capital) VALUES ('USA', '332000000', 'Washington, DC');
INSERT INTO countries (name, population, capital) VALUES ('Trinidad and Tobago', '1400000', 'Port of Spain');