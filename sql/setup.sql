CREATE DATABASE blogg;

USE blogg;

CREATE USER IF NOT EXISTS 'blogg'@'%'
IDENTIFIED
BY 'pass'
;

GRANT ALL PRIVILEGES
    ON blogg.*
    TO 'blogg'@'%'
;

SHOW GRANTS FOR 'blogg'@'%';

