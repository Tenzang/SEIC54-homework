CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age TEXT,
    image TEXT -- URL for a butterfly picture
);

-- sample seed data
INSERT INTO directors (name, age) VALUES ('Stanley Kubrick', 'Deceased');
INSERT INTO directors (name, age) VALUES ('Michael Mann', 79);
