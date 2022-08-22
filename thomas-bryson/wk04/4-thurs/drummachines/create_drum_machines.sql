CREATE TABLE drum_machines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model TEXT,
    brand TEXT,
    image TEXT -- URLK for a drum machine picture
);

-- sample seed data
INSERT INTO drum_machines (model, brand) VALUES ('808', 'Roland');
INSERT INTO drum_machines (model, brand) VALUES ('Minipops 7', 'Korg');