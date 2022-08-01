CREATE TABLE beers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    kind TEXT,
    image TEXT
);

-- sample seed data 
INSERT INTO beers (brand, kind) VALUES ('4 Pines', 'Pale Ale');
INSERT INTO beers (brand, kind) VALUES ('Better Beer', 'Pacific Ale');
