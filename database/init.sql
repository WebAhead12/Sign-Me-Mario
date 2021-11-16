BEGIN;

DROP TABLE IF EXISTS users,petitions,signs CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    username varchar(36) UNIQUE,
    password varchar(36),
    email varchar(255) UNIQUE,
    created_date DATE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE petitions(
    id SERIAL PRIMARY KEY,
    title varchar(50),
    user_id INTEGER REFERENCES users(id),
    content text,
    signed INTEGER DEFAULT 0,
    goal INTEGER,
    creation_date DATE DEFAULT CURRENT_TIMESTAMP,
    image_link text
);

CREATE TABLE signs(
    id SERIAL PRIMARY KEY,
    comment varchar(255),
    user_id INTEGER REFERENCES users(id),
    petition_id INTEGER REFERENCES petitions(id)
);

INSERT INTO users(name,username,password,email) 
VALUES
    ('george','Kuala','1234','durd2001@gmail.com'),
    ('hala','halakhamis07','hala','halakhamis07@gmail.com')
;

INSERT INTO petitions(title,user_id,content,goal,image_link)
VALUES
    ('Brawlhalla',1,'Brawlhalla to remove the guy with the big sword cause diabolicah spams the fuck out of him and its annoying',15,'https://s2.gaming-cdn.com/images/products/9463/orig/brawlhalla-pc-mac-game-steam-cover.jpg')
;

INSERT INTO signs(comment,user_id,petition_id)
VALUES
    ('YES FUCK YES FUCK THAT GUY',1,1)
;
COMMIT;