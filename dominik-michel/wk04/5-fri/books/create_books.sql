CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book TEXT,
    title TEXT,
    genre TEXT,
    year INTEGER 
);

INSERT INTO books (book,title,genre,year) VALUES ('A Game of Thrones','A Song of Ice', 'Epic Fantasy', 1991);
INSERT INTO books (book,title,genre,year) VALUES ('The Lord of Rings','The Fellowship of the Ring' , 'High Fantasy', 1954);