CREATE TABLE stars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    constellation TEXT,
    coordinates TEXT,
    distance TEXT,
    stellar_class TEXT,
    mass TEXT,
    planets TEXT,
    funfact TEXT,
    image TEXT
);

INSERT INTO stars (name, constellation, coordinates, distance, stellar_class, mass, planets) VALUES ('TRAPPIST-1', 'Aquarius', '23h 06m 29.368s -05° 02′ 29.04″', '	40.66 ± 0.04 ly', 'M8V', '0.0898±0.0023 M', '7');