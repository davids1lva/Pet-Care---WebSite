# PetCare — Cuidados e Serviços para Animais de Estimação

Projeto académico de **Programação Web — Cliente (15791)**, ISLA Gaia, entrega final E8.

## Sobre o projeto

O PetCare apresenta uma empresa fictícia de serviços para animais de estimação em Vila Nova de Gaia, incluindo alojamento, banho, tosquia e passeios. O objetivo é disponibilizar informação clara e uma interface responsiva e acessível para tutores de cães e gatos.

- **Website público:** https://petcare.freedev.app/
- **Alojamento:** InfinityFree, plano gratuito, HTTPS.
- **Repositório:** https://github.com/davids1lva/Pet-Care---WebSite
- **Âmbito:** interface estática, sem servidor de aplicação ou base de dados. O formulário valida os dados no navegador e não envia mensagens.

## Elementos do grupo

| Nome | Número |
|---|---|
| Diogo Barbosa | 22604476 |
| David Silva | 22606172 |
| Diogo Silva | 22605781 |
| Rafael Guimarães | 22604812 |

## Páginas

| Ficheiro | Conteúdo |
|---|---|
| `index.html` | Página inicial |
| `servicos.html` | Serviços e preços |
| `galeria.html` | Galeria e filtro |
| `sobre.html` | Equipa e instalações |
| `contactos.html` | Formulário e contactos |
| `artigo.html` | Artigo académico |
| `acessibilidade.html` | Declaração de acessibilidade |
| `comparacao.html` | Comparação de frameworks |

## Tecnologias e versões

- HTML5, CSS3, Flexbox, CSS Grid e media queries (480, 768 e 1024 px).
- Bootstrap 5.3.8, carregado por CDN; única framework do sítio principal.
- Foundation 6.9.0 e W3.CSS 4, apenas nos exemplos isolados da E7.
- JavaScript nativo (ECMAScript, sem bibliotecas adicionais), em `petcare.js`.
- Git e GitHub para controlo de versões; InfinityFree para publicação.
- W3C HTML/CSS Validator, Lighthouse Mobile e WAVE (auditoria E6).

## Escolha da framework

Foi escolhido o Bootstrap pela integração já realizada nas grelhas da galeria e da equipa, nos botões, cartões, tabelas, campos de formulário e alertas. A E7 compara o mesmo cartão de serviço em três documentos independentes, com personalização mínima de cada framework e estilos nativos preservados. A escolha não se baseia numa alegação de menor número de linhas de CSS. Consultar `comparacao.html` e `docs/E7/decisao-framework-revista.pdf`.

## Execução local

1. Clonar ou descarregar o repositório, mantendo `imagens/` e `comparacao/`.
2. Abrir a pasta no Visual Studio Code e iniciar o Live Server em `index.html`.
3. Alternativamente, na raiz, executar `python -m http.server 8000` e abrir `http://localhost:8000/`.
4. Manter ligação à Internet para carregar as frameworks por CDN.

Para publicar, colocar os ficheiros do sítio na pasta `htdocs` do InfinityFree, incluindo o `sitemap.xml` e qualquer documento referenciado pelo artigo. Manter os nomes e maiúsculas/minúsculas das pastas. Depois de atualizar, verificar a cache e testar o URL público.

## Funcionalidades JavaScript (E8)

1. Validação acessível do formulário: campos obrigatórios, e-mail, telefone opcional com nove algarismos, data não passada e consentimento. A opção Esclarecimento de dúvidas esconde, limpa e desativa a data. Mensagens associadas por `aria-describedby`, `aria-invalid`, resumo de erros e foco no primeiro campo inválido.
2. Filtro da galeria: categorias via `data-categoria`, atributo `hidden` e contagem de resultados com `role="status"`.
3. Alternador diurno/noturno: classe `tema-escuro`, `localStorage`, `aria-pressed`, botão compacto no desktop e no final do menu móvel.
4. Menu hambúrguer: estado de abertura, fecho pelo botão, clique exterior ou Escape.

Os cartões da equipa têm animação CSS com sombra, elevação de 1,5 px e escala de 1,025, apenas com rato, respeitando `prefers-reduced-motion`.

## Evolução do projeto

- E1–E2: estrutura HTML, sitemap, wireframes, planeamento e formulário.
- E3–E4: CSS, guia de estilo, contraste, modelo de caixa e navegação por teclado.
- E5: design responsivo, imagens adaptáveis, Flexbox e Grid.
- E6: Bootstrap, grelhas e auditorias Lighthouse/WAVE.
- E7: comparação de frameworks e experiência de texto alternativo com Gemini.
- E8: correção da comparação, JavaScript, tema noturno, publicação e auditorias finais.

## Validação e auditorias da E8

Na versão testada em 28/11/2026, o grupo obteve zero erros na validação HTML e CSS, não detetou erros na consola durante os testes das funcionalidades JavaScript e obteve as pontuações Lighthouse Mobile abaixo. O objetivo da E8 é atingir pelo menos 90 em acessibilidade e SEO em cada página. As capturas originais são a evidência; os resultados automáticos não certificam conformidade integral com as WCAG 2.2 AA.

| Página | Acessibilidade | SEO |
|---|---:|---:|
| `index.html` | 100 | 100 |
| `servicos.html` | 100 | 100 |
| `galeria.html` | 100 | 100 |
| `sobre.html` | 100 | 100 |
| `contactos.html` | 100 | 100 |
| `artigo.html` | 100 | 100 |
| `acessibilidade.html` | 100 | 100 |
| `comparacao.html` | 100 | 100 |

O alojamento gratuito apresenta uma verificação de segurança que pode impedir o validador W3C de obter o HTML real por URL. Foi utilizado o carregamento direto dos ficheiros.

## Organização e documentação

- `style.css`: estilos base e responsividade.
- `bootstrap-custom.css`: personalizações da framework.
- `e8.css`: validação, filtro, tema e animação dos cartões.
- `petcare.js`: funcionalidades cliente.
- `comparacao/`: exemplos independentes e CSS próprio.
- `imagens/`: recursos visuais.
- `sitemap.xml`: oito páginas públicas.
- `docs/E1/` a `docs/E8/`: documentação e evidências por etapa.
- `docs/E8/checklist-E8.md`, `relatorio-validacao-E8.md`, `testes-javascript.md`, `guiao.md`: documentação final.


## Artigo académico

**O Papel da Inteligência Artificial na Avaliação da Acessibilidade Web**

Questão orientadora: como pode a Inteligência Artificial ajudar a identificar problemas de acessibilidade em websites?

O artigo aborda a análise de imagens, a análise de código HTML e a interpretação de relatórios de auditoria. A experiência prática com o Gemini utilizou cinco imagens do PetCare e cinco critérios de avaliação (precisão, clareza, objetividade, adequação ao contexto e utilidade para a acessibilidade). A média global original foi de **4,96/5**. A comparação com os atributos `alt` existentes no website é retrospetiva; as pontuações dizem respeito às sugestões do Gemini e não constituem prova de conformidade com as WCAG.


O artigo inclui a declaração de utilização de IA e as referências bibliográficas. A versão exata do Gemini não está identificada nas capturas (modo Automático).

---

Projeto académico — ISLA Gaia | Programação Web — Cliente (15791) | E8 | novembro de 2026.
