CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    capital TEXT,
    population INTEGER,
    banner TEXT,
    map TEXT,
    flag TEXT
);

INSERT INTO countries (name, capital, population, banner, map, flag) VALUES ('Chile', 'Santiago', 19, 'https://lp-cms-production.imgix.net/2019-06/3ee6126fd0668d5cb5b8f5781dd441b166778c960b712aeafca350faff61a4ca.jpg', 'https://www.worldometers.info/img/maps/chile_physical_map.gif', 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg');

INSERT INTO countries (name, capital, population, banner, map, flag) VALUES ('Mexico', 'Mexico City', 17, 'https://i.natgeofe.com/n/b803d81b-ed1c-4cb8-9a7d-74da5a401b1a/mexico-city-day-of-dead-parade-mexico_16x9.jpg', 'https://www.worldometers.info/img/maps/mexico_physical_map.gif', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png');

INSERT INTO countries (name, capital, population, banner, map, flag) VALUES ('Guatemala', 'Guatemala City', 130, 'https://lp-cms-production.imgix.net/image_browser/AntiguaGuatemala.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1075', 'https://www.worldometers.info/img/maps/guatemala_physical_map.gif', 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg');

INSERT INTO countries (name, capital, population, banner, map, flag) VALUES ('Colombia', 'Bogota', 51, 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1635679536/211029-Brooklyn-Ciudad-Perdida-tease_roqlen', 'https://www.worldometers.info/img/maps/colombia_political_map.gif', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg');