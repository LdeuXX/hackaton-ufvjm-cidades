const cidades = {
    saopaulo: {
        nome: "São Paulo",
        imagens: "imagens/saopaulo.png",
        intro: "Em São Paulo, os Ecopontos são administrados pela Prefeitura e atendem via central 156.",
        pontos: [
            { nome: "Ecoponto Bela Vista", endereco: "Rua 14 de Julho, 65 – Bela Vista", telefone: "Central 156",
                materiais: "Vidro, plástico, papel, papelão, metais, móveis velhos, restos de poda e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "metal", "moveis", "entulho"] },
            { nome: "Ecoponto Pinheiros", endereco: "Praça Victor Civita (Rua Sumidouro, 448) – Pinheiros", telefone: "Central 156",
                materiais: "Vidro, plástico, papel, papelão, metais, móveis velhos, restos de poda e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "metal", "moveis", "entulho"] },
            { nome: "Ecoponto Vila Mariana", endereco: "Rua Santa Cruz, 1452 (abaixo do viaduto) – Vila Mariana", telefone: "Central 156",
                materiais: "Vidro, plástico, papel, papelão, metais, móveis velhos, restos de poda e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "metal", "moveis", "entulho"] },
            { nome: "Ecoponto Mooca", endereco: "Avenida Pires do Rio, s/n (próximo ao viaduto) – Mooca", telefone: "Central 156",
                materiais: "Vidro, plástico, papel, papelão, metais, móveis velhos, restos de poda e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "metal", "moveis", "entulho"] },
            { nome: "Ecoponto Santana", endereco: "Avenida Zaki Narchi, 737 – Santana", telefone: "Central 156",
                materiais: "Vidro, plástico, papel, papelão, metais, móveis velhos, restos de poda e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "metal", "moveis", "entulho"] }
        ]
    },
    riodejaneiro: {
        nome: "Rio de Janeiro",
        imagens: "imagens/rio.png",
        intro: "No Rio, os PEVs e Ecopontos são acionados pela central 1746 da Prefeitura.",
        pontos: [
            { nome: "PEV Tijuca", endereco: "Rua Dr. Renato Rocco, 400 – Tijuca", telefone: "1746",
                materiais: "Papel, metal, plástico e vidro (limpos e secos), pequenos entulhos e bens inservíveis (móveis/eletrodomésticos).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] },
            { nome: "Ecoponto Rocinha", endereco: "Estrada da Gávea, 199 – Rocinha", telefone: "1746",
                materiais: "Papel, metal, plástico e vidro (limpos e secos), lixo domiciliar, pequenas quantidades de entulho e galhadas.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho"] },
            { nome: "PEV Botafogo", endereco: "Rua General Polidoro, 65 – Botafogo", telefone: "1746",
                materiais: "Papel, metal, plástico e vidro (limpos e secos), pequenos entulhos e bens inservíveis (móveis/eletrodomésticos).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] },
            { nome: "PEV Marechal Hermes", endereco: "Rua Comandante Magalhães de Almeida, 217", telefone: "1746",
                materiais: "Recicláveis, pequenos entulhos e bens inservíveis.",
                tags: ["reciclaveis", "entulho", "moveis"] },
            { nome: "PEV Penha", endereco: "Rua Merindiba, s/nº", telefone: "1746",
                materiais: "Recicláveis, pequenos entulhos e bens inservíveis.",
                tags: ["reciclaveis", "entulho", "moveis"] },
            { nome: "PEV Bangu", endereco: "Rua Roque Barbosa, 348 (Vila Catiri)", telefone: "1746",
                materiais: "Recicláveis, pequenos entulhos e bens inservíveis.",
                tags: ["reciclaveis", "entulho", "moveis"] },
            { nome: "PEV Campo Grande", endereco: "Estrada do Magarça, 1", telefone: "1746",
                materiais: "Recicláveis, pequenos entulhos e bens inservíveis.",
                tags: ["reciclaveis", "entulho", "moveis"] },
            { nome: "Ecoponto Recreio", endereco: "Rua Léon Eliachar, s/nº", telefone: "1746",
                materiais: "Recicláveis, lixo domiciliar, entulhos e galhadas.",
                tags: ["reciclaveis", "entulho"] }
        ]
    },
    brasilia: {
        nome: "Brasília",
        imagens: "imagens/brasilia.png",
        intro: "Em Brasília, os Papa-Entulhos aceitam até 1 m³ de resíduos de obra por dia, além de recicláveis.",
        pontos: [
            { nome: "Papa-Entulho Asa Sul", endereco: "Avenida das Nações L4 Sul (Núcleo de Limpeza do SLU, próximo à UNIEURO)", telefone: "162 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de obras (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] },
            { nome: "Papa-Entulho Águas Claras", endereco: "Avenida Jacarandá, Lote 24 (próximo à Subestação Elétrica de Furnas)", telefone: "162 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de obras (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] },
            { nome: "Papa-Entulho Taguatinga", endereco: "Setor G Norte, QNG 47", telefone: "162 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de obras (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] }
        ]
    },
    fortaleza: {
        nome: "Fortaleza",
        imagens: "imagens/fortaleza.png",
        intro: "Em Fortaleza, os Ecopontos são administrados em parceria com a Ecofor.",
        pontos: [
            { nome: "Ecoponto Verdes Mares (Papicu)", endereco: "Rua Júlia Azevedo, 688 – Papicu", telefone: "156 ou 0800 275 4400",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de entulho de obras.",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] },
            { nome: "Ecoponto Monte Castelo", endereco: "Rua Gonçalo Lagos, esquina com Rua Catarina Laboure – Monte Castelo", telefone: "156 ou 0800 275 4400",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de entulho de obras.",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] },
            { nome: "Ecoponto Antônio Bezerra", endereco: "Rua Doutor João Guilherme, em frente ao nº 373 – Antônio Bezerra", telefone: "156 ou 0800 275 4400",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de entulho de obras.",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] },
            { nome: "Ecoponto Cidade 2000", endereco: "Rua Giselda Cysne, 92 (ladeira do posto de saúde) – Cidade 2000", telefone: "156 ou 0800 275 4400",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), óleo de cozinha usado, restos de poda, móveis velhos e pequenas sobras de entulho de obras.",
                tags: ["papel", "metal", "plastico", "vidro", "oleo", "moveis", "entulho"] }
        ]
    },
    salvador: {
        nome: "Salvador",
        imagens: "imagens/salvador.png",
        intro: "Em Salvador, os Ecopontos são atendidos pela central Fala Salvador (156).",
        pontos: [
            { nome: "Ecoponto Itaigara", endereco: "Rua Wanderley de Pinho, s/n (acesso via Av. ACM, atrás do Hiper Posto BR) – Itaigara", telefone: "156 ou (71) 3202-6000",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), resíduos de pequenas obras/reformas, restos de poda de jardim e móveis ou eletrodomésticos velhos.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] },
            { nome: "Ecoponto do Vale da Muriçoca", endereco: "Rua Sérgio de Carvalho, s/n (ao lado da USF Lealdina Barros) – Vale da Muriçoca", telefone: "156 ou (71) 3202-6000",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), resíduos de pequenas obras/reformas, restos de poda de jardim e móveis ou eletrodomésticos velhos.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] },
            { nome: "Ecoponto Itapuã", endereco: "Rua Alto do Abaeté, s/n (em frente à sede do bloco Malê Debalê) – Itapuã", telefone: "156 ou (71) 3202-6000",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), resíduos de pequenas obras/reformas, restos de poda de jardim e móveis ou eletrodomésticos velhos.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] },
            { nome: "Ecoponto Mané Dendê (Alto da Terezinha)", endereco: "Rua Cardeal Jean, s/n – Alto da Terezinha", telefone: "156 ou (71) 3202-6000",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos), resíduos de pequenas obras/reformas, restos de poda de jardim e móveis ou eletrodomésticos velhos.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico"] }
        ]
    },
    belohorizonte: {
        nome: "Belo Horizonte",
        imagens: "imagens/bh.png",
        intro: "Em BH, cada unidade tem um foco diferente de materiais aceitos — vale conferir antes de ir.",
        pontos: [
            { nome: "Gelu Barreiro (Barreiro de Baixo)", endereco: "Rua Vicente de Azevedo, 301 (área interna)", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro.",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "URPV da Paz (Caiçaras)", endereco: "Rua Francisco de Paula Ferreira, s/n (área interna)", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro.",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "Unidade Barão (Nova Suíça)", endereco: "Rua Cacuí, 121 - Nova Suíça", telefone: "(31) 3277-7023",
                materiais: "Vidro, plástico, papel e pequenos volumes de entulho.",
                tags: ["vidro", "plastico", "papel", "entulho"] },
            { nome: "Unidade Santa Lúcia", endereco: "Av. Arthur Bernardes, 3951 - Santa Lúcia", telefone: "(31) 3277-8820",
                materiais: "Garrafas de vidro, latas de metal e garrafas plásticas.",
                tags: ["vidro", "metal", "plastico"] },
            { nome: "Unidade Castelo", endereco: "Av. Pres. Tancredo Neves - Castelo", telefone: "156",
                materiais: "Latas de metal, plástico e pequenos volumes.",
                tags: ["metal", "plastico"] }
        ]
    },
    manaus: {
        nome: "Manaus",
        imagens: "imagens/manaus.png",
        intro: "Em Manaus, o agendamento nos pontos é feito via WhatsApp da Semulsp.",
        pontos: [
            { nome: "Ecoponto Educandos", endereco: "Avenida Lourenço Braga, s/n (antigo prédio do PAC) – Educandos", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro, além de apoio a grandes volumes fluviais e reciclagem estrutural.",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "PEV Pátio Gourmet (Adrianópolis)", endereco: "Rua Terezinha, 1300 – Adrianópolis", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos).",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "PEV Sede da Semulsp (Compensa)", endereco: "Avenida Brasil, s/n – Compensa II", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos).",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "PEV Dom Pedro", endereco: "Avenida Pedro Teixeira, s/n (ao lado da Praça de Alimentação) – Dom Pedro I", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos).",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "PEV Supermercado Vitória (Flores)", endereco: "Avenida Torquato Tapajós, s/n – Flores", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos).",
                tags: ["papel", "metal", "plastico", "vidro"] },
            { nome: "PEV Supermercado Nova Era (Novo Aleixo)", endereco: "Avenida Governador José Lindoso (Av. das Torres), s/n – Novo Aleixo", telefone: "WhatsApp (92) 98459-5618 / (92) 98415-9563",
                materiais: "Papel, metal, plástico, isopor e vidro (limpos e secos).",
                tags: ["papel", "metal", "plastico", "vidro"] }
        ]
    },
    curitiba: {
        nome: "Curitiba",
        imagens: "imagens/curitiba.png",
        intro: "Em Curitiba, os Ecopontos também aceitam óleo de cozinha usado e restos de construção civil.",
        pontos: [
            { nome: "Ecoponto Metropolitano (São Braz)", endereco: "Rua da Independência (esquina com a Rua Pedro Corrêa da Cruz) – São Braz", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, restos de construção civil, madeira, móveis velhos, eletroeletrônicos, resíduos de poda e óleo de cozinha pós-consumo.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico", "oleo"] },
            { nome: "Ecoponto CIC", endereco: "Avenida Manoel Ribas, s/n (Antiga Estação de Sustentabilidade) – Cidade Industrial de Curitiba", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, restos de construção civil, madeira, móveis velhos, eletroeletrônicos, resíduos de poda e óleo de cozinha pós-consumo.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico", "oleo"] },
            { nome: "Ecoponto Érico Veríssimo (Boqueirão)", endereco: "Rua Érico Veríssimo, s/n (próximo à praça) – Alto Boqueirão", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, restos de construção civil, madeira, móveis velhos, eletroeletrônicos, resíduos de poda e óleo de cozinha pós-consumo.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico", "oleo"] },
            { nome: "Ecoponto Cajuru", endereco: "Rua Prefeito Lothário Meissner, s/n – Cajuru", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, restos de construção civil, madeira, móveis velhos, eletroeletrônicos, resíduos de poda e óleo de cozinha pós-consumo.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis", "eletronico", "oleo"] }
        ]
    },
    recife: {
        nome: "Recife",
        imagens: "imagens/recife.png",
        intro: "Em Recife, as EcoEstações são administradas pela Emlurb e têm limite de 1 m³ de descarte por dia.",
        pontos: [
            { nome: "EcoEstação do Arruda", endereco: "Rua Farias Neves, 954-1002 – Arruda", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, metralhas de pequenas obras, móveis velhos, utensílios domésticos e resíduos de poda (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis"] },
            { nome: "EcoEstação Campo Grande", endereco: "Avenida Governador Agamenon Magalhães, 4130 – Santo Amaro / Campo Grande", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, metralhas de pequenas obras, móveis velhos, utensílios domésticos e resíduos de poda (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis"] },
            { nome: "EcoEstação Torre", endereco: "Rua Ciclovia República da Argélia, 10 – Iputinga / Torre", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, metralhas de pequenas obras, móveis velhos, utensílios domésticos e resíduos de poda (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis"] },
            { nome: "EcoEstação Imbiribeira", endereco: "Viaduto Presidente Tancredo Neves – Imbiribeira", telefone: "156",
                materiais: "Papel, metal, plástico, isopor e vidro, metralhas de pequenas obras, móveis velhos, utensílios domésticos e resíduos de poda (até 1 m³/dia).",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "moveis"] }
        ]
    },
    goiania: {
        nome: "Goiânia",
        imagens: "imagens/goiania.png",
        intro: "Em Goiânia, os Ecopontos são operados pela Comurg e aceitam entulho de até 2 m³ e pneus.",
        pontos: [
            { nome: "Ecoponto Guanabara", endereco: "Rua GB-5 com Rua GB-6 – Jardim Guanabara II", telefone: "(62) 3524-8555 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro, resíduos de construção civil (até 2 m³), restos de poda, pneus (até 4 un.), móveis inservíveis e óleo de cozinha usado.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "pneus", "moveis", "oleo"] },
            { nome: "Ecoponto Faiçalville", endereco: "Avenida Nadra Bufaiçal com Avenida Madri APM – Setor Faiçalville", telefone: "(62) 3524-8555 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro, resíduos de construção civil (até 2 m³), restos de poda, pneus (até 4 un.), móveis inservíveis e óleo de cozinha usado.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "pneus", "moveis", "oleo"] },
            { nome: "Ecoponto São José", endereco: "Rua Frei Nazareno Confaloni com Rua Irmã Maria Bernarda – Jardim São José", telefone: "(62) 3524-8555 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro, resíduos de construção civil (até 2 m³), restos de poda, pneus (até 4 un.), móveis inservíveis e óleo de cozinha usado.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "pneus", "moveis", "oleo"] },
            { nome: "Ecoponto Campos Dourados", endereco: "Rua São João Del Rei, APM 07 – Residencial Campos Dourados", telefone: "(62) 3524-8555 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro, resíduos de construção civil (até 2 m³), restos de poda, pneus (até 4 un.), móveis inservíveis e óleo de cozinha usado.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "pneus", "moveis", "oleo"] },
            { nome: "Ecoponto Eldorado Oeste", endereco: "Rua Elo 43 – Parque Eldorado Oeste", telefone: "(62) 3524-8555 ou 156",
                materiais: "Papel, metal, plástico, isopor e vidro, resíduos de construção civil (até 2 m³), restos de poda, pneus (até 4 un.), móveis inservíveis e óleo de cozinha usado.",
                tags: ["papel", "metal", "plastico", "vidro", "entulho", "pneus", "moveis", "oleo"] }
        ]
    }
};

const nomesTags = {
    vidro: "Vidro",
    plastico: "Plástico",
    papel: "Papel/Papelão",
    metal: "Metal",
    moveis: "Móveis velhos",
    entulho: "Entulho de obra",
    eletronico: "Eletrônicos",
    oleo: "Óleo de cozinha",
    pneus: "Pneus",
    reciclaveis: "Recicláveis (geral)"
};

// PÁGINA INICIAL
function renderHome() {
    const grid = document.getElementById("grid-cidades");
    if (!grid) return;

    Object.keys(cidades).forEach((slug) => {
        const cidade = cidades[slug];
        const card = document.createElement("a");
        card.className = "card-cidade";
        card.href = `cidade.html?cidade=${slug}`;

        card.innerHTML = `
      <img src="${cidade.imagens}" alt="Foto de ${cidade.nome}" class="card-foto">
      <div class="card-conteudo">
        <h3>${cidade.nome}</h3>
        <p>${cidade.pontos.length} pontos de coleta cadastrados</p>
      </div>
    `;
        grid.appendChild(card);
    });
}

// PÁGINA DA CIDADE
function renderCidade() {
    const container = document.getElementById("conteudo-cidade");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("cidade");
    const cidade = cidades[slug];

    if (!cidade) {
        container.innerHTML = `
      <h1>Cidade não encontrada</h1>
      <p>Volte para a <a href="index.html">página inicial</a> e escolha uma cidade da lista.</p>
    `;
        return;
    }

    document.title = `${cidade.nome} - Coleta Seletiva`;

    const tagsDaCidade = new Set();
    cidade.pontos.forEach((p) => p.tags.forEach((t) => tagsDaCidade.add(t)));

    let filtroHTML = `<option value="todos">Todos os materiais</option>`;
    tagsDaCidade.forEach((tag) => {
        filtroHTML += `<option value="${tag}">${nomesTags[tag] || tag}</option>`;
    });

    container.innerHTML = `
    <div class="cidade-header">
      <img src="${cidade.imagens}" alt="Foto de ${cidade.nome}" class="cidade-foto-grande">
      <div>
        <h1>${cidade.nome}</h1>
        <p>${cidade.intro}</p>
      </div>
    </div>
    
    <div class="cidade-map">
        <iframe width="80%" height="600" style="border:0" allowfullscreen src=${cidade.mapa}><a href="https://www.maps.ie/world-time-zone-map/">time zone search</a></iframe>
    </div>

    <div class="filtro">
      <label for="filtro-material">Filtrar por tipo de material aceito:</label>
      <select id="filtro-material">${filtroHTML}</select>
    </div>

    <div id="lista-pontos" class="lista-pontos"></div>
  `;

    const listaPontos = document.getElementById("lista-pontos");
    const filtro = document.getElementById("filtro-material");

    function desenharPontos(tagSelecionada) {
        listaPontos.innerHTML = "";
        const pontosFiltrados = cidade.pontos.filter(
            (p) => tagSelecionada === "todos" || p.tags.includes(tagSelecionada)
        );

        if (pontosFiltrados.length === 0) {
            listaPontos.innerHTML = `<p class="vazio">Nenhum ponto de coleta encontrado para esse material.</p>`;
            return;
        }

        pontosFiltrados.forEach((ponto) => {
            const item = document.createElement("div");
            item.className = "ponto-coleta";
            item.innerHTML = `
        <h3>${ponto.nome}</h3>
        <p><strong>Endereço:</strong> ${ponto.endereco}</p>
        <p><strong>Telefone:</strong> ${ponto.telefone}</p>
        <p><strong>Materiais aceitos:</strong> ${ponto.materiais}</p>
      `;
            listaPontos.appendChild(item);
        });
    }

    desenharPontos("todos");
    filtro.addEventListener("change", (e) => desenharPontos(e.target.value));
}
renderHome();
renderCidade();