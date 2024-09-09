const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Usuário MySQL
  password: "382157", // Senha MySQL
  database: "fazenda", // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// CRUD para a tabela Estufa
app.post("/estufa", (req, res) => {
  const { localizacao, temperatura, umidade, tamanho } = req.body;

  if (!localizacao || !temperatura || !umidade || !tamanho){
    return res.status(400).json("Todos os campos devem ser preenchidos.")
  }

  const sql =
    "INSERT INTO Estufa (Localizacao, Temperatura, Umidade, Tamanho) VALUES (?, ?, ?, ?)";
  db.query(sql, [localizacao, temperatura, umidade, tamanho], (err, result) => {
    if (err) throw err;
    res.send("Estufa inserida com sucesso!");
  });
});

app.get("/estufa", (req, res) => {
  const sql = "SELECT * FROM Estufa";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/estufa/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Estufa WHERE ID_Estufa = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao excluir estufa: " + "Antes de excluir a estufa, verifique se todas as plantas relacionadas a ela foram removidas.");
    }
    res.send("Estufa excluída com sucesso!");
  });
});

// CRUD para a tabela Lote
app.post("/lote", (req, res) => {
  const { data_criacao, numero_plantas } = req.body;

  if (!data_criacao || !numero_plantas){
    return res.status(400).json("Todos os campos devem ser preenchidos.")
  }

  const sql = "INSERT INTO Lote (Data_Criacao, Numero_Plantas) VALUES (?, ?)";
  db.query(sql, [data_criacao, numero_plantas], (err, result) => {
    if (err) throw err;
    res.send("Lote inserido com sucesso!");
  });
});

app.get("/lote", (req, res) => {
  const sql = "SELECT * FROM Lote";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/lote/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Lote WHERE ID_Lote = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao excluir lote: " + err.message);
    }
    res.send("Lote excluído com sucesso!");
  });
});

// CRUD para a tabela Planta
const multer = require("multer");
const upload = multer();

app.post("/planta", upload.single("imagem"), (req, res) => {
  const { variedade, data_plantio, estagio_crescimento, id_lote, id_estufa } =
    req.body;
  const imagem = req.file ? req.file.buffer : null; // Obtém a imagem, se houver

  if (!variedade || !data_plantio || !estagio_crescimento || !id_lote || !id_estufa){
    return res.status(400).json("Todos os campos devem ser preenchidos, exceto pela imagem que é optativa.")
  }

  const sql =
    "INSERT INTO Planta (Variedade, Data_Plantio, Estagio_Crescimento, ID_Lote, ID_Estufa, Imagem) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [variedade, data_plantio, estagio_crescimento, id_lote, id_estufa, imagem],
    (err, result) => {
      if (err) {
        return res.status(500).send("Erro ao inserir planta: " + "Verifique se o ID_Estufa ou o ID_Lote estão corretos.");
      }
      res.send("Planta inserida com sucesso!");
    }
  );
});

app.get("/planta", (req, res) => {
  const sql = "SELECT * FROM Planta";
  db.query(sql, (err, results) => {
    if (err) throw err;
    // Codifica a imagem em base64 antes de enviar ao cliente
    const plantas = results.map((planta) => ({
      ...planta,
      Imagem: planta.Imagem ? planta.Imagem.toString("base64") : null,
    }));
    res.json(plantas);
  });
});

app.delete("/planta/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Planta WHERE ID_Planta = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao excluir planta: " + err.message);
    }
    res.send("Planta excluída com sucesso!");
  });
});

// CRUD para a tabela Colheita
app.post("/colheita", (req, res) => {
  const { data_colheita, quantidade_colhida, qualidade, id_planta } = req.body;

  if(!data_colheita || !quantidade_colhida || !qualidade || !id_planta){
    return res.status(400).json("Todos os campos devem ser preenchidos.")
  }

  const sql =
    "INSERT INTO Colheita (Data_Colheita, Quantidade_Colhida, Qualidade, ID_Planta) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [data_colheita, quantidade_colhida, qualidade, id_planta], (err, result) => {
      if (err){
        return res.status(500).send("Erro ao inserir colheita: " + "Verifique se o ID_Planta está correto.");
      }
      res.send("Colheita inserida com sucesso!");
    });
});

app.get("/colheita", (req, res) => {
  const sql = "SELECT * FROM Colheita";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/colheita/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Colheita WHERE ID_Colheita = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao excluir colheita: " + err.message);
    }
    res.send("Colheita excluída com sucesso!");
  });
});

// Mostrar as views

// Rota para a View PlantaEstufa
app.get("/vw_PlantaEstufa", (req, res) => {
  db.query("SELECT * FROM vw_PlantaEstufa", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Rota para a View PlantaLote
app.get("/vw_PlantaLote", (req, res) => {
  db.query("SELECT * FROM vw_PlantaLote", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Rota para Atualizar a Estufa
app.put("/estufa/:id", (req, res) => {
  const { id } = req.params;
  const { localizacao, temperatura, umidade, tamanho } = req.body;

  
  if (!localizacao || !temperatura || !umidade || !tamanho){
    return res.status(400).json("Todos os campos devem ser preenchidos.")
  }

  db.query(
    "CALL sp_AtualizarEstufa(?, ?, ?, ?, ?)",
    [id, localizacao, temperatura, umidade, tamanho],
    (err, results) => {
      if (err) {
        return res.status(500).send(err.sqlMessage);
      }
      res.json(results[0]); // Retorna a mensagem de confirmação da Procedure
    }
  );
});

// Rota para Atualizar o Lote
app.put("/lote/:id", (req, res) => {
  const { id } = req.params;
  const { data_criacao, numero_plantas } = req.body;

  if (!data_criacao || !numero_plantas){
    return res.status(400).json("Todos os campos devem ser preenchidos.")
  }

  db.query(
    "CALL sp_AtualizarLote(?, ?, ?)",
    [id, data_criacao, numero_plantas],
    (err, results) => {
      if (err) {
        return res.status(500).send(err.sqlMessage);
      }
      res.json(results[0]); // Retorna a mensagem de confirmação da Procedure
    }
  );
});

// Rota para Atualizar a Planta
app.put("/planta/:id", upload.single("imagem"), (req, res) => {
  const { id } = req.params;
  const { variedade, data_plantio, estagio_crescimento, id_lote, id_estufa } =
    req.body;
  const imagem = req.file ? req.file.buffer : null;

  if (!variedade || !data_plantio || !estagio_crescimento || !id_lote || !id_estufa){
    return res.status(400).json("Todos os campos devem ser preenchidos, exceto pela imagem que é optativa.")
  }

  let sql =
    "UPDATE Planta SET Variedade = ?, Data_Plantio = ?, Estagio_Crescimento = ?, ID_Lote = ?, ID_Estufa = ?";
  const params = [
    variedade,
    data_plantio,
    estagio_crescimento,
    id_lote,
    id_estufa,
  ];

  if (imagem) {
    sql += ", Imagem = ?";
    params.push(imagem);
  }

  sql += " WHERE ID_Planta = ?";
  params.push(id);

  db.query(sql, params, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao atualizar planta: " + err.message });
    }
    res.json({ message: "Planta atualizada com sucesso!" });
  });
});

// Rota para Atualizar a Colheita
app.put("/colheita/:id", (req, res) => {
  const { id } = req.params;
  const { data_colheita, quantidade_colhida, qualidade, id_planta } = req.body;

  if(!data_colheita || !quantidade_colhida || !qualidade || !id_planta){
    return res.status(400).json("Preencha todos os campos.")
  }

  db.query(
    "CALL sp_AtualizarColheita(?, ?, ?, ?, ?)",
    [id, data_colheita, quantidade_colhida, qualidade, id_planta],
    (err, results) => {
      if (err) {
        return res.status(500).send(err.sqlMessage);
      }
      res.json(results[0]); // Retorna a mensagem de confirmação da Procedure
    }
  );
});

// Rota para gerar o relatório de produção
app.get("/relatorio/producao", (req, res) => {
  db.query("CALL sp_GerarRelatorioProducao()", (err, results) => {
    if (err) {
      console.error("Erro ao gerar o relatório de produção:", err);
      return res.status(500).send("Erro ao gerar o relatório de produção");
    }
    res.json(results[0]); // Retorna o resultado da procedure
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
