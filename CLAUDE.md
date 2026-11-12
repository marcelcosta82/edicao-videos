# Regras do projeto de edição de vídeos

1. Sempre me explique o plano antes de executar comandos que mudem arquivos.
2. Responda sempre em português simples.
3. O destino final de edição é o CapCut, então os resultados devem ser exportados em MP4 na pasta saida.
4. Todos os vídeos gerados devem ser no formato vertical 9:16 (1080x1920). Vídeos horizontais usados como base devem ser convertidos para 9:16, seguindo o assunto principal (por exemplo, o rosto de quem fala).

## Pastas
- brutos: gravações originais e vídeos longos usados como base para cortes.
- midia: imagens e vídeos para inserir nos vídeos. Por projeto: midia/<projeto>/ (ex.: imagens que eu baixo do Pinterest, por minha conta e risco).
- referencias: imagens e vídeos de estilo e paleta, gerais ou por projeto (referencias/<projeto>/). Não entram nos vídeos. A análise de estilo fica em referencias/analise-de-estilo.md.
- sons: músicas, efeitos sonoros e narrações.
- marca: logo, cores, fontes e vinhetas da empresa.
- roteiros: resumos e roteiros dos cursos, um arquivo por curso (ex.: roteiros/pedagogia.md).
- saida: vídeos prontos em MP4 para o CapCut.
- _CLAUDE: pasta de trabalho do Claude (peças intermediárias, como trechos cortados). Não é entrega final.

## Uso do material
- Quando eu não disser qual imagem ou vídeo usar, sugira opções das pastas midia e marca e peça minha confirmação.
- Nunca mover, renomear ou apagar arquivos das pastas brutos, midia, sons e marca.
- Não há conta Adobe. Para material de fora, sugira bancos gratuitos com licença clara e peça minha aprovação antes de baixar.

## Resumos e roteiros de cursos
- Quando eu mandar o link de um curso, leia a página e salve o resumo (e o roteiro, se eu pedir) na pasta roteiros.
- Usar só informações da página do curso. O que não estiver lá (preço, duração, nota do MEC, promessas) fica marcado como "confirmar". Nunca inventar.
- Anotar no arquivo o link usado e a data da leitura, porque as informações da página podem mudar.

## Padrão criativo
- Critério de avaliação de toda arte, animação e vídeo: "Não queremos apenas comunicar uma informação. Queremos transformar essa informação em uma experiência visual."
- O resultado deve parecer uma peça de estúdio de design gráfico contemporâneo e motion design, nunca uma apresentação de slides com imagens e textos por cima.
- Nenhuma cena pode ser apenas uma imagem estática com legenda. Cada cena precisa de intenção de movimento, composição e ritmo.
- É um método, não um template: cada projeto tem conceito, paleta e tipografia próprios.
- Detalhes do método: skill direcao-de-arte (.claude/skills/direcao-de-arte/).
- Paleta da marca (por enquanto, em todos os projetos): marca/paleta.md. Usar as cores, não os layouts dos exemplos da imagem.

## Fluxo de cada vídeo
- Todo vídeo novo segue a skill novo-video (.claude/skills/novo-video/), uma etapa por vez, com minha aprovação a cada etapa: briefing, narração, direção de arte, materiais, quadros-chave, animação e final.
- Motion graphics são feitos em código, no Remotion (projeto em _CLAUDE/motion). Licença gratuita: minha empresa tem só uma pessoa. Mídia realista (foto ou vídeo) só entra quando acrescenta ao conceito.
- Fonte de mídia realista: imagens que eu trago para midia/<projeto>/ (ex.: Pinterest). IA só para completar o que faltar.
- Prompts de IA só são escritos na etapa de materiais, depois da direção de arte aprovada, prontos para copiar e colar, em 9:16, com o nome do arquivo e a ferramenta (ChatGPT ou Gemini para imagem; Gemini/Veo ou ChatGPT para vídeo; ElevenLabs para narração).
