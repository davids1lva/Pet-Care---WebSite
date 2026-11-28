# E8 — Relatório de validação e auditoria

**Data:** 28/11/2026 · **URL:** https://petcare.freedev.app/

## Método

O grupo comunicou a validação dos documentos HTML e das folhas CSS com zero erros e a auditoria das oito páginas principais em Lighthouse Mobile. O acesso pelo URL ao W3C devolveu uma página de segurança com `/aes.js`; foi usado File Upload para validar os ficheiros reais. O relatório consolida os resultados comunicados, não uma nova execução dos validadores.

## HTML e CSS

| Conjunto | Resultado comunicado |
|---|---|
| HTML do sítio | 0 erros |
| CSS próprio | 0 erros |

Confirmar nas capturas que também foram incluídos os três HTML da comparação e as quatro folhas CSS dessa pasta, além de `style.css`, `bootstrap-custom.css` e `e8.css`.

## Lighthouse — Mobile

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

Meta: pelo menos 90 em cada uma das duas categorias por página. Os resultados comunicados cumprem a meta. 