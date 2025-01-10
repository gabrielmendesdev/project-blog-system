USE blog;

CREATE TABLE posts (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	author VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	content TEXT NOT NULL,
	createdAt timestamp DEFAULT now(),
	updatedAt timestamp DEFAULT now(),
	deletedAt timestamp
);