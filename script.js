/*
 * script.js
 * Contém funcionalidades de interação: gerador de curiosidades,
 * feedback do formulário de contato e ação simples de carrinho.
 */

// Lista de curiosidades sobre vinil e CDs (citadas a partir das fontes pesquisadas)
const facts = [
    'O fonógrafo de Thomas Edison, criado em 1877, utilizava cilindros de folha metálica para gravar e reproduzir sons.',
    'O gramofone de Emile Berliner, de 1887, trocou os cilindros por discos planos, aproximando‑se do toca‑discos moderno.',
    'Os primeiros discos giravam a 78 RPM e eram feitos de shellac. Tinham capacidade limitada e se tornaram obsoletos com a chegada dos LPs.',
    'O LP de 12 polegadas introduzido em 1948 permitiu gravar um álbum completo em cada lado graças ao uso de policloreto de vinila.',
    'O CD, lançado em 1982, conquistou o público pela portabilidade e confiabilidade, mas o vinil voltou a superar o formato nos anos 2020.',
    'Em 2022, os discos de vinil venderam 41,3 milhões de unidades nos EUA, superando os 33,4 milhões de CDs.',
    'No primeiro semestre de 2023, o vinil representou 72 % da receita de formatos físicos não digitais nos Estados Unidos.'
];

// Função para exibir uma curiosidade aleatória
function showRandomFact() {
    const display = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    display.textContent = facts[randomIndex];
}

// Associar evento ao botão de curiosidades
document.addEventListener('DOMContentLoaded', () => {
    const factBtn = document.getElementById('fact-button');
    if (factBtn) {
        factBtn.addEventListener('click', showRandomFact);
    }

    // Manipulação do formulário de contato
    const form = document.getElementById('contact-form');
    const responseEl = document.getElementById('form-response');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            // Exibir mensagem personalizada
            responseEl.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
            // Limpar o formulário
            form.reset();
        });
    }

    // Ação simples para os botões "Adicionar ao carrinho"
    const cartButtons = document.querySelectorAll('.add-cart');
    cartButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Item adicionado ao carrinho!');
        });
    });
});