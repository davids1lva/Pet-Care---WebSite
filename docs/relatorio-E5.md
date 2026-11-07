
# PetCare — E5: Design responsivo

## Base de trabalho

Esta versão foi desenvolvida a partir dos **sete ficheiros HTML e do `style.css` da E4** fornecidos pelo grupo em 07/11/2026. O HTML foi preservado sem alterações; o CSS recebeu uma secção identificada como **E5 — DESIGN RESPONSIVO / MOBILE-FIRST**.

## Requisitos do enunciado

| Ponto | Implementação | Como verificar |
|---|---|---|
| Mobile-first e 3+ breakpoints | Regras base para telemóvel e `@media (min-width: 480px)`, `768px` e `1024px` | Pesquisar `E5 — DESIGN RESPONSIVO` no CSS |
| Flexbox na navegação | `display: flex` na lista da navegação principal | Inspecionar o menu, do telemóvel ao desktop |
| CSS Grid na galeria | `display: grid`; 1 coluna no telemóvel e 2 a partir de 768px | Abrir `galeria.html` |
| Sem deslocação horizontal | Larguras fluidas e adaptação de tabelas, formulários e cartões | Testar 360px e 1280px em **cada uma das 7 páginas** |
| Imagens responsivas (2+) | `max-width: 100%` e `height: auto` na imagem de destaque, imagens dos serviços e galeria | Inspecionar `index.html`, `servicos.html` e `galeria.html` |
| Alvos de toque >= 24 × 24 CSS px | Menu `min-height: 44px`, controlos e checkbox com mínimos | Inspecionar largura/altura calculadas |

## Testes de largura e capturas a realizar

Usar as DevTools do navegador: `F12` → modo de dispositivo (`Ctrl + Shift + M`) → introduzir a largura → atualizar → confirmar que não há barra horizontal nem conteúdo cortado.

| Página | 360 px | 1280 px | Observações |
|---|---|---|---|
| `index.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `servicos.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `galeria.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `sobre.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `contactos.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `artigo.html` | Confirmado | Confirmado | Sem deslocação horizontal |
| `acessibilidade.html` | Confirmado | Confirmado | Sem deslocação horizontal |
