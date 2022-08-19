CREATE TABLE galaxies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    othernames TEXT,
    constellation TEXT,
    distance TEXT,
    coordinates TEXT,
    funfact TEXT,
    image TEXT
);

INSERT INTO galaxies (name, othernames, constellation, distance, coordinates, funfact, image) VALUES ('Eye of Sauron', 'NGC 4151, UGC 7166, PGC 38739', 'Canes Venatici', '15.8 ± 0.4 Mpc', '12h 10m 32.6s, +39d 24m 21s', 'It is one of the nearest galaxies to Earth to contain an activly growing supermassive black hole', 'https://upload.wikimedia.org/wikipedia/commons/e/eb/NGC4151_Galaxy_from_the_Mount_Lemmon_SkyCenter_Schulman_Telescope_courtesy_Adam_Block.jpg');

INSERT INTO galaxies (name, constellation, distance, coordinates, funfact) VALUES ('Milky Way', 'Sagittarius', '25.6 - 27.1 kly', '17h 45m 40.0409s, -29d 00m 28.118s', 'The galaxy containing the Sun and its Solar System, and therefore Earth.');