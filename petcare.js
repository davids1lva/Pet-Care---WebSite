'use strict';
// Menu móvel existente, centralizado.
const menu = document.querySelector('#menu-principal');
const botao = document.querySelector('.botao-menu');
if (menu && botao) {
    function abrir(ativo) {
        menu.classList.toggle('menu-aberto', ativo);
        botao.setAttribute('aria-expanded', String(ativo));
        botao.setAttribute('aria-label', ativo ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        botao.textContent = ativo ? '✕' : '☰';
    }
    botao.addEventListener('click', () => abrir(!menu.classList.contains('menu-aberto')));
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !botao.contains(e.target)) abrir(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('menu-aberto')) { abrir(false); botao.focus(); } });
}
// 1. Validação acessível baseada nas restrições HTML5.
const form = document.querySelector('#form-contacto');
if (form) {
    const campos = [...form.querySelectorAll('input, select, textarea')];
    const resumo = document.querySelector('#erros-form');
    const resultado = document.querySelector('#resultado-form');
    const servico = document.querySelector('#servico');
    const data = document.querySelector('#data');
    const campoData = document.querySelector('#campo-data');
    const hoje = new Date();
    data.min = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
    form.noValidate = true;
    function validar(campo) {
        if (campo.disabled) return true;
        const v = campo.validity;
        let msg = '';
        if (v.valueMissing || (campo.required && !campo.value.trim())) msg = campo.type === 'checkbox' ? 'Confirme o pedido de contacto.' : 'Preencha este campo obrigatório.';
        else if (v.typeMismatch) msg = 'Introduza um endereço de e-mail válido.';
        else if (v.patternMismatch) msg = 'Introduza 9 algarismos.';
        else if (v.rangeUnderflow) msg = 'Escolha a data de hoje ou uma data futura.';
        else if (!v.valid) msg = 'Verifique o valor introduzido.';
        document.getElementById(`erro-${campo.id}`).textContent = msg;
        campo.setAttribute('aria-invalid', String(Boolean(msg)));
        return !msg;
    }
    campos.forEach(campo => {
        const erro = document.createElement('span');
        erro.id = `erro-${campo.id}`;
        erro.className = 'erro-campo';
        campo.parentElement.append(erro);
        campo.setAttribute('aria-describedby', [campo.getAttribute('aria-describedby'), erro.id].filter(Boolean).join(' '));
        function atualizar() {
            resultado.textContent = '';
            resultado.hidden = true;
            resumo.textContent = '';
            resumo.hidden = true;
            if (campo.hasAttribute('aria-invalid')) validar(campo);
        }
        campo.addEventListener('input', atualizar);
        campo.addEventListener('change', atualizar);
    });
    // Pedidos de esclarecimento não precisam de data.
    function atualizarData() {
        const duvidas = servico.value === 'duvidas';
        campoData.hidden = duvidas;
        data.disabled = duvidas;
        data.required = !duvidas;
        if (duvidas) {
            data.value = '';
            data.removeAttribute('aria-invalid');
            document.querySelector('#erro-data').textContent = '';
        }
        resumo.textContent = '';
        resumo.hidden = true;
    }
    servico.addEventListener('change', atualizarData);
    window.addEventListener('pageshow', atualizarData);
    atualizarData();
    form.addEventListener('submit', e => {
        e.preventDefault();
        resultado.textContent = '';
        resultado.hidden = true;
        const invalidos = campos.filter(campo => !validar(campo));
        if (invalidos.length) {
            resumo.textContent = `Corrija ${invalidos.length} campo(s) assinalado(s).`;
            resumo.hidden = false;
            invalidos[0].focus();
        } else {
            resumo.textContent = '';
            resumo.hidden = true;
            resultado.textContent = 'Formulário validado com sucesso.';
            resultado.hidden = false;
        }
    });
}
// 2. Filtro interativo da galeria.
const filtro = document.querySelector('#filtro-galeria');
if (filtro) {
    const fotos = [...document.querySelectorAll('[data-categoria]')];
    function filtrar() {
        fotos.forEach(foto => { foto.hidden = filtro.value !== 'todos' && foto.dataset.categoria !== filtro.value; });
        document.querySelector('#resultado-galeria').textContent = `${fotos.filter(foto => !foto.hidden).length} fotografia(s) apresentada(s).`;
    }
    filtro.disabled = false;
    filtro.addEventListener('change', filtrar);
    filtrar();
}
// 3. Tema escuro persistente entre páginas.
const tema = document.querySelector('#tema');
if (tema && menu) {
    menu.appendChild(tema);
}
function aplicar(ativo) {
    document.documentElement.classList.toggle('tema-escuro', ativo);
    if (tema) {
        tema.setAttribute('aria-pressed', String(ativo));
        tema.innerHTML = ativo
    ? '<span class="tema-icone" aria-hidden="true">☀︎</span><span class="tema-texto">Versão diurna</span>'
    : '<span class="tema-icone" aria-hidden="true">☾</span><span class="tema-texto">Versão noturna</span>';

tema.title = ativo ? 'Versão diurna' : 'Versão noturna';
        tema.setAttribute('aria-label', 'Versão noturna');
    }
}
function ler() { try { return localStorage.getItem('petcare-tema-escuro') === 'true'; } catch { return false; } }
aplicar(ler());
if (tema) {
    tema.hidden = false;
    tema.addEventListener('click', () => {
        const ativo = !document.documentElement.classList.contains('tema-escuro');
        aplicar(ativo);
        try { localStorage.setItem('petcare-tema-escuro', String(ativo)); } catch { /* armazenamento indisponível */ }
        document.querySelectorAll('.demo-frame').forEach(frame => frame.contentWindow.postMessage({ temaEscuro: ativo }, location.origin));
    });
}
window.addEventListener('storage', e => { if (e.key === 'petcare-tema-escuro') aplicar(ler()); });
window.addEventListener('message', e => { if (e.origin === location.origin && e.source === window.parent && typeof e.data?.temaEscuro === 'boolean') aplicar(e.data.temaEscuro); });
