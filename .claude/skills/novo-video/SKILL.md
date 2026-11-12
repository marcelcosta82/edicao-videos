---
name: novo-video
description: "Fluxo completo para produzir um vídeo curto vertical (9:16) de divulgação, do link do curso até o MP4 final para o CapCut: briefing, narração, direção de arte, materiais, quadros-chave, animação e entrega. Use em /novo-video, quando a pessoa pedir um vídeo novo (ex.: 'faça um vídeo para este curso: <link>'), ou para retomar um vídeo em andamento."
---

# novo-video

Conduz um vídeo do começo ao fim, **uma etapa por vez**. Cada etapa termina com algo para a pessoa aprovar. Nunca pule etapas nem encadeie duas sem o "sim" dela.

Antes de tudo: leia o `CLAUDE.md` do projeto (regras gerais) e siga a regra 1 (explicar o plano antes de mudar arquivos).

## Padrão de qualidade
Todo vídeo segue a skill **direcao-de-arte**. O critério de avaliação é:
> Não queremos apenas comunicar uma informação. Queremos transformar essa informação em uma experiência visual.

Se um resultado parecer "apresentação de slides com imagens e textos por cima", ele está reprovado, mesmo que esteja tecnicamente correto.

## Organização de cada projeto
Use um nome curto, sem acento e sem espaço (ex.: `arquitetura-interiores`):

| O quê | Onde |
|---|---|
| Resumo e roteiro | `roteiros/<projeto>.md` |
| Direção de arte | `roteiros/<projeto>-direcao-de-arte.md` |
| Imagens e vídeos trazidos pela pessoa (ex.: Pinterest) | `midia/<projeto>/` |
| Referências de estilo e paleta do projeto | `referencias/<projeto>/` (e as gerais em `referencias/`) |
| Narração | `sons/<projeto>-narracao.mp3` (ou .wav) |
| Trabalho do Claude (código das animações, cortes, testes) | `_CLAUDE/<projeto>/` |
| Estado do projeto | `_CLAUDE/<projeto>/estado.md` |
| Entregas | `saida/<projeto>_rascunho_vNN.mp4` e `saida/<projeto>_final_vNN.mp4` |

**Estado:** ao abrir esta skill, procure `_CLAUDE/<projeto>/estado.md`. Se existir, mostre em 3–5 linhas em que etapa o vídeo está e siga dali. Atualize o estado ao fim de cada etapa (etapa atual, o que foi aprovado, pendências).

## As etapas

### 1. Briefing
- Leia a página do link (só o que estiver lá; o que faltar fica como "confirmar", nunca inventar).
- Escreva em `roteiros/<projeto>.md`: link, data da leitura, resumo, pontos fortes e o **roteiro da narração** (duração pedida, normalmente 30 s ≈ 70–75 palavras).
- Números e siglas da narração escritos por extenso para a voz ("seis meses", "Uninter ponto com").
- **Aprovação:** texto da narração.

### 2. Narração 🟡 (a pessoa faz)
- Entregue o texto final pronto para colar no **ElevenLabs**, com a sugestão de voz e de velocidade.
- A pessoa salva em `sons/`.
- Ao receber: meça a duração. Se precisar acelerar ou desacelerar até ~15%, faça uma cópia ajustada em `_CLAUDE/<projeto>/` (sem mudar o tom); nunca altere o original.
- **Tempo por palavra:** rode `_CLAUDE/ferramentas/venv/Scripts/python.exe _CLAUDE/ferramentas/transcrever.py <audio> _CLAUDE/<projeto>/narracao --termos "<nomes próprios do briefing>"`. Gera `narracao.palavras.json` (para o código) e `narracao.frases.txt` (para ler). É isso que sincroniza textos e cortes com a fala. Confira os nomes próprios na transcrição; se algo vier errado, corrija só a grafia, nunca o tempo.

### 3. Direção de arte
- Siga a skill **direcao-de-arte** e grave `roteiros/<projeto>-direcao-de-arte.md`.
- **Aprovação:** conceito, paleta, tipografia, vocabulário de movimento e o cena a cena.

### 4. Materiais 🟡 (só se precisar)
Para cada cena, a direção de arte já diz a fonte do visual. Ordem de preferência:
1. **Código (Remotion):** tipografia, formas, colagem, ilustração, texturas, transições. Padrão para a maioria das cenas.
2. **`midia/<projeto>/`:** imagens e vídeos que a pessoa trouxe (ex.: baixados do Pinterest, por conta e risco dela).
3. **Biblioteca** de projetos anteriores (`midia/`), se servir.
4. **IA:** só o que faltar. Escreva os prompts **nesta etapa e só nesta**, no formato abaixo.

Mídia realista (foto ou vídeo) entra **apenas quando acrescenta** ao conceito. Se uma cena funciona melhor em motion design puro, ela é feita em código.

Formato de cada pedido de material:
```
### <id> — <para que cena>
- Arquivo: midia/<projeto>/<nome>.png
- Ferramenta: ChatGPT ou Gemini (imagem) | Gemini/Veo ou ChatGPT (vídeo)
- Prompt (copiar e colar): <texto, já em 9:16, com a paleta, a luz, o enquadramento, o espaço vazio para o texto, "sem textos, legendas ou logos na imagem", e "fundo liso" se for recortada>
- Vou conferir: <resolução mínima, enquadramento, defeitos a evitar>
```
**Conferência:** ao chegar, verifique cada arquivo (resolução, proporção, marca d'água, textos indesejados, mãos e rostos com defeito, letreiros de outras marcas). Diga o que serve, o que precisa de ajuste (corte, recorte de fundo, ampliação) e o que precisa ser refeito.

**Recorte de fundo** (para texto atrás do assunto, colagens, objetos flutuando): `_CLAUDE/ferramentas/venv/Scripts/python.exe _CLAUDE/ferramentas/recortar.py <entrada> _CLAUDE/<projeto>/recortes/<nome>.png`. Nunca grava por cima do original. Confira as bordas do recorte sobre um fundo de cor contrastante antes de usar.

### 5. Quadros-chave (style frames)
- Antes de animar, monte 3 a 5 quadros parados das cenas mais importantes, já com tipografia, paleta, camadas e textura finais.
- Mostre lado a lado. **Aprovação:** visual. Mudar aqui é barato; depois da animação, é caro.

### 6. Animação e rascunho
- Construa as cenas no **Remotion** (ver "Ferramentas"), no tempo da narração, lendo os tempos de `narracao.palavras.json`. Antes de escrever o código, carregue a skill `remotion:remotion-best-practices`.
- Cada projeto tem a sua pasta de código em `_CLAUDE/motion/src/<projeto>/` e a sua composição registrada em `_CLAUDE/motion/src/Root.tsx` (1080x1920, 30 fps). Imagens e áudio usados pelo código vão para `_CLAUDE/motion/public/<projeto>/` (cópias; os originais não mudam).
- Render: `npx remotion render <Composicao> <arquivo>` dentro de `_CLAUDE/motion/`.
- Monte o rascunho com a narração e entregue `saida/<projeto>_rascunho_vNN.mp4`.
- Antes de mostrar, confira: quadros-chave lado a lado (de várias cenas), sincronia texto/fala nos pontos marcados, número de quadros, 30 fps constante, acentos corretos, nada importante cortado, legibilidade no celular.
- **Revisão:** a pessoa pede por tempo ("aos 12 s…") ou por cena. Cada rodada é uma versão nova.

### 7. Final
- `saida/<projeto>_final_vNN.mp4`: 1080x1920, 30 fps constante, H.264 + AAC, sem barras.
- Resumo curto: o que foi feito, duração, o que ficou "a confirmar" no roteiro (preço, datas).

## Ferramentas
| Ferramenta | Para quê | Situação |
|---|---|---|
| Remotion (React → vídeo) | **Ferramenta principal de motion graphics.** Projeto em `_CLAUDE/motion/`, fontes do Google Fonts via `@remotion/google-fonts` | Instalado (4.0.543). Licença gratuita: empresa de uma pessoa (gratuito até 3) |
| FFmpeg | Cortes, áudio, montagem final, conferência | Instalado |
| Node.js + Git | Rodam o Remotion | Instalados |
| Python 3.12 (ambiente `_CLAUDE/ferramentas/venv`) | `transcrever.py` (tempo por palavra, faster-whisper) e `recortar.py` (recorte de fundo, rembg) | Instalados |
| Ampliação de imagens (IA local) | Melhorar imagens pequenas (ex.: 736 px do Pinterest) | Não instalado: instalar na primeira vez que precisar, com permissão |
| HyperFrames | Alternativa ao Remotion | Não instalado; só se o Remotion não atender |
| ElevenLabs | Narração | A pessoa usa no site |

- Nunca instalar nada novo sem explicar o que é, para que serve e receber o "sim".
- Se a empresa passar de 3 pessoas, rever a licença do Remotion.

## Regras
- Formato sempre 9:16, 1080x1920, 30 fps constante.
- Nunca mover, renomear ou apagar arquivos de `brutos`, `midia`, `sons` e `marca`. Tudo o que o Claude gera fica em `_CLAUDE/` ou `saida/`.
- Nunca sobrescrever um arquivo já entregue: versão nova (`_v02`).
- Logo da Uninter (`marca/`): texto branco, sempre sobre fundo escuro ou com área de contraste.
- Português simples nas conversas.
