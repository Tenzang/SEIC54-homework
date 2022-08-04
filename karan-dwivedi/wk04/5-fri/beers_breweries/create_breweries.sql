CREATE TABLE breweries(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    state TEXT,
    year TEXT
);

-- sample seed data 
INSERT INTO breweries (name, state) VALUES ('4 Pines', 'NSW');
INSERT INTO breweries (name, state) VALUES ('Better Beer', 'NSW');
