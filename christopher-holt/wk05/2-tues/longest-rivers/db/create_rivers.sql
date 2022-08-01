CREATE TABLE rivers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    length FLOAT,
    drainage FLOAT,
    discharge FLOAT,
    outflow TEXT
);

-- Don't seed in your SQL file anymore! Use seeds.rb