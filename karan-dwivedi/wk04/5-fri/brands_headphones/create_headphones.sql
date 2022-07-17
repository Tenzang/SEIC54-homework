CREATE TABLE headphones(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    price INTEGER,
    rating INTEGER
);

-- sample seed data 
INSERT INTO headphones (name, brand) VALUES ('WH-1000XM3', 'Sony');
INSERT INTO headphones (name, brand) VALUES ('WH-1000XM4', 'Sony');


