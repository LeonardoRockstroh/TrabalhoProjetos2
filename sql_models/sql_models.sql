CREATE TABLE estab (
	id_estab     serial,
	chave_estab  varchar (200) NOT NULL,
	nome_gerente varchar (120) NOT NULL,
	nome_estab   varchar (40)  NOT NULL,
	email        varchar (255) NOT NULL,
	telefone     varchar (20)  NOT NULL,
	estab_ativo  varchar (200)
);

CREATE TABLE users (
	id_user      serial PRIMARY KEY,
	nome_usuario varchar (40) NOT NULL,
	email        varchar (255),
	telefone     varchar (20),
	chave_estab  varchar (200) NOT NULL
);

CREATE TABLE prod (
	id_produto   serial PRIMARY KEY,
	nome_produto varchar(120) NOT NULL,
	valor_prod   decimal(15,2) NOT NULL,
	chave_estab  varchar (200) NOT NULL
);

CREATE TABLE vend_header (
	id_venda     serial PRIMARY KEY,
	id_user      serial NOT NULL,
	nome_cliente varchar (40),
	cpf          varchar (16),
	dt_venda     date NOT NULL,
	hr_venda     time NOT NULL,
	qtd_itens    int  NOT NULL,
	valor_venda  decimal(8,3) NOT NULL,
	chave_estab  varchar (200) NOT NULL,
	FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE vend_item (
	id_item      serial PRIMARY KEY,
	id_venda     serial NOT NULL,
	id_produto   serial  NOT NULL,
	nome_cliente varchar (40),
	qtd          int     NOT NULL,
	valor_unit   decimal(15,2) NOT NULL,
	valor_item   decimal(15,2) NOT NULL,
	chave_estab  varchar (200) NOT NULL,
	FOREIGN KEY(id_venda)   REFERENCES vend_header(id_venda), 
	FOREIGN KEY(id_produto) REFERENCES prod(id_produto)
);

/* Inserções */