CREATE TABLE podcasts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    host TEXT,
    guest TEXT,
    theme TEXT,
    link TEXT
);

INSERT INTO podcasts(host,guest,theme,link) VALUES ('Joe Rogan','Matthew Walker', 'Sleep', 'https://open.spotify.com/episode/1WtITGcwwZYQZHVJGciMJp?si=da4ac196ca164351' );
INSERT INTO podcasts(host,guest,theme,link) VALUES ('Jay Morton', 'Nims Purja', 'High altitude mountaineering', 'https://open.spotify.com/episode/1hNScwfVrdBt9YfGntQlkE?si=e2036e6e6a5f4642');
