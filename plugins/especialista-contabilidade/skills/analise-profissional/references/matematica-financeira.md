# Matemática Financeira e Estatística Aplicada

Referência de cálculo financeiro e estatística para análises, laudos e avaliação de investimentos. Sempre apresente a memória de cálculo.

## Juros e montante

- **Juros simples**: J = C × i × n; M = C × (1 + i × n)
- **Juros compostos**: M = C × (1 + i)^n; J = M − C
- Convenção brasileira de mercado: juros compostos, taxas expressas a.m. ou a.a.

## Taxas

| Conceito | Fórmula / Regra |
|---|---|
| Taxas equivalentes (compostos) | (1 + i_a) = (1 + i_p)^k — ex.: 1% a.m. ⇒ (1,01)^12 − 1 = 12,68% a.a. |
| Taxa nominal × efetiva | Nominal é proporcional ao período de capitalização; efetiva resulta da capitalização — 12% a.a. cap. mensal ⇒ 1% a.m. ⇒ efetiva 12,68% a.a. |
| Taxa real (Fisher) | (1 + i_aparente) = (1 + i_real) × (1 + inflação) |
| Custo efetivo total (CET) | Taxa que iguala fluxos considerando tarifas, IOF e seguros — usar em análise de empréstimos |

## Descontos

- **Desconto comercial (por fora)**: D = N × d × n; valor líquido = N × (1 − d × n)
- **Desconto racional (por dentro)**: sobre o valor atual; A = N / (1 + i × n)
- Taxa efetiva do desconto comercial é sempre **maior** que a taxa declarada

## Séries uniformes (anuidades)

- **Valor presente (postecipada)**: PV = PMT × [1 − (1 + i)^−n] / i
- **Valor futuro (postecipada)**: FV = PMT × [(1 + i)^n − 1] / i
- Série **antecipada**: multiplicar por (1 + i)
- Perpetuidade: PV = PMT / i; perpetuidade com crescimento (Gordon): PV = PMT / (i − g)

## Sistemas de amortização

| Sistema | Amortização | Prestação | Juros |
|---|---|---|---|
| **SAC** | Constante (Saldo/n) | Decrescente | Decrescentes sobre saldo |
| **Price (francês)** | Crescente | Constante (PMT da série uniforme) | Decrescentes sobre saldo |
| **Americano** | Única no final | Só juros durante o prazo | Constantes |

Total de juros pagos: Price > SAC (para mesmo prazo e taxa). Em qualquer sistema, juros do período = saldo devedor anterior × i.

## Avaliação de investimentos

- **VPL** = Σ [FC_t / (1 + TMA)^t] − Investimento. VPL > 0 ⇒ aceitar
- **TIR**: taxa que zera o VPL. Aceitar se TIR > TMA. Cuidados: fluxos não convencionais (múltiplas TIRs), reinvestimento implícito à própria TIR — usar **TIR Modificada (TIRM)** quando relevante
- **Payback simples** e **descontado**: prazo de recuperação; ignora fluxos posteriores — usar como critério complementar
- **Índice de Lucratividade (IL)** = PV das entradas / Investimento; IL > 1 ⇒ aceitar
- Projetos mutuamente excludentes com escalas distintas: decidir pelo **VPL**, não pela TIR
- **TMA** no contexto brasileiro: referenciar a custo de oportunidade (CDI/Selic) ou WACC da empresa

## Estatística aplicada

- **Tendência central**: média aritmética, ponderada, geométrica (retornos acumulados); mediana (robusta a outliers); moda
- **Dispersão**: amplitude, variância, desvio-padrão, **coeficiente de variação** (CV = σ/μ — comparar riscos relativos)
- **Correlação** (r de Pearson, −1 a +1): associação linear ≠ causalidade; base para diversificação de risco
- **Regressão linear simples**: y = a + bx — projeções de receita/custo; avaliar R²
- **Probabilidade e valor esperado**: E(x) = Σ p_i × x_i — cenários (otimista/base/pessimista) em projeções
- **Amostragem** (uso em auditoria): aleatória simples, sistemática, estratificada; risco de amostragem

## Boas práticas

1. Explicitar sempre: taxa, período, convenção (a.m./a.a.), regime (simples/composto) e data focal
2. Ajustar inflação (IPCA/IGP-M) para comparações em períodos longos — trabalhar em moeda constante ou taxa real
3. Em laudos e pareceres, apresentar fórmula, substituição numérica e resultado, permitindo conferência
