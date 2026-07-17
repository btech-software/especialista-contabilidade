# Indicadores Financeiros — Fórmulas e Interpretação

Referência de indicadores para análise econômico-financeira de empresas brasileiras. Sempre apresente a memória de cálculo e compare com períodos anteriores e, quando possível, com benchmarks do setor.

## Liquidez

| Indicador | Fórmula | Interpretação |
|---|---|---|
| Liquidez Corrente | Ativo Circulante / Passivo Circulante | ≥ 1 indica capacidade de honrar obrigações de curto prazo; avaliar composição |
| Liquidez Seca | (AC − Estoques) / PC | Exclui o risco de realização dos estoques |
| Liquidez Imediata | Disponibilidades / PC | Capacidade de pagamento imediato |
| Liquidez Geral | (AC + RLP) / (PC + PNC) | Solvência de curto e longo prazo combinados |

## Estrutura de capital e endividamento

| Indicador | Fórmula | Interpretação |
|---|---|---|
| Endividamento Geral | (PC + PNC) / Ativo Total | Proporção do ativo financiada por terceiros |
| Participação de Capital de Terceiros | (PC + PNC) / PL | > 1 indica predomínio de capital de terceiros |
| Composição do Endividamento | PC / (PC + PNC) | Concentração da dívida no curto prazo (quanto maior, mais pressão) |
| Imobilização do PL | (Investimentos + Imobilizado + Intangível) / PL | > 1 indica PL insuficiente para cobrir o ativo permanente |
| Dívida Líquida / EBITDA | (Dívida bruta − Caixa) / EBITDA | Alavancagem em anos de geração de caixa; > 3 costuma acender alerta |

## Rentabilidade

| Indicador | Fórmula | Interpretação |
|---|---|---|
| Margem Bruta | Lucro Bruto / Receita Líquida | Eficiência da formação de preço sobre custos diretos |
| Margem Operacional | EBIT / Receita Líquida | Eficiência operacional antes do resultado financeiro |
| Margem EBITDA | EBITDA / Receita Líquida | Proxy de geração de caixa operacional |
| Margem Líquida | Lucro Líquido / Receita Líquida | Resultado final por real de receita |
| ROA | Lucro Líquido / Ativo Total médio | Retorno sobre o ativo |
| ROE | Lucro Líquido / PL médio | Retorno sobre o capital próprio; comparar com custo de oportunidade (ex.: CDI) |
| ROIC | NOPAT / Capital Investido | Retorno do capital operacional; comparar com WACC |

**Análise DuPont**: ROE = Margem Líquida × Giro do Ativo × Alavancagem Financeira (LL/RL × RL/AT × AT/PL) — decompõe a origem do retorno.

## Atividade (prazos médios e ciclos)

| Indicador | Fórmula (dias) | Interpretação |
|---|---|---|
| PMR — Prazo Médio de Recebimento | (Clientes / Receita Bruta) × 360 | Dias para receber vendas |
| PME — Prazo Médio de Estocagem | (Estoques / CMV) × 360 | Dias de estoque |
| PMP — Prazo Médio de Pagamento | (Fornecedores / Compras) × 360 | Dias para pagar fornecedores |
| Ciclo Operacional | PME + PMR | Da compra ao recebimento |
| Ciclo Financeiro (de caixa) | Ciclo Operacional − PMP | Dias de operação que precisam ser financiados; quanto menor, melhor |

## Capital de giro

- **Capital Circulante Líquido (CCL)** = AC − PC
- **Necessidade de Capital de Giro (NCG)** = Ativo Circulante Operacional − Passivo Circulante Operacional (contas ligadas à operação: clientes, estoques × fornecedores, salários, tributos operacionais)
- **Saldo de Tesouraria (ST)** = CCL − NCG. ST negativo e crescente com NCG crescente caracteriza o **efeito tesoura** (risco de insolvência).

## Cobertura e solvência

- **Cobertura de Juros (ICJ)** = EBIT / Despesas Financeiras — capacidade de pagar juros com o resultado operacional
- **Termômetro de insolvência (Kanitz)** e modelos de scoring podem complementar, com ressalva metodológica

## Boas práticas de análise

1. Nunca interpretar um indicador isoladamente — combinar liquidez, endividamento, rentabilidade e atividade
2. Usar saldos médios em indicadores que cruzam BP (estoque) com DRE (fluxo)
3. Ajustar eventos não recorrentes antes de comparar períodos
4. Contextualizar por setor: varejo opera com margens baixas e giro alto; indústria de capital intensivo, o oposto
5. Em cenário brasileiro, avaliar o custo da dívida contra CDI/Selic vigentes e o efeito da inflação (IPCA/IGP-M) em análises horizontais de períodos longos
