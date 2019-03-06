USE blogg;

INSERT INTO categories 
	(category) 
VALUES
	("MySQL"),
    ("JavaScript"),
    ("HTML"),
    ("CSS")
;

SELECT * FROM categories;

INSERT INTO posts
	(title, body)
VALUES
	("First", "Detta är mitt första inlägg")
;