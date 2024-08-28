USE fazenda;

-- Inserir dados na tabela Estufa
INSERT INTO Estufa (Localizacao, Temperatura, Umidade, Tamanho) VALUES
('Norte', 23.5, 60.2, 100.0),
('Sul', 21.0, 65.0, 80.0),
('Leste', 22.5, 55.0, 120.0),
('Oeste', 24.0, 70.0, 90.0),
('Centro', 25.0, 68.0, 110.0),
('Noroeste', 22.0, 62.0, 105.0),
('Sudoeste', 20.5, 64.0, 85.0),
('Nordeste', 24.0, 67.0, 95.0),
('Sudeste', 23.0, 66.5, 115.0),
('Centro-Oeste', 21.5, 63.0, 100.0);

-- Inserir dados na tabela Lote
INSERT INTO Lote (Data_Criacao, Numero_Plantas) VALUES
('2024-01-01', 100),
('2024-02-01', 150),
('2024-03-01', 200),
('2024-04-01', 250),
('2024-05-01', 300),
('2024-06-01', 350),
('2024-07-01', 400),
('2024-08-01', 450),
('2024-09-01', 500),
('2024-10-01', 550);

-- Inserir dados na tabela Fornecedor
INSERT INTO Fornecedor (Nome, Contato, Tipo_Insumo) VALUES
('Fornecedor A', 'contatoA@example.com', 'Fertilizante'),
('Fornecedor B', 'contatoB@example.com', 'Semente'),
('Fornecedor C', 'contatoC@example.com', 'Herbicida'),
('Fornecedor D', 'contatoD@example.com', 'Pesticida'),
('Fornecedor E', 'contatoE@example.com', 'Equipamento'),
('Fornecedor F', 'contatoF@example.com', 'Fertilizante'),
('Fornecedor G', 'contatoG@example.com', 'Semente'),
('Fornecedor H', 'contatoH@example.com', 'Herbicida'),
('Fornecedor I', 'contatoI@example.com', 'Pesticida'),
('Fornecedor J', 'contatoJ@example.com', 'Equipamento');

-- Inserir dados na tabela Funcionario
INSERT INTO Funcionario (Nome, Cargo, Horario_Trabalho, ID_Estufa) VALUES
('Carlos Silva', 'Técnico Agrícola', '08:00-17:00', 1),
('Ana Souza', 'Engenheira Agrônoma', '09:00-18:00', 2),
('João Oliveira', 'Operador de Máquinas', '07:00-16:00', 3),
('Maria Santos', 'Gerente de Produção', '08:00-17:00', 4),
('Pedro Lima', 'Assistente Técnico', '09:00-18:00', 5),
('Luana Costa', 'Pesquisadora', '08:00-17:00', 6),
('Fernando Pinto', 'Operador de Máquinas', '07:00-16:00', 7),
('Juliana Alves', 'Engenheira Agrônoma', '09:00-18:00', 8),
('Ricardo Rocha', 'Técnico Agrícola', '08:00-17:00', 9),
('Tatiana Melo', 'Gerente de Produção', '08:00-17:00', 10);

-- Inserir dados na tabela Planta
INSERT INTO Planta (Variedade, Data_Plantio, Estagio_Crescimento, ID_Lote, ID_Estufa) VALUES
('Variedade A', '2024-01-10', 'Crescimento Inicial', 1, 1),
('Variedade B', '2024-02-15', 'Crescimento Intermediário', 2, 2),
('Variedade C', '2024-03-20', 'Crescimento Final', 3, 3),
('Variedade D', '2024-04-25', 'Crescimento Inicial', 4, 4),
('Variedade E', '2024-05-30', 'Crescimento Intermediário', 5, 5),
('Variedade F', '2024-06-05', 'Crescimento Final', 6, 6),
('Variedade G', '2024-07-10', 'Crescimento Inicial', 7, 7),
('Variedade H', '2024-08-15', 'Crescimento Intermediário', 8, 8),
('Variedade I', '2024-09-20', 'Crescimento Final', 9, 9),
('Variedade J', '2024-10-25', 'Crescimento Inicial', 10, 10);

-- Inserir dados na tabela Colheita
INSERT INTO Colheita (Data_Colheita, Quantidade_Colhida, Qualidade, ID_Planta) VALUES
('2024-07-01', 50.0, 'A', 1),
('2024-07-15', 60.0, 'B+', 2),
('2024-07-20', 55.0, 'A+', 3),
('2024-07-25', 70.0, 'S', 4),
('2024-07-30', 65.0, 'A', 5),
('2024-08-01', 75.0, 'A+', 6),
('2024-08-10', 80.0, 'S', 7),
('2024-08-20', 85.0, 'A', 8),
('2024-08-25', 90.0, 'B+', 9),
('2024-08-30', 95.0, 'A+', 10);

-- Inserir dados na tabela Equipamento
INSERT INTO Equipamento (Tipo, Estado_Conservacao, Data_Ultima_Manutencao, ID_Estufa) VALUES
('Trator', 'Bom', '2024-06-01', 1),
('Pulverizador', 'Regular', '2024-05-15', 2),
('Irrigador', 'Excelente', '2024-07-01', 3),
('Colheitadeira', 'Bom', '2024-06-20', 4),
('Semeadora', 'Regular', '2024-05-25', 5),
('Trator', 'Bom', '2024-07-15', 6),
('Pulverizador', 'Regular', '2024-06-10', 7),
('Irrigador', 'Excelente', '2024-08-01', 8),
('Colheitadeira', 'Bom', '2024-07-20', 9),
('Semeadora', 'Regular', '2024-06-25', 10);

-- Inserir dados na tabela Pedido_Insumo
INSERT INTO Pedido_Insumo (Data_Pedido, Quantidade, ID_Fornecedor, ID_Funcionario) VALUES
('2024-01-05', 100.0, 1, 1),
('2024-02-10', 150.0, 2, 2),
('2024-03-15', 200.0, 3, 3),
('2024-04-20', 250.0, 4, 4),
('2024-05-25', 300.0, 5, 5),
('2024-06-30', 350.0, 6, 6),
('2024-07-05', 400.0, 7, 7),
('2024-08-10', 450.0, 8, 8),
('2024-09-15', 500.0, 9, 9),
('2024-10-20', 550.0, 10, 10);

-- Inserir dados na tabela Insumos
INSERT INTO Insumos (Quantidade, Tipo, Data_Aplicacao, ID_Funcionario, ID_Pedido) VALUES
(50.0, 'Fertilizante', '2024-01-10', 1, 1),
(75.0, 'Semente', '2024-02-15', 2, 2),
(100.0, 'Herbicida', '2024-03-20', 3, 3),
(125.0, 'Pesticida', '2024-04-25', 4, 4),
(150.0, 'Equipamento', '2024-05-30', 5, 5),
(175.0, 'Fertilizante', '2024-06-05', 6, 6),
(200.0, 'Semente', '2024-07-10', 7, 7),
(225.0, 'Herbicida', '2024-08-15', 8, 8),
(250.0, 'Pesticida', '2024-09-20', 9, 9),
(275.0, 'Equipamento', '2024-10-25', 10, 10);

-- Inserir dados na tabela Comprador
INSERT INTO Comprador (Nome, Contato, ID_Lote) VALUES
('Comprador A', 'contatoA@example.com', 1),
('Comprador B', 'contatoB@example.com', 2),
('Comprador C', 'contatoC@example.com', 3),
('Comprador D', 'contatoD@example.com', 4),
('Comprador E', 'contatoE@example.com', 5),
('Comprador F', 'contatoF@example.com', 6),
('Comprador G', 'contatoG@example.com', 7),
('Comprador H', 'contatoH@example.com', 8),
('Comprador I', 'contatoI@example.com', 9),
('Comprador J', 'contatoJ@example.com', 10);

-- Inserir dados na tabela Venda
INSERT INTO Venda (Data_Venda, Quantidade, Preco, ID_Lote, ID_Comprador) VALUES
('2024-07-05', 50.0, 1000.00, 1, 1),
('2024-07-10', 60.0, 1200.00, 2, 2),
('2024-07-15', 55.0, 1100.00, 3, 3),
('2024-07-20', 70.0, 1400.00, 4, 4),
('2024-07-25', 65.0, 1300.00, 5, 5),
('2024-07-30', 75.0, 1500.00, 6, 6),
('2024-08-05', 80.0, 1600.00, 7, 7),
('2024-08-10', 85.0, 1700.00, 8, 8),
('2024-08-15', 90.0, 1800.00, 9, 9),
('2024-08-20', 95.0, 1900.00, 10, 10);
