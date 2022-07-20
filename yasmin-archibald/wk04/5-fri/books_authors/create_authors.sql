CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- seed data

INSERT INTO authors (name, image) VALUES ("Kurt Vonngeut", "https://s3.amazonaws.com/loa-production-23ffs35gui41a/writers/images/000/000/249/big/vonnegut_kurt_WD.jpg?1458840561");
INSERT INTO authors (name, image) VALUES ("Toni Morrison", "https://aas.princeton.edu/sites/g/files/toruqf396/files/styles/3x4_750w_1000h/public/people/m_toni_morrison_theironwriter_com.jpeg?itok=fWEAYPEH")