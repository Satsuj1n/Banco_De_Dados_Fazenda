async function criarPlanta() {
  const formData = new FormData();
  formData.append("variedade", document.getElementById("variedade").value);
  formData.append("data_plantio", document.getElementById("dataPlantio").value);
  formData.append("estagio_crescimento", document.getElementById("estagioCrescimento").value);
  formData.append("id_lote", document.getElementById("idLotePlanta").value);
  formData.append("id_estufa", document.getElementById("idEstufaPlanta").value);

  // Adiciona a imagem ao FormData se um arquivo foi selecionado
  const imagem = document.getElementById("imagem").files[0];
  if (imagem) {
    formData.append("imagem", imagem);
  }

  const response = await fetch("http://localhost:3000/planta", {
    method: "POST",
    body: formData,
  });

  const mensagem = await response.text()
  showModal("Alerta!", mensagem);

  document.getElementById("variedade").value = "";
  document.getElementById("dataPlantio").value = "";
  document.getElementById("estagioCrescimento").value = "";
  document.getElementById("idLotePlanta").value = "";
  document.getElementById("idEstufaPlanta").value = "";
  document.getElementById("imagem").value = "";
}

async function verPlantas() {
  const listaPlantasDiv = document.getElementById("listaPlantas");
  if (
    listaPlantasDiv.style.display === "none" ||
    listaPlantasDiv.innerHTML === ""
  ) {
    const response = await fetch("http://localhost:3000/planta");
    const plantas = await response.json();
    const lista = plantas
      .map(
        (planta) => `
          <div class="p-4 mb-4 bg-white rounded shadow-md">
            <p><strong>ID:</strong> ${planta.ID_Planta}</p>
            <p><strong>Variedade:</strong> ${planta.Variedade}</p>
            <p><strong>Data de Plantio:</strong> ${planta.Data_Plantio}</p>
            <p><strong>Estágio de Crescimento:</strong> ${
              planta.Estagio_Crescimento
            }</p>
            <p><strong>ID Lote:</strong> ${planta.ID_Lote}</p>
            <p><strong>ID Estufa:</strong> ${planta.ID_Estufa}</p>
            ${
              planta.Imagem
                ? `<img src="data:image/png;base64,${planta.Imagem}" style="max-width: 128px; max-height: 128px;" class="w-full h-auto mt-2" alt="Imagem da Planta"/>`
                : ""
            }
          </div>
          `
      )
      .join("");
    listaPlantasDiv.innerHTML = lista;
    listaPlantasDiv.style.display = "block";
  } else {
    listaPlantasDiv.style.display = "none";
  }
}

async function listarPlantas() {
  const removerPlantaDiv = document.getElementById("removerPlantaDiv");
  if (
    removerPlantaDiv.style.display === "none" ||
    removerPlantaDiv.innerHTML === ""
  ) {
    const response = await fetch("http://localhost:3000/planta");
    const plantas = await response.json();
    const options = plantas
      .map(
        (planta) =>
          `<option value="${planta.ID_Planta}" class="p-2 text-gray-700">ID: ${planta.ID_Planta}</option>`
      )
      .join("");
    const select = `
      <p class="mb-2 text-sm text-gray-600"><strong>Nota:</strong> Certifique-se de excluir todas as colheitas associadas antes de remover a planta.</p>
      <select id="plantaSelect" class="p-2 mb-4 border border-gray-300 rounded">ID: ${options}</select>
      <button onclick="removerPlanta()" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Remover</button>
      `;
    removerPlantaDiv.innerHTML = select;
    removerPlantaDiv.style.display = "block";
  } else {
    removerPlantaDiv.style.display = "none";
  }
}

async function removerPlanta() {
  const id = document.getElementById("plantaSelect").value;
  try {
    const response = await fetch(`http://localhost:3000/planta/${id}`, {
      method: "DELETE",
    });

    const mensagem = await response.text()
    if (response.ok) {
      showModal("Sucesso", mensagem);
      listarPlantas();
    } else {
      showModal("Erro",mensagem)
    }
  } catch (error){
    showModal("Erro", `Erro na requisição: ${error.message}`)
  }
}

// Função para atualizar as informações da Planta
async function atualizarPlanta() {
  const idPlanta = document.getElementById("idPlanta").value;
  const formData = new FormData();
  formData.append(
    "variedade",
    document.getElementById("variedadeAtualizar").value
  );
  formData.append(
    "data_plantio",
    document.getElementById("dataPlantioAtualizar").value
  );
  formData.append(
    "estagio_crescimento",
    document.getElementById("estagioCrescimentoAtualizar").value
  );
  formData.append(
    "id_lote",
    document.getElementById("idLotePlantaAtualizar").value
  );
  formData.append(
    "id_estufa",
    document.getElementById("idEstufaPlantaAtualizar").value
  );

  // Anexa a imagem ao FormData se ela existir
  const imagem = document.getElementById("imagemAtualizar").files[0];
  if (imagem) {
    formData.append("imagem", imagem);
  }

  try {
    const response = await fetch(`http://localhost:3000/planta/${idPlanta}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const erro = await response.text();
      throw new Error(erro);
    }

    const resultado = await response.json();
    
    showModal("Sucesso",`A planta com o ID:${idPlanta} foi atualizada com sucesso!`);
  } catch (error) {
    showModal("Erro",`Ocorreu um erro ao tentar atualizar a planta: ${error.message}`);
  }
  document.getElementById("variedadeAtualizar").value = "";
  document.getElementById("dataPlantioAtualizar").value = "";
  document.getElementById("estagioCrescimentoAtualizar").value = "";
  document.getElementById("idLotePlantaAtualizar").value = "";
  document.getElementById("idEstufaPlantaAtualizar").value = "";
  document.getElementById("imagemAtualizar").value = "";
}

// Função para mostrar ou ocultar o formulário de atualização
function toggleFormularioAtualizarPlanta() {
  const form = document.getElementById("atualizarPlantaForm");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
