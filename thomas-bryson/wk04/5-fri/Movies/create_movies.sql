CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    director TEXT,
    image TEXT -- URL for a butterfly picture
);

-- sample seed data
INSERT INTO movies (title, director) VALUES ('2001: A Space Oddysey', 'Stanley Kubrick');
INSERT INTO movies (title, director) VALUES ('Heat', 'Michael Mann');