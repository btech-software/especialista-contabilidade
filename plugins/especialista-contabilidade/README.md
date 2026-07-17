# Plugin Especialista Contabilidade

Fluxo estruturado de análise profissional em contabilidade e consultoria financeira para o mercado brasileiro, com um workflow guiado de 7 fases.

## Visão Geral

O plugin fornece a skill **`analise-profissional`**: uma abordagem sistemática em 7 fases para conduzir análises contábeis e financeiras. Em vez de responder de imediato, ela guia a compreensão do contexto, a análise dos documentos, o esclarecimento de ambiguidades, o planejamento estratégico e o controle de qualidade — resultando em análises fundamentadas, verificáveis e acionáveis. Todas as respostas são sempre em **português brasileiro**.

## Filosofia

Uma boa análise profissional exige mais do que calcular. É preciso:
- **Compreender o contexto** antes de analisar
- **Fazer perguntas** para esclarecer requisitos ambíguos
- **Planejar com fundamentação** antes de executar
- **Revisar a qualidade** depois de produzir

## Skill: `analise-profissional`

**Uso:**
```
/especialista-contabilidade:analise-profissional Analise o balanço patrimonial anexo e calcule os indicadores de liquidez
```

Ou simplesmente descreva a necessidade — a skill é acionada automaticamente para pedidos de análise contábil e financeira.

## O Workflow de 7 Fases

| Fase | Nome | O que acontece |
|---|---|---|
| 1 | Identificando a intenção do pedido | Esclarece o problema, o resultado esperado e as restrições |
| 2 | Analisando arquivos | Examina anexos e arquivos do diretório de trabalho (demonstrações, planilhas, PDFs) |
| 3 | Perguntas para melhor entendimento | Lista todas as ambiguidades e **aguarda as respostas** antes de prosseguir |
| 4 | Planejamento estratégico | Apresenta 2–3 abordagens com trade-offs e recomendação fundamentada |
| 5 | Execução do Plano | Executa a abordagem escolhida **somente após aprovação explícita** |
| 6 | Análise e controle de qualidade | Revisa exatidão, conformidade normativa e clareza (só reporta problemas com confiança ≥ 80) |
| 7 | Resumo, conclusão e próximos passos | Documenta o realizado e recomenda próximos passos concretos |

## Material de Referência Incluído

A skill carrega sob demanda os arquivos em `skills/analise-profissional/references/`, cobrindo o conteúdo programático do **Exame de Suficiência do CFC** (requisito de registro no CRC):

- **demonstracoes-contabeis.md** — roteiro de análise de BP, DRE, DFC, DMPL e DVA, com checklists de consistência
- **indicadores-financeiros.md** — fórmulas e interpretação de indicadores de liquidez, endividamento, rentabilidade e atividade
- **regimes-tributarios.md** — Simples Nacional, Lucro Presumido e Lucro Real: enquadramento, comparação e roteiro de planejamento
- **normas-contabeis.md** — NBC, CPC, IFRS, SPED e obrigações acessórias, com checklists de conformidade
- **custos-gerencial.md** — métodos de custeio, análise custo-volume-lucro, formação de preços, orçamento e controladoria
- **matematica-financeira.md** — juros, taxas, sistemas de amortização, VPL/TIR e estatística aplicada
- **auditoria-pericia.md** — auditoria independente (NBC TA), auditoria interna e perícia contábil
- **contabilidade-publica.md** — NBC TSP, MCASP, execução orçamentária, DCASP e LRF
- **teoria-etica-profissional.md** — Estrutura Conceitual (CPC 00), teoria da contabilidade, ética e legislação profissional
- **trabalhista-societario.md** — folha de pagamento, rescisões, direito societário e reorganizações

## Quando Usar

**Use para:**
- Análise de demonstrações contábeis e indicadores financeiros
- Comparação e planejamento de regimes tributários
- Diagnósticos financeiros e pareceres de apoio à decisão
- Pedidos com requisitos parcialmente definidos

**Não use para:**
- Perguntas pontuais e triviais (a estrutura de 7 fases seria excessiva)
- Substituir o julgamento de profissional habilitado (CRC) ou aconselhamento jurídico-tributário formal

## Instalação

```
/plugin marketplace add btech-software/especialista-contabilidade
/plugin install especialista-contabilidade@btech-software
```

## Autor

btech-software (contato@btech.software)

## Versão

Versão: 1.1.0
