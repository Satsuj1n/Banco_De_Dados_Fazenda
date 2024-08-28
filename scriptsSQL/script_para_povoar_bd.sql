USE fazenda;

-- Inserir dados na tabela Estufa
INSERT INTO Estufa (Localizacao, Temperatura, Umidade, Tamanho) VALUES
('Norte', 23.5, 60.2, 100.0),
('Sul', 21.0, 65.0, 80.0),
('Leste', 22.5, 55.0, 120.0),
('Oeste', 24.0, 70.0, 90.0),
('Centro', 25.0, 68.0, 110.0);

-- Inserir dados na tabela Lote
INSERT INTO Lote (Data_Criacao, Numero_Plantas) VALUES
('2024-01-01', 100),
('2024-02-01', 150),
('2024-03-01', 200),
('2024-04-01', 250),
('2024-05-01', 300);

-- Inserir dados na tabela Fornecedor
INSERT INTO Fornecedor (Nome, Contato, Tipo_Insumo) VALUES
('Fornecedor A', 'contatoA@example.com', 'Fertilizante'),
('Fornecedor B', 'contatoB@example.com', 'Semente'),
('Fornecedor C', 'contatoC@example.com', 'Herbicida'),
('Fornecedor D', 'contatoD@example.com', 'Pesticida'),
('Fornecedor E', 'contatoE@example.com', 'Equipamento');

-- Inserir dados na tabela Funcionario
INSERT INTO Funcionario (Nome, Cargo, Horario_Trabalho, ID_Estufa) VALUES
('Carlos Silva', 'Técnico Agrícola', '08:00-17:00', 1),
('Ana Souza', 'Engenheira Agrônoma', '09:00-18:00', 2),
('João Oliveira', 'Operador de Máquinas', '07:00-16:00', 3),
('Maria Santos', 'Gerente de Produção', '08:00-17:00', 4),
('Pedro Lima', 'Assistente Técnico', '09:00-18:00', 5);

-- Inserir dados na tabela Planta
INSERT INTO Planta (Variedade, Data_Plantio, Estagio_Crescimento, ID_Lote, ID_Estufa) VALUES
('Variedade A', '2024-01-10', 'Crescimento Inicial', 1, 1),
('Variedade B', '2024-02-15', 'Crescimento Intermediário', 1, 2),
('Variedade C', '2024-03-20', 'Crescimento Final', 2, 2),
('Variedade D', '2024-04-25', 'Crescimento Inicial', 2, 3),
('Variedade E', '2024-05-30', 'Crescimento Intermediário', 3, 3),
('Variedade F', '2024-06-05', 'Crescimento Final', 3, 4),
('Variedade G', '2024-07-10', 'Crescimento Inicial', 4, 4),
('Variedade H', '2024-08-15', 'Crescimento Intermediário', 4, 5),
('Variedade I', '2024-09-20', 'Crescimento Final', 5, 5),
('Variedade J', '2024-10-25', 'Crescimento Inicial', 5, 1);

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
('Semeadora', 'Regular', '2024-05-25', 5);

-- Inserir dados na tabela Pedido_Insumo
INSERT INTO Pedido_Insumo (Data_Pedido, Quantidade, ID_Fornecedor, ID_Funcionario) VALUES
('2024-01-05', 100.0, 1, 1),
('2024-02-10', 150.0, 2, 2),
('2024-03-15', 200.0, 3, 3),
('2024-04-20', 250.0, 4, 4),
('2024-05-25', 300.0, 5, 5);

-- Inserir dados na tabela Insumos
INSERT INTO Insumos (Quantidade, Tipo, Data_Aplicacao, ID_Funcionario, ID_Pedido) VALUES
(50.0, 'Fertilizante', '2024-01-10', 1, 1),
(75.0, 'Semente', '2024-02-15', 2, 2),
(100.0, 'Herbicida', '2024-03-20', 3, 3),
(125.0, 'Pesticida', '2024-04-25', 4, 4),
(150.0, 'Equipamento', '2024-05-30', 5, 5);

-- Inserir dados na tabela Comprador
INSERT INTO Comprador (Nome, Contato, ID_Lote) VALUES
('Comprador A', 'contatoA@example.com', 1),
('Comprador B', 'contatoB@example.com', 2),
('Comprador C', 'contatoC@example.com', 3),
('Comprador D', 'contatoD@example.com', 4),
('Comprador E', 'contatoE@example.com', 5);

-- Inserir dados na tabela Venda
INSERT INTO Venda (Data_Venda, Quantidade, Preco, ID_Lote, ID_Comprador) VALUES
('2024-07-05', 50.0, 1000.00, 1, 1),
('2024-07-10', 60.0, 1200.00, 2, 2),
('2024-07-15', 55.0, 1100.00, 3, 3),
('2024-07-20', 70.0, 1400.00, 4, 4),
('2024-07-25', 65.0, 1300.00, 5, 5);
