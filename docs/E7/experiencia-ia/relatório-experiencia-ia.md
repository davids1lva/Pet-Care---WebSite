# E7 --- Experiência com Inteligência Artificial na criação de textos alternativos

## 1. Enquadramento

**Questão orientadora do artigo:** Como pode a Inteligência Artificial
ajudar a identificar problemas de acessibilidade em websites?

No âmbito desta questão, foi realizada uma experiência prática com o
Gemini para analisar cinco imagens associadas ao website PetCare e obter
sugestões de textos alternativos (`alt`). O objetivo foi observar de que
forma uma ferramenta de Inteligência Artificial pode apoiar uma tarefa
relacionada com a acessibilidade Web e avaliar criticamente a qualidade
das sugestões produzidas.

Foi utilizado o mesmo pedido para as cinco imagens, de modo a manter uma
abordagem consistente.

## 2. Pedido utilizado

O seguinte pedido foi utilizado na análise de cada imagem:

> Analisa esta imagem de um website sobre cuidados e serviços para
> animais de estimação.\
> O objetivo é criar um texto alternativo (atributo alt do HTML)
> adequado para utilizadores que recorrem a leitores de ecrã.
>
> Regras: - Descreve apenas aquilo que é visualmente identificável. -
> Utiliza uma frase curta, clara e objetiva. - Não comeces com
> expressões como "Imagem de" ou "Fotografia de". - Não inventes
> informações que não estejam visíveis. - Tem em conta o contexto de um
> website PetCare. - Se a imagem for meramente decorativa, indica que
> poderá ter um atributo alt vazio.
>
> Apresenta: 1. Uma descrição do que observas. 2. O texto alternativo
> recomendado. 3. Uma breve justificação da escolha.

## 3. Registo das cinco imagens analisadas

### Imagem 1 --- Homem com colete PetCare

**Descrição observada pela IA:** Homem adulto sorridente, com polo preto
e colete utilitário preto, apresentando um símbolo branco de uma pata no
peito.

**Texto alternativo recomendado pelo Gemini:**

`Homem sorridente vestido com um polo preto e um colete com o símbolo de uma pata no peito.`

**Avaliação crítica:** A resposta identifica a pessoa, o vestuário, o
sorriso e o símbolo visível. É uma descrição curta e relacionada com a
identidade visual do PetCare. O texto não atribui à pessoa uma profissão
que não possa ser confirmada apenas pela imagem.

### Imagem 2 --- Gato no arranhador

**Descrição observada pela IA:** Gato de pelo comprido, deitado na
plataforma superior de um arranhador, junto a uma janela.

**Texto alternativo recomendado pelo Gemini:**

`Gato de pelo comprido deitado na plataforma superior de um arranhador junto a uma janela.`

**Avaliação crítica:** A resposta identifica o animal, a postura e o
elemento principal do ambiente. A descrição é clara e não se alonga em
pormenores secundários, mantendo a informação relevante para o contexto
do website.

### Imagem 3 --- Cão dourado no relvado

**Descrição observada pela IA:** Cão de pelo dourado a avançar em
direção à câmara, num relvado, com outro cão visível em segundo plano.

**Texto alternativo recomendado pelo Gemini:**

`Cão de pelo dourado a avançar num relvado exterior vedado com outro cão ao fundo.`

**Avaliação crítica:** A resposta identifica o cão principal e o
ambiente exterior, referindo também a presença de outro cão. A expressão
«a avançar» resume a ação, embora seja menos específica do que uma
descrição detalhada da postura. Ainda assim, o texto mantém-se conciso e
informativo.

### Imagem 4 --- Tosquia de um cão

**Descrição observada pela IA:** Pessoa com avental vermelho a aparar o
pelo de um cão castanho-dourado, utilizando uma tesoura e um pente.

**Texto alternativo recomendado pelo Gemini:**

`Pessoa com avental vermelho a aparar o pelo de cão castanho-dourado com tesoura e pente.`

**Avaliação crítica:** A resposta descreve a ação central da imagem e os
elementos necessários para a compreender. Não inventa a identidade nem a
profissão da pessoa e relaciona-se diretamente com um serviço de
cuidados para animais.

### Imagem 5 --- Passeio de três cães

**Descrição observada pela IA:** Mulher a passear três cães com trela
num trilho de parque arborizado.

**Texto alternativo recomendado pelo Gemini:**

`Mulher a passear três cães com trela num trilho de parque arborizado.`

**Avaliação crítica:** A resposta identifica a atividade, a pessoa, o
número de animais e o ambiente. Resume os elementos mais importantes sem
enumerar características secundárias de cada cão.

## 4. Grelha de avaliação

As respostas foram avaliadas numa escala de 1 a 5:

-   **1 --- Insuficiente**
-   **2 --- Fraco**
-   **3 --- Suficiente**
-   **4 --- Bom**
-   **5 --- Muito bom**

Os critérios utilizados foram:

-   **Precisão:** correspondência entre o texto e os elementos visíveis
    na imagem.
-   **Clareza:** facilidade de compreensão da descrição.
-   **Objetividade:** ausência de informação desnecessária ou
    redundante.
-   **Contexto PetCare:** adequação ao tema e à finalidade do website.
-   **Acessibilidade:** utilidade potencial do texto para transmitir a
    informação visual a quem não consegue ver a imagem.

### Resultados por imagem

**Imagem 1 --- Homem com colete PetCare**

-   Precisão: **5/5**
-   Clareza: **5/5**
-   Objetividade: **5/5**
-   Contexto PetCare: **5/5**
-   Acessibilidade: **5/5**
-   **Média: 5,0/5**

**Imagem 2 --- Gato no arranhador**

-   Precisão: **5/5**
-   Clareza: **5/5**
-   Objetividade: **5/5**
-   Contexto PetCare: **5/5**
-   Acessibilidade: **5/5**
-   **Média: 5,0/5**

**Imagem 3 --- Cão dourado no relvado**

-   Precisão: **4/5**
-   Clareza: **5/5**
-   Objetividade: **5/5**
-   Contexto PetCare: **5/5**
-   Acessibilidade: **5/5**
-   **Média: 4,8/5**

**Imagem 4 --- Tosquia de um cão**

-   Precisão: **5/5**
-   Clareza: **5/5**
-   Objetividade: **5/5**
-   Contexto PetCare: **5/5**
-   Acessibilidade: **5/5**
-   **Média: 5,0/5**

**Imagem 5 --- Mulher a passear três cães**

-   Precisão: **5/5**
-   Clareza: **5/5**
-   Objetividade: **5/5**
-   Contexto PetCare: **5/5**
-   Acessibilidade: **5/5**
-   **Média: 5,0/5**

### Médias por critério

-   **Precisão:** 4,8/5
-   **Clareza:** 5,0/5
-   **Objetividade:** 5,0/5
-   **Contexto PetCare:** 5,0/5
-   **Acessibilidade:** 5,0/5
-   **Média global:** **4,96/5**

### Justificação resumida das pontuações

-   **Imagem 1 --- Homem com colete PetCare:** identifica os elementos
    principais e o símbolo da pata, sem atribuir uma profissão não
    confirmada.
-   **Imagem 2 --- Gato no arranhador:** identifica o animal, a postura
    e o arranhador, com uma descrição concisa.
-   **Imagem 3 --- Cão dourado no relvado:** identifica os cães e o
    ambiente; a expressão usada para descrever o movimento é um pouco
    genérica.
-   **Imagem 4 --- Tosquia de um cão:** descreve corretamente a ação
    principal e os instrumentos visíveis, sem acrescentar informação não
    confirmada.
-   **Imagem 5 --- Mulher a passear três cães:** resume a atividade, o
    número de animais e o local de forma direta.

**Nota metodológica:** as pontuações correspondem a uma avaliação
crítica das respostas produzidas, segundo os critérios definidos para
esta experiência. Não representam uma medição automática nem comprovam,
por si só, a conformidade das imagens ou do website com as WCAG. A
utilidade efetiva dos textos deve ser confirmada tendo em conta o
contexto em que cada imagem aparece na página.

## 5. Principais observações e limitações

A experiência mostrou que o Gemini conseguiu propor textos alternativos
concisos para cinco imagens diferentes. As sugestões identificaram, em
geral, o sujeito principal, a ação ou postura e alguns elementos do
contexto visual.

Também se verificou que a adequação de um texto alternativo depende da
função da imagem na página. Uma imagem informativa deve transmitir a
informação visual relevante; uma imagem puramente decorativa poderá
utilizar um atributo `alt` vazio (`alt=""`), desde que essa decisão seja
adequada ao contexto.

A ferramenta pode ainda produzir formulações genéricas ou dar destaque a
pormenores que não são os mais importantes para a finalidade da página.
Por isso, as sugestões não devem ser copiadas automaticamente para o
HTML: precisam de ser revistas por uma pessoa que conheça o conteúdo e a
função da imagem.

## 6. Conclusão

A experiência permitiu observar uma aplicação prática da Inteligência
Artificial no apoio à acessibilidade Web: a análise de imagens e a
criação de sugestões de textos alternativos. Nas cinco imagens testadas,
as respostas foram globalmente claras, concisas e adequadas ao contexto
do PetCare.

Contudo, a IA não determina sozinha se uma imagem é informativa ou
decorativa, nem conhece necessariamente a função que essa imagem
desempenha na página. A revisão humana continua a ser essencial para
confirmar a precisão, selecionar a informação relevante e decidir o
texto alternativo final.

Assim, esta experiência indica que a Inteligência Artificial pode
funcionar como uma ferramenta de apoio à identificação de aspetos que
merecem atenção na acessibilidade de um website, mas não substitui a
avaliação humana nem uma auditoria de acessibilidade mais abrangente.

## 7. Evidências da experiência

Juntar a esta documentação os dez prints das cinco interações com o
Gemini:

-   Imagem 1: print do pedido e print da resposta.
-   Imagem 2: print do pedido e print da resposta.
-   Imagem 3: print do pedido e print da resposta.
-   Imagem 4: print do pedido e print da resposta.
-   Imagem 5: print do pedido e print da resposta.

Sugestão de organização dos ficheiros:

``` text
docs/
└── E7/
    └── experiencia-ia/
        ├── experiencia-ia-E7.md
        └── evidencias/
            ├── prompt-1.png
            ├── resposta-1.png
            ├── prompt-2.png
            ├── resposta-2.png
            ├── prompt-3.png
            ├── resposta-3.png
            ├── prompt-4.png
            ├── resposta-4.png
            ├── prompt-5.png
            └── resposta-5.png
```
