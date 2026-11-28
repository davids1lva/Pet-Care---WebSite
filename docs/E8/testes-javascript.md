# E8 — Testes das funcionalidades JavaScript

**Data:** 28/11/2026. **Ambiente:** Chrome DevTools (desktop e emulação móvel), Live Server e website publicado no InfinityFree. A publicação foi também aberta num telemóvel real.

## Funcionalidades e casos de teste

| Funcionalidade | Procedimento | Resultado esperado |
|---|---|---|
| Formulário | Submeter vazio | Mensagens nos campos obrigatórios, resumo visível e foco no primeiro inválido |
| Formulário | E-mail inválido e telefone com seis algarismos | Mensagens específicas |
| Formulário | Deixar telefone vazio | Aceite se os campos obrigatórios forem válidos |
| Formulário | Introduzir data passada | Data rejeitada |
| Formulário | Selecionar Esclarecimento de dúvidas | Data escondida, limpa, desativada e não obrigatória |
| Formulário | Selecionar outro serviço | Data novamente visível e obrigatória |
| Formulário | Preencher tudo corretamente | “Formulário validado com sucesso.”; sem envio real |
| Galeria | Todas / Alojamento e recreio / Banho e tosquia / Passeios | 4 / 2 / 1 / 1 fotografias, com contagem atualizada |
| Galeria | Repetir em ecrã móvel | Filtro disponível e funcional |
| Tema | Alternar claro/escuro | Alteração de superfícies, texto e estados do menu |
| Tema | Navegar e recarregar | Preferência mantida via localStorage |
| Tema | Abrir menu móvel | Alternador no final do menu |
| Menu | Abrir, fechar, clicar fora ou usar Escape | Estado visual e aria-expanded atualizados |

## Resultado registado

O grupo comunicou ter concluído os testes JavaScript sem erros na consola e confirmado o funcionamento móvel. As capturas recolhidas pelo grupo devem sustentar os casos acima; a tabela descreve o procedimento e o comportamento previsto, não inventa resultados individuais. A verificação adicional `node --check petcare.js` foi executada sobre o ficheiro enviado e terminou sem erros de sintaxe. A verificação de sintaxe não substitui os testes de execução.

## Recolha de evidências

Manter a consola aberta, limpar mensagens antigas, recarregar e executar as funcionalidades. Guardar as capturas reais em `docs/E8/javascript/` (ou no caminho já utilizado pelo grupo). Se houver alterações posteriores, repetir os testes relevantes antes da tag E8.
