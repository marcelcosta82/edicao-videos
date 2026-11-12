---
name: direcao-de-arte
description: "Método de direção de arte audiovisual do projeto: transforma o roteiro e a narração de um vídeo em conceito visual, paleta, tipografia, vocabulário de movimento, mapa de ritmo e plano cena a cena, no padrão de um estúdio de design gráfico contemporâneo e motion design. Use em /direcao-de-arte, na etapa 3 da skill novo-video, ou sempre que for criar ou avaliar uma arte, animação ou vídeo deste projeto."
---

# direcao-de-arte

## O critério
> Não queremos apenas comunicar uma informação. Queremos transformar essa informação em uma experiência visual.

O resultado precisa parecer uma peça publicitária de um **estúdio profissional de motion design**, e não uma apresentação institucional com imagens e textos sobrepostos.

- Sofisticação sem perder ousadia.
- Experimentação sem perder coerência.
- Movimento sem excesso de efeitos gratuitos.
- Tipografia com personalidade.
- Composições visualmente surpreendentes.
- Identidade própria para cada projeto.
- Acabamento profissional, com atenção aos detalhes.

**Isto é um método, não um template.** Cada projeto ganha conceito, paleta e tipografia próprios. O que se repete é o nível de elaboração, não o visual.

**Regra absoluta:** nenhuma cena pode ser apenas uma imagem estática acompanhada de uma legenda. Cada cena precisa de intenção de movimento, composição e ritmo.

## Antes de começar, leia
1. `referencias/analise-de-estilo.md`: os princípios extraídos das referências da pessoa.
2. `referencias/<projeto>/` e as imagens soltas em `referencias/`: estilo e paleta que a pessoa quer **neste** projeto. Se houver, elas mandam na paleta e no clima. Olhe as imagens de verdade, não só os nomes.
3. O roteiro (`roteiros/<projeto>.md`) e os tempos por palavra da narração.
4. `marca/`: logo e a paleta (`marca/paleta.md`).
5. Ofício de movimento: `~/.claude/skills/fluxo-de-edicao/guias/oficio-motion.md` (curvas, velocidades, câmera, trocas de cena). Na hora de construir, a skill `remotion:remotion-best-practices` (o código é feito no Remotion).

## Os princípios (das referências)
1. **O texto faz parte da cena**: atrás do assunto, no espaço vazio, dentro do ambiente. Nunca solto e centralizado por padrão.
2. **Contraste tipográfico**: na mesma frase, palavra pequena e discreta + palavra enorme e marcante. Normalmente duas famílias: uma serifa editorial e uma letra de impacto.
3. **Texto no ritmo da fala**: cada palavra-chave entra no tempo exato em que é dita.
4. **Camadas e profundidade**: fundo, assunto recortado, texto e primeiro plano se sobrepõem.
5. **Colagem**: recortes, molduras, polaroides, objetos que surgem. A imagem é montada, não só exibida.
6. **Textura**: granulado, retícula, vinheta, luz. Acabamento de peça produzida.
7. **Paleta curta**, própria do projeto, com um único acento forte.
8. **Cada frase é uma ideia visual nova.**
9. **Ritmo com contraste**: impacto (cortes rápidos, entradas fortes) alternado com contemplação (respiro, movimento lento). Nunca frenético o tempo todo.

## O documento de direção de arte
Grave em `roteiros/<projeto>-direcao-de-arte.md`, nesta ordem:

### 1. Conceito
- Uma frase com a **ideia visual central**, nascida do assunto (ex.: para iluminação, "a luz é a protagonista: tudo acende, inclusive o texto").
- Duas ou três linhas sobre por que esse conceito serve ao curso e ao público.
- Teste: esse conceito serviria para qualquer outro vídeo? Se sim, está genérico. Refaça.

### 2. Paleta
- Parta **sempre** de `marca/paleta.md` (paleta fixa da marca, por enquanto em todos os projetos): azuis + Amarelo Destaque `#FBB414` como acento.
- Defina a identidade do projeto **dentro** dela: qual azul domina (claro e leve, principal e enérgico, profundo e sofisticado), quais 2–3 azuis de apoio entram, e **onde** o amarelo aparece (que palavras, que objeto, que momento).
- Liste as cores escolhidas com o código (hex) e o papel de cada uma no vídeo.
- Use as cores, nunca os layouts dos exemplos da imagem da paleta.

### 3. Tipografia
- **Duas famílias**, com papéis claros (ex.: serifa editorial itálica para o tom; sem serifa condensada pesada para o impacto). Use fontes com licença livre para uso comercial do Google Fonts (carregadas no Remotion por `@remotion/google-fonts`). Confira se a fonte tem os acentos do português. Diga o nome exato e por que combina com o conceito.
- Regras de hierarquia: o que fica pequeno, o que fica enorme, caixa alta ou baixa, espaçamento.
- Nunca Arial ou fonte padrão do sistema.

### 4. Textura e acabamento
- Granulado, retícula, vinheta, desfoque de profundidade, brilho: o que entra e em que intensidade. Coerente com o conceito, sem exagero.

### 5. Vocabulário de movimento
- Como os elementos **entram**, **saem** e **se transformam** (curvas e durações, com base no ofício de movimento).
- Como as cenas **trocam** (2 ou 3 tipos de transição próprios do conceito, variados ao longo do vídeo).
- Câmera virtual: aproximações, percursos, profundidade.
- O que **não** fazer neste projeto (ex.: "nada de zoom lento genérico em foto parada").

### 6. Mapa de ritmo
- Uma linha por trecho da narração: **impacto** ou **contemplação**, e a duração.
- O gancho (primeiros 2–3 s) é o momento mais forte e mais elaborado.

### 7. Cena a cena
Uma tabela com uma linha por cena:

| Campo | O que descrever |
|---|---|
| Tempo | início–fim, preso às palavras da narração |
| Fala | o trecho da narração |
| Ideia visual | o que a cena mostra e por quê (nasce da fala) |
| Composição | camadas (fundo, meio, frente), onde fica o texto, espaço vazio |
| Tipografia | quais palavras aparecem, em que estilo, em que tempo entram |
| Movimento | entrada, vida durante a cena, saída/transição |
| Fonte do visual | **código** (padrão) ou **mídia realista** (`midia/<projeto>/...` ou "a gerar"). Mídia realista só quando acrescenta |

### 8. Quadros-chave
- Quais 3 a 5 momentos viram quadros-chave para aprovação.

## Autocrítica obrigatória (antes de mostrar qualquer coisa)
Responda para si mesmo. Se alguma resposta for "não", refaça antes de mostrar:
- Alguma cena é só uma imagem com texto por cima? (tem que ser **não**)
- Parece apresentação de slides? (tem que ser **não**)
- O conceito nasce deste assunto, ou serviria para qualquer vídeo?
- O texto está integrado à cena (camadas, espaço vazio), e não centralizado por padrão?
- Há contraste de escala e de peso na tipografia?
- Cada frase da narração ganhou uma ideia visual própria?
- O ritmo alterna impacto e contemplação?
- Há um único protagonista visual por momento?
- Estou repetindo a mesma entrada ou transição em sequência?
- O acabamento (textura, alinhamento, margens, legibilidade no celular) está cuidado?

## Ao apresentar à pessoa
- Comece pelo conceito, em uma frase, e mostre a paleta e a tipografia.
- Depois o cena a cena, de forma resumida (uma linha por cena).
- Diga o que será feito em código e o que precisa de mídia realista (e por quê).
- Espere a aprovação antes de seguir para os materiais.
