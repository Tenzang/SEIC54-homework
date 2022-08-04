CREATE TABLE mangas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    artist TEXT,
    story TEXT
);

--- sample seed data ---
INSERT INTO mangas (name, artist) VALUES ('Rave Master','Hiro Mashima');
INSERT INTO mangas (name, artist) VALUES ('Fairy Tail','Hiro Mashima');
INSERT INTO mangas (name, artist) VALUES ('Edens Zero','Hiro Mashima');
INSERT INTO mangas (name, artist) VALUES ('Death Note','Tsugumi Ohba');
INSERT INTO mangas (name, artist) VALUES ('One Punch Man','Tomohiro');
