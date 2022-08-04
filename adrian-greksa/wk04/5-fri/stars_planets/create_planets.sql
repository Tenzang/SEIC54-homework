CREATE TABLE planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    habitable TEXT,
    star TEXT,
    mass TEXT,
    temp TEXT,
    period TEXT, 
    distance TEXT,
    funfact TEXT,
    image TEXT
);

INSERT INTO planets (name, habitable, star, mass, temp, period, distance) VALUES ('TRAPPIST-1d', 'yes', 'TRAPPIST-1', '0.30', '258', '4.05', '39');