CREATE DATABASE aetreya_restfulapi;

USE aetreya_restfulapi;

CREATE TABLE users
(
    username         VARCHAR(200) NOT NULL,
    password         VARCHAR(200) NOT NULL,
    name             VARCHAR(200) NOT NULL,
    role             VARCHAR(100) DEFAULT 'user' NOT NULL,
    token            VARCHAR(100),
    token_expired_at BIGINT,
    PRIMARY KEY (username),
    UNIQUE (token)
) ENGINE InnoDB;

DESCRIBE users;

SELECT *
FROM users;

CREATE TABLE posts
(
    id         VARCHAR(100) NOT NULL,
    title      VARCHAR(255) NOT NULL,
    body       TEXT         NOT NULL,
    created_at TIMESTAMP    NOT NULL,
    updated_at TIMESTAMP    NOT NULL,
    username   VARCHAR(200) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_users_posts (username) REFERENCES users (username)
) ENGINE InnoDB;

DESCRIBE posts;

SELECT *
FROM posts;

CREATE TABLE comments
(
    id         VARCHAR(100) NOT NULL,
    body       TEXT         NOT NULL,
    created_at TIMESTAMP    NOT NULL,
    updated_at TIMESTAMP    NOT NULL,
    username   VARCHAR(200) NOT NULL,
    post_id    VARCHAR(100) NOT NULL,
    comment_parent_id VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY fk_comments_users (username) REFERENCES users (username),
    FOREIGN KEY fk_comments_posts (post_id) REFERENCES posts (id),
    FOREIGN KEY fk_replies_comments (comment_parent_id) REFERENCES comments (id)
) ENGINE InnoDB;

DESCRIBE comments;

SELECT *
FROM comments;


DROP TABLE users;
DROP TABLE posts;
DROP TABLE comments;