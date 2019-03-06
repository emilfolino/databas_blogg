USE blogg;

CREATE TABLE posts
(
    id INT AUTO_INCREMENT,
    title VARCHAR(250),
    body TEXT,

    PRIMARY KEY (id)
);

CREATE TABLE comments
(
    id INT AUTO_INCREMENT,
    post_id INT,
    commenter VARCHAR(250),
    body TEXT,
	FOREIGN KEY (post_id) REFERENCES posts(id),
    PRIMARY KEY (id)
);

CREATE TABLE categories
(
	id INT auto_increment,
    category VARCHAR(250),
    
    PRIMARY KEY (id)
);

DROP TABLE posts_categories;
CREATE TABLE posts_categories
(
	post_id INT,
    category_id INT,
    
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    PRIMARY KEY (post_id, category_id)
);