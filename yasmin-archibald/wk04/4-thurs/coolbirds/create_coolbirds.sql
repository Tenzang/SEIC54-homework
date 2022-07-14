CREATE TABLE Cool_Birds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    reason TEXT,
    coolness TEXT
    image TEXT -- url for a bird
    );

    -- Sample seed data, test!

    INSERT INTO Cool_Birds (name, reason, coolness) VALUES ("Ibis", "They're a native species who gets a lot of hate for no good reason. Firstly we destroyed their natural habtat and paved over it, then got mad at them for sticking around. Secondly, I like human food, you like human food (I presume). Your beloved childhood dog also loved human food, so do Ibises, if I had to get human food from the bin I would", "VERY");
    INSERT INTO Cool_Birds (name, reason, coolness) VALUES ("Magpie", "They're super smart and have complex social worlds! Plus there's a phenomena where they seemingly have funerals (though sightings are rare and scientific/varifiable evidence is on par with Yetti sightings", "pretty cool");