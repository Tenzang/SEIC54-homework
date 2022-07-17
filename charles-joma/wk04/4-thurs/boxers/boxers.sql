CREATE TABLE boxers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    weight_division TEXT,
    image TEXT
);


-- SAMPLE SEED DATA

INSERT INTO boxers (name, weight_division) VALUES ('Roy Jones Jr.', 'Middleweight');
INSERT INTO boxers (name, weight_division) VALUES ('Joe Frazier', 'Heavyweight');