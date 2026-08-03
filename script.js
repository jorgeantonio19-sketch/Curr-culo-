// ==========================
// PREVIEW DA FOTO
// ==========================

function previewFoto(input) {

    const preview = document.getElementById("photoPreview");

    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.innerHTML =
                `<img src="${e.target.result}" alt="Foto">`;

        };

        reader.readAsDataURL(input.files[0]);

    }

}

// ==========================
// ATUALIZA NOME
// ==========================

function atualizarNome() {

    const nome = document
        .getElementById("nomeCompleto")
        .value
        .trim();

    document.getElementById("nomeExibido").textContent =
        nome || "Nome do Colaborador";

}

// ==========================
// ADICIONAR EXPERIÊNCIA
// ==========================

function adicionarExperiencia() {

    const container = document.getElementById("experienciasContainer");

    const experiencia = document.createElement("div");

    experiencia.className = "experiencia-item";

    experiencia.innerHTML = `

<button class="btn-remover"
onclick="this.parentElement.remove()">

✕
</button>

<div class="form-group full">

<label>Cargo / Função</label>

<input
type="text"
placeholder="Ex.: Operador / Técnico">

</div>

<div class="form-group full">

<label>Empresa / Organização</label>

<input
type="text"
placeholder="Nome da empresa">

</div>

<div class="form-row">

<div class="form-group">

<label>Data de Início</label>

<input type="text" placeholder="mm/aaaa">

</div>

<div class="form-group">

<label>Data de Fim</label>

<input type="text" placeholder="mm/aaaa">

</div>

</div>

<div class="form-group full">

<label>Principais Responsabilidades</label>

<textarea
placeholder="Descreva as funções exercidas..."></textarea>

</div>

`;

    container.appendChild(experiencia);

}

// ==========================
// EXPORTAR PDF
// ==========================

function exportarPDF() {

    window.print();

}
