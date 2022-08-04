CREATE TABLE dishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    info TEXT,
    image TEXT
);

-- Sample seed data
INSERT INTO dishes (name,info) VALUES ('Dumplings', 'Pork or Chicken steamed in a flour wrapper');

INSERT INTO dishes (name,info) VALUES ('Pasta', 'Egg flour noodles in a tomato or cream sauce');


