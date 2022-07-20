CREATE TABLE Songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    artist TEXT,
    BPM TEXT,
    jacket TEXT, -- URL for a song jacket
    level TEXT,
    video TEXT
);

-- sample seed data
INSERT INTO Songs (title, artist, bpm, jacket, level, video) VALUES ("Raven Emperor", "Kobaryo", "205", "https://maimaidx.jp/maimai-mobile/img/Music/000e4e52cbf4d11f.png", "14", "https://www.youtube.com/embed/0bpsAxmKmu0");
INSERT INTO Songs (title, artist, bpm, jacket, level, video) VALUES ("Yorugao", "An & Ryunosuke Kudo", "182", "https://maimaidx.jp/maimai-mobile/img/Music/ffa8c12106a9ee96.png", "14", "https://www.youtube.com/embed/oQACco8JIOg");
INSERT INTO Songs (title, artist, bpm, jacket, level, video) VALUES ("World Vanquisher", "void (Mournfinale)", "170", "https://cdn.img-conv.gamerch.com/img.gamerch.com/maimai/1535353884.jpg", "14", "https://www.youtube.com/embed/p3ik0skavnE");