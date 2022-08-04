CREATE TABLE brands(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country_of_origin TEXT,
    logo TEXT
);

-- sample seed data 
INSERT INTO brands (name, country_of_origin) VALUES ('Sony', 'Japan');
INSERT INTO brands (name, country_of_origin) VALUES ('Bose', 'USA');
