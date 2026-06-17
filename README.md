# Alerta Segura

> Projeto Final — Disciplina de Interface Humano-Computador (IHC)  
> UniCesumar Campus Ponta Grossa · 2025/1

---

## Sobre o projeto

O **Alerta Segura** é um protótipo de alta fidelidade de um aplicativo mobile voltado para a **segurança de mulheres**. O app permite acionar rapidamente um alerta de emergência que compartilha a localização da usuária em tempo real com contatos de confiança pré-cadastrados.

O projeto foi desenvolvido como trabalho final da disciplina de IHC, aplicando os seguintes conceitos:

- Design centrado no usuário
- Criação de persona baseada em pesquisa
- Prototipação de alta fidelidade e interativa
- Testes de usabilidade com usuários reais (metodologia SUS)
- Acessibilidade e simplicidade de uso

---

## O problema

A violência contra a mulher é uma realidade grave no Brasil. Segundo o **Anuário Brasileiro de Segurança Pública 2023**, uma mulher é vítima de algum tipo de violência a cada 6 minutos no país. Em situações de risco, reagir rapidamente é fundamental — mas discar um número de emergência ou enviar uma mensagem de texto pode ser impossível quando o tempo e a atenção são escassos.

Nossa persona (Mariana, 24 anos, estudante que volta sozinha de ônibus à noite) representa milhões de brasileiras que adaptam sua rotina diariamente por conta da insegurança.

---

## A solução

Um aplicativo com:

- **Botão de pânico central** — segurar por 3 segundos para evitar acionamentos acidentais
- **Alerta automático com localização** — enviado instantaneamente para contatos cadastrados
- **Mapa colaborativo de risco** — áreas perigosas relatadas pela própria comunidade
- **Histórico de alertas** — para acompanhamento da rotina
- **Interface acessível** — funciona com uma mão, sem precisar olhar para a tela

---

## Equipe

| Nome | RA |
|------|----|
| [Nome do integrante 1] | [RA] |
| [Nome do integrante 2] | [RA] |
| [Nome do integrante 3] | [RA] |
| [Nome do integrante 4] | [RA] |

---

## Protótipo interativo

Acesse o protótipo abrindo o arquivo abaixo no navegador:

```
prototype/index.html
```

Ou, se o repositório estiver publicado no GitHub Pages:

> **[https://[seu-usuario].github.io/alerta-segura](https://[seu-usuario].github.io/alerta-segura)**

### Como usar o protótipo

1. Abra `prototype/index.html` no navegador (Chrome ou Firefox recomendados)
2. Para melhor experiência: pressione `F12` → clique no ícone de celular → escolha "iPhone 12 Pro" ou largura 375px
3. Clique em **Entrar** na tela inicial
4. Na tela principal, **segure o botão vermelho SOS** por 3 segundos para disparar o alerta
5. Use a barra de navegação inferior para explorar Contatos, Mapa e Configurações

---

## Documentação

| Documento | Descrição |
|-----------|-----------|
| [docs/persona.md](docs/persona.md) | Perfil completo da persona — quem é Mariana Costa, sua rotina, objetivos e frustrações |
| [docs/testes-usabilidade.md](docs/testes-usabilidade.md) | Metodologia SUS, fichas das 5 participantes, resultados e análise |

---

## Estrutura do repositório

```
alerta-segura/
├── README.md                      ← você está aqui
├── docs/
│   ├── persona.md                 ← perfil da persona
│   └── testes-usabilidade.md     ← relatório de testes com usuários
└── prototype/
    ├── index.html                 ← protótipo (abra esse arquivo)
    ├── style.css                  ← estilo visual do app
    └── script.js                  ← navegação e lógica do botão SOS
```

---

## Tecnologias utilizadas

- **HTML5** e **CSS3** — estrutura e estilo do protótipo
- **JavaScript** (sem bibliotecas externas) — navegação entre telas e lógica do botão
- **SVG** — ícones, mapa de risco e animação do botão
- Design system próprio com paleta roxa/vermelha, tipografia do sistema operacional

---

## Resultados dos testes

O protótipo foi testado com **5 usuárias reais** usando a metodologia **SUS (System Usability Scale)**. A pontuação média obtida foi **74,0 / 100**, classificada como **"Boa"** segundo os benchmarks da literatura.

Veja os detalhes completos em [docs/testes-usabilidade.md](docs/testes-usabilidade.md).

---

*Projeto desenvolvido para fins acadêmicos — UniCesumar, Campus Ponta Grossa, 2025.*
