CREATE TABLE cheese (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    region TEXT,
    blurb TEXT,
    image TEXT
);


-- SAMPLE SEEDS
INSERT INTO cheese (name,region,blurb) VALUES ('Manchego', 'Spain', 'This is mainly produced in spain');
INSERT INTO cheese (name,region,blurb) VALUES ('Camembert', 'Europe', 'This was made with Sheeps Milk');
