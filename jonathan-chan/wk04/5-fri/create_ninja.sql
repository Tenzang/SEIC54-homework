CREATE TABLE ninjas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    title TEXT,
    image TEXT
);

--seed data
INSERT INTO ninjas ('name', 'title') VALUES ('Kakashi', 'The Copy Ninja');