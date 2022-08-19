CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    author_id INTEGER NOT NULL,
    rating TEXT,
    image TEXT,
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

-- seed data

INSERT INTO books (name, author_id, rating, image) VALUES ('Slaughter House Five', 1,'Very, please read it. It is a very good book', 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781684156252/slaughterhouse-five-9781684156252_lg.jpg');
INSERT INTO books (name, author_id, rating, image) VALUES ('Beloved', 2, 'I liked this one a lot and would recommend it if you like tragic books and books that are a bit more artsy stylistically.', 'https://kbimages1-a.akamaihd.net/e1baca56-0d4e-441f-bd3d-4abe2391d082/353/569/90/False/beloved-26.jpg');