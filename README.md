# 🐾 PetCare — Cuidados e Serviços para Animais de Estimação

## Sobre o projeto

O **PetCare** é um website académico desenvolvido na unidade curricular **Programação Web — Cliente (15791)**, do **ISLA Gaia**.

O projeto apresenta uma empresa fictícia de serviços para animais de estimação, incluindo alojamento, banhos, tosquias e passeios.

**Website:** https://davids1lva.github.io/Pet-Care---WebSite/

## Elementos do grupo

| Nome | Número |
|---|---|
| Diogo Barbosa | 22604476 |
| David Silva | 22606172 |
| Diogo Silva | 22605781 |
| Rafael Guimarães | 22604812 |

## Páginas do website

- `index.html` — Página inicial
- `servicos.html` — Serviços e preços
- `galeria.html` — Galeria de fotografias
- `sobre.html` — Sobre a PetCare e equipa
- `contactos.html` — Contactos e formulário
- `artigo.html` — Artigo académico
- `acessibilidade.html` — Declaração de acessibilidade

## Etapa 6 — Bootstrap e Auditoria de Acessibilidade

A E6 foi desenvolvida a partir da versão E5, mantendo o design responsivo e integrando a framework **Bootstrap 5.3.8**.

Foram desenvolvidos os seguintes requisitos:

1. **Bootstrap:** integração da framework CSS, com a versão identificada.
2. **Componentes:** utilização de botões, cartões, tabelas, formulários e alertas Bootstrap.
3. **Personalização:** criação do ficheiro `bootstrap-custom.css`, com pelo menos cinco personalizações visuais de acordo com a identidade do PetCare.
4. **Grelha responsiva:** utilização de `row`, `col-12`, `col-md-6` e `col-lg-4` nas páginas Galeria e Sobre Nós.
5. **Artigo académico:** desenvolvimento da primeira versão do artigo *O Papel da Inteligência Artificial na Avaliação da Acessibilidade Web*, com o objetivo de apresentar pelo menos 60% do texto final.
6. **Auditoria de acessibilidade:** avaliação das páginas Início, Contactos e Galeria com Lighthouse e WAVE.

Foi também implementado um **menu hambúrguer na versão móvel**, com cabeçalho persistente e possibilidade de fechar o menu através do botão, de um clique fora ou da tecla Escape.

## Testes e evidências

Foram realizadas auditorias de acessibilidade às três páginas selecionadas.

| Página | Lighthouse Mobile | WAVE Errors | WAVE Contrast Errors | WAVE Alerts |
|---|---:|---:|---:|---:|
| Início | 100/100 | 0 | 0 | 2 |
| Contactos | 100/100 | 0 | 0 | 1 |
| Galeria | 100/100 | 0 | 0 | 1 |

Os alertas identificados pelo WAVE foram registados para revisão manual. Os resultados automáticos não substituem uma avaliação completa da acessibilidade.

**Documentação da E6:** `docs/E6/auditoria/`

Esta pasta reúne o relatório e as seis capturas das auditorias Lighthouse e WAVE.

## Tecnologias utilizadas

- HTML5 e CSS3
- Bootstrap 5.3.8
- Flexbox e CSS Grid
- Media Queries
- JavaScript — menu hambúrguer
- Lighthouse e WAVE
- Git e GitHub
- GitHub Pages

## Etapas do projeto

- **E3:** estilização CSS, guia de estilo e validação.
- **E4:** modelo de caixa, tabelas, formulários, elementos HTML5 e acessibilidade.
- **E5:** design responsivo, Flexbox, Grid, imagens adaptáveis e alvos de toque.
- **E6:** Bootstrap, componentes personalizados, grelha responsiva, artigo académico e auditoria de acessibilidade.

---

**Projeto académico — ISLA Gaia | Programação Web — Cliente (15791) | E6**
