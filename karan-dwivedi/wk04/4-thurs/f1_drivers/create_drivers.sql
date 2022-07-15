CREATE TABLE drivers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    podiums TEXT, -- URL for a butterfly picture
    image TEXT
);

-- sample seed data 
INSERT INTO drivers (name, podiums) VALUES ('Hamilton', '183');
INSERT INTO drivers (name, podiums) VALUES ('Verstappen', '68');
