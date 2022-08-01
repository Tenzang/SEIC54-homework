CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT
);

INSERT INTO authors (name,nationality) VALUES ('George R. R. Martin','American');
INSERT INTO authors (name,nationality) VALUES ('J. R. R. Tolkien','British');