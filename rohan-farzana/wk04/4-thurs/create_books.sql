CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    author TEXT,
    image TEXT
);

INSERT INTO books (name, author) VALUES ('Unbroken','Laura Hillenbrand');
INSERT INTO books (name, author) VALUES ('The Boys in the Boat','Daniel James Brown');