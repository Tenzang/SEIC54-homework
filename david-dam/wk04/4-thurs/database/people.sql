CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    world TEXT,
    image TEXT
);

--sample seed data
INSERT INTO people (name, world) VALUES ('Rick Sanchez','Earth C-137');
INSERT INTO people (name, world) VALUES ('Morty Smith','Earth C-137');