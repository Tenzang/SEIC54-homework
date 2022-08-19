CREATE TABLE Books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    importance TEXT,
    image TEXT
);

-- seed data

INSERT INTO books (name, importance, image) VALUES ('Slaughter House Five', 'Very, please read it. It is a very good book', 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781684156252/slaughterhouse-five-9781684156252_lg.jpg');
INSERT INTO books (name, importance, image) VALUES ('Beloved', 'I liked this one a lot and would recommend it if you like tragic books and books that are a bit more artsy stylistically.', 'https://kbimages1-a.akamaihd.net/e1baca56-0d4e-441f-bd3d-4abe2391d082/353/569/90/False/beloved-26.jpg');