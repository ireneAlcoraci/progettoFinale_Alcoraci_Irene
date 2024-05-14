CREATE DATABASE nome;

USE nome;

CREATE TABLE IF NOT EXISTS nome_tabella (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    valore_stringa VARCHAR(255) NOT NULL UNIQUE,
    valore_enum ENUM('cose', 'altre cose', 'e ancora cose'),
    valore_decimale DECIMAL(10,2), 
    fk_tabella2 INT NOT NULL,
    FOREIGN KEY(fk_tabella2) REFERENCES nome_tabella (ID)    
); 

CREATE TABLE IF NOT EXISTS nome_tabella2(
	ID INT AUTO_INCREMENT,
    valore_stringa VARCHAR(255) NOT NULL DEFAULT '',
    valore INT NOT NULL DEFAULT 0,
    valore_generale VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS tabella_raccordo(
	FK_1 INT NOT NULL,
    FK_2 INT NOT NULL,
    PRIMARY KEY(FK_1, FK_2),
    FOREIGN KEY (FK_1) REFERENCES nome_tabella(ID),
    FOREIGN KEY (FK_2) REFERENCES nome_tabella2(ID)
);