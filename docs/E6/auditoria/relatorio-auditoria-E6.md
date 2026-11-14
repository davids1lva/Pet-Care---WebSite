# PetCare — E6: Relatório de auditoria inicial de acessibilidade

**Projeto:** PetCare — Cuidados e Serviços para Animais de Estimação  
**Unidade curricular:** Programação Web — Cliente (15791) | ISLA Gaia  
**Etapa:** E6  
**Data do relatório:** 14/11/2026  
**Estado:** Auditoria automática inicial realizada; alertas e verificações manuais por analisar/concluir.

## 1. Objetivo e metodologia

Foi efetuada uma auditoria inicial de acessibilidade a três páginas do PetCare: **Início** (`index.html`), **Contactos** (`contactos.html`) e **Galeria** (`galeria.html`). Foram utilizadas duas ferramentas diferentes:

- **Google Lighthouse**, categoria *Accessibility*, em simulação de dispositivo **Mobile**;
- **WAVE (WebAIM)**, extensão do navegador, com a página apresentada na disposição de **computador**.

Os testes foram realizados numa cópia local do projeto, disponibilizada através do Live Server em `http://127.0.0.1:5500/`, antes de publicar a versão E6 no GitHub Pages. As conclusões abaixo referem-se **às capturas fornecidas**, não constituindo uma certificação de conformidade WCAG.

## 2. Resultados das ferramentas

| Página | Lighthouse — Accessibility | WAVE — Errors | WAVE — Contrast Errors | WAVE — Alerts |
|---|---:|---:|---:|---:|
| Início (`index.html`) | **100/100** | **0** | **0** | **2** |
| Contactos (`contactos.html`) | **100/100** | **0** | **0** | **1** |
| Galeria (`galeria.html`) | **100/100** | **0** | **0** | **1** |

### Detalhes adicionais observados no WAVE

| Página | Features | Structural Elements | ARIA | Tipos de alerta visíveis |
|---|---:|---:|---:|---|
| Início | 2 | 10 | 9 | Possible heading; Redundant link |
| Contactos | 9 | 9 | 9 | Possible heading |
| Galeria | 9 | 7 | 5 | Possible heading |

O WAVE indicou **AIM Score 10/10** nas três páginas. Este indicador não substitui a inspeção manual de acessibilidade.

## 3. Alertas identificados e primeiras ações propostas

| Página(s) | Alerta | Interpretação | Ação proposta | Estado |
|---|---|---|---|---|
| Início, Contactos e Galeria | **Possible heading** | O WAVE assinala o texto “PetCare”, no cabeçalho, como possível título sem marcação semântica de cabeçalho. É um alerta para revisão e **não um erro confirmado**. | Verificar a hierarquia de títulos e determinar se «PetCare» deve ser tratado como identidade do site (podendo manter-se como texto) ou como título semântico.| **Por avaliar manualmente** |
| Início | **Redundant link** | O WAVE encontrou uma possível repetição de ligação. | Abrir **Details** no WAVE, selecionar o alerta e verificar os dois links envolvidos. Se forem redundantes e estiverem próximos, avaliar uma apresentação ou designação menos repetitiva. | **Por identificar e avaliar** |


## 4. Conclusão

A auditoria inicial às páginas Início, Contactos e Galeria obteve **100/100 no Lighthouse (Accessibility)** em todas as páginas e **zero erros e zero erros de contraste sinalizados pelo WAVE**. O WAVE apresentou **quatro alertas no total**, distribuídos entre *Possible heading* (três ocorrências) e *Redundant link* (uma ocorrência). Estes alertas exigem análise manual antes de qualquer correção.

Os resultados automáticos constituem evidência positiva do trabalho desenvolvido na E6, mas **não garantem, por si só, conformidade total com as WCAG**. A fase seguinte é analisar os alertas, efetuar os testes manuais e registar eventuais correções e novos resultados.
