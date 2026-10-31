# 🐾 PetCare — Cuidados e Serviços para Animais de Estimação

## 📌 Sobre o projeto

O **PetCare** é um website académico desenvolvido no âmbito da unidade curricular **Programação Web — Cliente (15791)**, do **ISLA Gaia**.

O projeto apresenta uma empresa fictícia dedicada aos cuidados e bem-estar dos animais de estimação, disponibilizando informações sobre alojamento, higiene, passeios e outros serviços.

O website foi desenvolvido em **HTML5 e CSS3**, privilegiando a organização dos conteúdos, a apresentação visual, a semântica e a acessibilidade.

## 🔗 Ligações

- **Website:** https://davids1lva.github.io/Pet-Care---WebSite/
- **Repositório GitHub:** https://github.com/davids1lva/Pet-Care---WebSite

## 👥 Elementos do grupo

| Nome | Número de estudante |
|---|---|
| Diogo Barbosa | 22604476 |
| David Silva | 22606172 |
| Diogo Silva | 22605781 |
| Rafael Guimarães | 22604812 |

## 📄 Páginas do website

O projeto contém sete páginas HTML:

| Ficheiro | Descrição |
|---|---|
| `index.html` | Página inicial e apresentação do PetCare |
| `servicos.html` | Serviços disponibilizados e tabela de preços |
| `galeria.html` | Galeria de imagens dos animais e atividades |
| `sobre.html` | Apresentação da empresa e da equipa |
| `contactos.html` | Informações de contacto e formulário demonstrativo |
| `acessibilidade.html` | Medidas de acessibilidade utilizadas |
| `artigo.html` | Preparação do artigo académico |

## 🎯 Etapa 4 — Modelo de Caixa, Formulários e Acessibilidade

A **E4** centra-se na melhoria da apresentação visual do website e na aplicação de conceitos de CSS e acessibilidade.

### 1. Modelo de caixa e espaçamentos

Foram aplicadas propriedades CSS para melhorar a organização e o espaçamento dos elementos:

- `box-sizing: border-box`
- `margin`
- `padding`
- `border`
- `width` e `max-width`

Estas propriedades permitem definir uma estrutura visual consistente entre as várias páginas.

### 2. Estilização de tabelas e formulários

A tabela de preços da página **Serviços** foi estilizada com bordas, espaçamento interno, cores de fundo e diferenciação das linhas.

O formulário da página **Contactos** inclui estilos para campos de texto, seleção, área de mensagem, etiquetas e botões.

O formulário é **demonstrativo**. O envio real de mensagens não está implementado nesta etapa.

### 3. Elementos semânticos HTML5

Foram utilizados elementos HTML5 adicionais, incluindo:

- `<details>` — apresentação de informação adicional;
- `<summary>` — identificação de conteúdos expansíveis;
- `<time>` — representação semântica de datas;
- `<mark>` — destaque de conteúdo;
- `<cite>` — identificação de referências.

Estes elementos contribuem para uma estrutura mais semântica e organizada.

### 4. Preparação do artigo académico

A página `artigo.html` apresenta a preparação do artigo académico, incluindo:

- Tema do artigo;
- Questão orientadora de investigação;
- Estrutura e índice previstos;
- Seis referências bibliográficas com ligações e datas de acesso.

A redação integral do artigo será desenvolvida numa etapa posterior.

### 5. Acessibilidade e navegação por teclado

Foram aplicados estilos de foco visível através da pseudo-classe `:focus-visible`.

A navegação por teclado foi testada nas sete páginas do website, utilizando:

- `Tab` — avançar entre elementos interativos;
- `Shift + Tab` — regressar ao elemento anterior;
- `Enter` — ativar ligações e controlos;
- `Espaço` — ativar controlos compatíveis.

Os resultados dos testes devem ser mantidos na documentação da E4.

## 🎨 Guia de estilo

O PetCare utiliza uma identidade visual baseada em tons de verde-água, cores neutras e tipografia legível.

| Utilização | Cor |
|---|---|
| Verde-água principal | `#176B66` |
| Verde-escuro | `#0D4945` |
| Verde suave | `#E8F4F0` |
| Verde para títulos | `#173F3D` |
| Texto principal | `#1C2730` |
| Fundo geral | `#F5F8F6` |
| Branco | `#FFFFFF` |
| Bordas suaves | `#C9DDD6` |

A tipografia principal utiliza a família **Arial, Helvetica, sans-serif**.

### Contraste das cores

A verificação de contraste segue os critérios **WCAG AA**, que estabelecem valores mínimos de:

- **4,5:1** para texto normal;
- **3:1** para texto de grandes dimensões.

As combinações de texto e fundo devem ser verificadas e documentadas, com capturas dos resultados obtidos através do [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## ✅ Validação e testes

O projeto utiliza as seguintes ferramentas de verificação:

- [W3C Nu HTML Checker](https://validator.w3.org/nu/) — validação de HTML;
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) — validação de CSS;
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — avaliação do contraste entre texto e fundo;
- Testes manuais de navegação por teclado.

As evidências e resultados finais devem ficar registados na pasta de documentação do projeto.

## 📁 Estrutura do projeto

```text
Pet-Care---WebSite/
│
├── index.html
├── servicos.html
├── galeria.html
├── sobre.html
├── contactos.html
├── acessibilidade.html
├── artigo.html
├── style.css
├── imagens/
├── docs/
└── README.md
```

A pasta `docs/` reúne a documentação e as evidências das diferentes etapas de desenvolvimento.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura e semântica das páginas;
- **CSS3** — apresentação visual, modelo de caixa, cores e espaçamentos;
- **Git e GitHub** — controlo de versões e trabalho colaborativo;
- **GitHub Pages** — publicação do website.

Nesta etapa, não foi introduzido o sistema de layouts responsivos com Flexbox ou CSS Grid, reservado para a E5.

## 📝 Desenvolvimento e versões

O projeto está organizado por etapas de desenvolvimento, de acordo com os requisitos da unidade curricular.

- **E1–E2:** estrutura inicial e organização das páginas HTML;
- **E3:** aplicação de estilos CSS, guia de estilo e validação;
- **E4:** modelo de caixa, tabelas, formulários, elementos HTML5, preparação do artigo e testes de acessibilidade.

As contribuições dos elementos do grupo podem ser consultadas no histórico de commits do repositório e na documentação da etapa.

---

**Projeto académico — Programação Web — Cliente (15791)**  
**ISLA Gaia | PetCare | Etapa E4**
