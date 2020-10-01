
#criação da tabela times
CREATE TABLE team(
	
	codteam int(100) AUTO_INCREMENT,
	name_team varchar(100) NOT NULL,
	color_emblem varchar(100) NOT NULL,
	date_creation date NOT NULL,
	created_at date NOT NULL,
	updated_at date,
	primary key(codteam)
	


);
#criação da tabela jogadores
CREATE TABLE player(
	id int(100) AUTO_INCREMENT,
	name_player varchar(100) NOT NULL,
	last_name_player varchar(100) NOT NULL,
	number_shirt int(100) NOT NULL,
	created_at date NOT NULL,
	updated_at date,
	codteam int(100) NOT NULL,

	primary key(id)
	);



ALTER TABLE player
ADD CONSTRAINT fk_codteam FOREIGN KEY (codteam) REFERENCES team (codteam)