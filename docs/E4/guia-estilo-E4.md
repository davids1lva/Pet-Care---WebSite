# PetCare — Guia de estilo atualizado (layout E4)

**Versão:** atualização visual da Etapa 4, 31/10/2026.  
**Nota histórica:** não substituir a evidência do guia de estilo original da E3: esta versão documenta as alterações introduzidas posteriormente.

## Paleta de cores atual

| Cor | Código HEX | Utilização no CSS recebido |
|---|---|---|
| Verde-água principal | `#176B66` | Cabeçalho, rodapé, botões e destaques |
| Verde-água escuro | `#0D4945` | Menu ativo, interação `hover` e foco |
| Verde para botões | `#245A58` | Fundo alternativo dos botões de navegação |
| Verde muito escuro | `#173F3D` | Títulos principais e cartões |
| Verde médio escuro | `#174D48` | Títulos secundários |
| Verde-claro | `#E8F4F0` | Fundos destacados de secções |
| Fundo suave | `#F1F8F5` | Secções alternadas |
| Fundo geral | `#F5F8F6` | Fundo exterior do website |
| Branco | `#FFFFFF` | Conteúdo e texto sobre fundos escuros |
| Texto base | `#1C2730` | Texto corrido |
| Contornos | `#C9DDD6` | Bordas e separadores |

**Cores legadas ainda presentes na folha CSS revista:** `#17324D`, `#176B50`, `#89520B`, `#44545F` e `#E3ECE8`. Estas aparecem em estilos gerais antigos e devem ser revistas quando o CSS for consolidado, para evitar duas paletas concorrentes.

## Tipografia e apresentação

- Família: **Arial, Helvetica, sans-serif**.
- Texto corrente: **1rem**, com altura de linha **1,6**.
- Títulos: escalas variadas conforme a área; o cabeçalho usa título de marca com **1,75rem**; o título das páginas usa **2,2rem** na regra atual.
- Layout: cabeçalho comum nas sete páginas, secções claras e cartões com bordas suaves.
- Menu: página atual identificada pelo atributo `aria-current="page"`.

## Contraste — pares utilizados no novo layout

Rácio calculado segundo a luminância relativa sRGB (WCAG), `(L_claro + 0,05) / (L_escuro + 0,05)`.

| Aplicação | Texto | Fundo | Rácio | 4,5:1 normal | 3:1 grande |
|---|---|---|---:|---|---|
| Cabeçalho e rodapé | `#FFFFFF` | `#176B66` | **6,30:1** | Sim | Sim |
| Menu ativo e hover | `#FFFFFF` | `#0D4945` | **10,21:1** | Sim | Sim |
| Botões alternativos | `#FFFFFF` | `#245A58` | **7,84:1** | Sim | Sim |
| Título em fundo verde-claro | `#173F3D` | `#E8F4F0` | **10,27:1** | Sim | Sim |
| Títulos secundários | `#174D48` | `#FFFFFF` | **9,58:1** | Sim | Sim |
| Texto geral no fundo exterior | `#1C2730` | `#F5F8F6` | **14,21:1** | Sim | Sim |
| Ligações gerais em branco | `#176B50` | `#FFFFFF` | **6,45:1** | Sim | Sim |
| Títulos de terceiro nível | `#173F3D` | `#FFFFFF` | **6,41:1** | Sim | Sim |

Os pares documentados cumprem os limiares para texto normal e grande. **Isto não equivale a uma auditoria integral WCAG:** é necessário também verificar outros estados e combinações de cores, como contornos, controlos e sobreposições.

## Elementos visuais da E4

- Uso de `box-sizing`, `margin`, `padding` e `border` para o modelo de caixa.
- Cartões, tabelas e formulário com organização e espaçamento consistentes.
- Estado de foco visível com `:focus-visible`.
- Sem `display: flex`, `display: grid` ou media queries no CSS enviado; estes aspetos pertencem à E5.

