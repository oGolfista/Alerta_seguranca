# Testes de Usabilidade — Alerta Segura

## Por que escolhemos o SUS

Usamos o **SUS (System Usability Scale)** como metodologia de teste. É um questionário com 10 afirmações onde cada pessoa responde de 1 a 5, e no final a gente calcula uma nota de 0 a 100. Acima de 68 já é considerado aceitável; acima de 80 é bom.

Escolhemos o SUS porque é rápido — cada participante levou menos de 5 minutos pra responder — e funciona bem com qualquer tipo de usuária, independente de ter experiência com tecnologia ou não. Além disso, é um método reconhecido na área, o que facilitou comparar nossos resultados com referências da literatura.

---

## Quem participou

Recrutamos 5 mulheres que, assim como a nossa persona, se locomovem sozinhas com frequência. Os testes foram presenciais, com o protótipo aberto no computador em modo mobile. A gente não deu nenhuma instrução de como usar — só explicou que era um app de segurança pra mulheres e deixou cada uma explorar por uns 5 minutos antes de responder o questionário.

| # | Nome | Idade | Ocupação |
|---|------|-------|----------|
| 1 | Fernanda | 23 | Estudante de Psicologia |
| 2 | Beatriz | 31 | Professora |
| 3 | Andressa | 19 | Estudante do ensino médio |
| 4 | Camila | 45 | Servidora pública |
| 5 | Sofia | 27 | Autônoma (cabeleireira) |

---

## As 4 tarefas que pedimos pra cada uma

1. Adicionar um contato de confiança
2. Acionar o alerta de emergência
3. Ver o mapa de áreas de risco
4. Cancelar o alerta que acabou de enviar

---

## Afirmações do questionário SUS

| # | Afirmação |
|---|-----------|
| 1 | Eu acho que gostaria de usar esse aplicativo com frequência |
| 2 | Eu acho o aplicativo desnecessariamente complexo |
| 3 | Eu achei o aplicativo fácil de usar |
| 4 | Eu precisaria de ajuda de alguém técnico pra conseguir usar |
| 5 | Eu acho que as funções estão bem integradas |
| 6 | Eu acho que há muitas inconsistências no aplicativo |
| 7 | A maioria das pessoas aprenderia a usar rapidamente |
| 8 | Eu achei o aplicativo muito difícil de usar |
| 9 | Eu me senti confiante usando o aplicativo |
| 10 | Precisei aprender muitas coisas antes de conseguir usar |

*Questões pares têm pontuação invertida no cálculo.*

---

## Resultados individuais

### Fernanda — 23 anos — Psicologia

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|----|----|----|----|----|----|----|----|----|-----|
| 4  | 2  | 4  | 2  | 4  | 2  | 4  | 1  | 4  | 2   |

**Nota SUS: 77,5**

Achou a interface limpa e direta. Disse que o botão vermelho no centro já deixa claro o que o app faz. Sugeriu ter atalho pro SAMU além do 190.

---

### Beatriz — 31 anos — Professora

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|----|----|----|----|----|----|----|----|----|-----|
| 4  | 2  | 4  | 2  | 3  | 2  | 4  | 2  | 4  | 3   |

**Nota SUS: 70,0**

Demorou um pouco pra entender que precisava segurar o botão — esperava que um toque fosse suficiente. Depois que entendeu, achou que faz sentido pra evitar acionamento acidental. Comentou que o app é mais simples do que esperava.

---

### Andressa — 19 anos — Ensino médio

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|----|----|----|----|----|----|----|----|----|-----|
| 4  | 2  | 4  | 1  | 4  | 2  | 5  | 1  | 4  | 2   |

**Nota SUS: 82,5**

Das cinco, foi quem mais gostou. Falou que baixaria na hora se fosse real. Explorou todas as telas sozinha sem precisar de ajuda. A única crítica foi que o mapa poderia ter mais detalhes.

---

### Camila — 45 anos — Servidora pública

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|----|----|----|----|----|----|----|----|----|-----|
| 4  | 2  | 4  | 3  | 3  | 3  | 4  | 2  | 3  | 2   |

**Nota SUS: 65,0**

Foi a participante com mais dificuldade. Não percebeu de cara que o ícone de mapa na barra inferior levava pro mapa de risco — tentou primeiro no menu da tela inicial. Também perguntou se o app funcionaria sem internet. Mesmo assim, disse que acharia jeito de usar com o tempo.

---

### Sofia — 27 anos — Autônoma

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|----|----|----|----|----|----|----|----|----|-----|
| 4  | 2  | 4  | 2  | 4  | 2  | 4  | 2  | 4  | 2   |

**Nota SUS: 75,0**

Gostou bastante do visual e comentou que a cor roxa "passa uma sensação de proteção, não de medo". Realizou todas as tarefas sem dificuldade. Sugeriu um botão de "estou bem" que ela pudesse apertar durante o trajeto, sem precisar esperar pelo alerta de emergência.

---

## Resultado geral

| Participante | Nota |
|---|---|
| Fernanda | 77,5 |
| Beatriz | 70,0 |
| Andressa | 82,5 |
| Camila | 65,0 |
| Sofia | 75,0 |
| **Média** | **74,0** |

A nota média foi **74,0 / 100**, que entra na faixa considerada **boa** pelo SUS (entre 68 e 80). Pra um protótipo ainda em fase inicial, esse resultado é positivo.

---

## O que aprendemos com os testes

O que funcionou bem foi o botão central — todas entenderam que era a função principal do app. A navegação entre telas também foi tranquila pra maioria.

Os pontos de melhoria são claros: o comportamento de segurar o botão precisa de uma dica mais visível logo de início, o ícone do mapa na barra inferior confundiu uma participante, e falta alguma informação sobre funcionamento offline. São coisas pequenas que dariam pra resolver numa próxima versão.
