CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    continent TEXT,
    info TEXT,
    image TEXT
);

-- Sample Seed

INSERT INTO countries (name,continent) VALUES ('China', 'Asia');
INSERT INTO countries (name,continent) VALUES ('Croatia', 'Europe');