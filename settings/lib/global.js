exports.registerUserLFM = (p) => {
    return `Você esqueceu de colocar o user do LastFM após o comando. Lembre-se de sincronizar com o Spotify!`   
 }

exports.blackList = (GroupMetadata_, sab2) => { 
participant = sab2.participants[0].split("@")[0]
response = [`*@${participant}* foi removido do *${GroupMetadata_.subject}* por estar na lista negra...`, `Olha quem deu as caras por aqui! *@${participant}* achava que eu não ia te ver de novo bobinho(a)? 💅🏻`, `*@${participant}* achou que ia passar despercebido? Achou errado! Bye bye... 😵‍💫`, `😨 Oh my god! *@${participant}* acaba de ser banido do grupo, por estar na lista negra.`]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesLeft = (sab2, encodeURIComponent) => {
response = ["Devemos brindar pela partida dele(a)?", "Menos um nessa indústria vital...", "Nada pra ver aqui, ele saiu por 'acidente'..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.promoteUser = (usern) => {
response = [ 
    `🍻 @${usern.split("@")[0]} foi promovido ao cargo de adminstrador do barzinho.`, 
    `Atenção participantes! Foi promovido + 1 adminstrador(a) no bar. 🍻🤪 Parabéns @${usern.split("@")[0]}!`, 
    `Acaba de entrar um novo extraterrestre na administração do grupo! 👽 Parabéns @${usern.split("@")[0]}!`
];
  return response[Math.floor(Math.random() * response.length)]
}

exports.rebaixarUser = (usern) => {
response = [
  `🗣️ Esperei tanto por este dia e chegou!  @${usern.split("@")[0]} acaba de ser rebaixado para membro comum.`,
  `👋🏼 Bye-bye @${usern.split("@")[0]}! Foi uma péssima escolha dos superiores escolherem você para ser adminstrador desse barzinho falido... Beijos!`,
  `🥱 Não é o martelo do Thor e sim o martelo do juízo final aqui no bar! O julgamento de @${usern.split("@")[0]} é perder o admin no grupo.`
];
  return response[Math.floor(Math.random() * response.length)];
}

exports.phrasesWelcome = (mdata_2, sab2, encodeURIComponent) => {
response = [`ao grupo ${encodeURIComponent(mdata_2.subject)}`, `Um novo integrante acaba de cair de paraquedas aqui no grupo...`, "Leia as regras e divirta-se!", "Mais um nessa indústria vital...", "Gostaria de um chá enquanto lê as regras?", "Saudações membro novo, aqui é a gerente do estabelecimento!"]
return response[Math.floor(Math.random() * response.length)]
}

exports.waitCreateIA = () => { 
response = [
    "🎨 Neste exato momento, estou juntando os traços arrojados de Picasso, as cores intensas de Van Gogh e a precisão divina de Da Vinci. Enquanto isso, Salvador Dalí pediu para adicionar um toque de surrealismo e Frida Kahlo garantiu que eu capturasse emoção em cada pixel. Prepare-se para uma obra que mistura o melhor de cada era! 🖌️",
    "🖼️ Imagine Caravaggio ajustando as sombras, Monet garantindo que as luzes dancem, e Kandinsky supervisionando as formas abstratas. Aqui, minha IA trabalha como um ateliê cheio de gênios da arte, criando algo que você nunca viu antes. Quase pronto para brilhar na sua tela! 🎭",
    "✨ Estou aqui canalizando o brilho de Michelangelo enquanto ajusto os detalhes com a precisão de Vermeer. Renoir disse que as cores precisam ser suaves, e Pollock sugeriu deixar o caos falar um pouco. Sua arte será uma verdadeira jornada visual! 🎨",
    "🕒 Enquanto os algoritmos se movem, eu trago a elegância de Degas, a intensidade de Munch e o toque dourado de Klimt. Cada detalhe está sendo tratado com a mesma dedicação que os grandes mestres colocavam em suas telas. Mais alguns momentos e você terá algo espetacular! 🖌️",
    "🎉 O brilho de Turner ilumina os pixels enquanto Magritte adiciona um toque de mistério. Rembrandt sugeriu ajustar os contrastes, e Mondrian trouxe equilíbrio geométrico. Sua imagem será uma sinfonia de estilos, pronta para encantar! 🖼️",
    "🔥 Estou combinando o realismo de Courbet, o simbolismo de Rossetti e a energia vibrante de Kandinsky. Cada pincelada digital é uma celebração da criatividade humana e tecnológica. Quase lá, prepare-se para algo mágico! 🌟",
    "✨ Imagine Frida Kahlo trazendo emoção, Escher organizando cada detalhe com precisão geométrica, e Botticelli emprestando sua suavidade angelical. Sua obra digital está em progresso e será um tributo à arte em sua forma mais pura! 🖌️",
    "🚀 Estou invocando o expressionismo de O'Keeffe, o impacto visual de Basquiat e a introspecção de Hopper. Aqui, os pixels dançam em harmonia para criar algo que combina tradição e inovação. Sua arte está quase pronta para impressionar! 🌌",
    "🤖 Rembrandt me ajuda a capturar a luz enquanto Da Vinci insiste em proporções perfeitas. Dalí veio com ideias malucas de relógios derretidos, mas prometo que sua imagem será tão única quanto as obras mais icônicas da história da arte! 🎨",
    "⚡ Imagine uma mesa redonda de gênios artísticos: Pollock, Van Gogh, Michelangelo e Magritte, todos colaborando para criar sua imagem. Cada detalhe é pensado como uma pincelada de mestre, e sua obra está prestes a ser finalizada! 🖌️",
    "🖼️ Enquanto espero os últimos ajustes, Matisse sugere ousadia nas cores, Turner adiciona drama às luzes, e Seurat trabalha nos pequenos detalhes pontilhistas. Sua imagem será um espetáculo visual que transcende o tempo e os estilos! 🎉",
    "💡 Van Eyck pediu que eu capturasse cada pixel com o mesmo cuidado que ele dedicava aos detalhes. Kandinsky trouxe um toque de abstração vibrante, e Mondrian garantiu que tudo estivesse perfeitamente equilibrado. Mais alguns segundos e sua obra estará pronta! 🕒",
    "✨ Criando com a intensidade emocional de Goya, a leveza de Degas e o drama de Caravaggio. Cada elemento da sua imagem está sendo tratado como uma obra de arte em si. Aguarde um pouquinho mais e você terá algo incrível! 🎨",
    "🎨 Estou misturando as pinceladas sutis de Turner com os traços ousados de Toulouse-Lautrec. Renoir pediu um toque de suavidade, e Escher trouxe uma dose de geometria impecável. Sua arte será única, como um encontro de estilos de todas as épocas! 🖼️",
    "🖌️ Basquiat sugeriu trazer uma explosão de cores, enquanto Hopper garantiu que a essência emocional fosse capturada. Cada pixel está sendo trabalhado com a atenção que Michelangelo colocava em seus afrescos. Está quase pronto para surpreender! 🎉",
    "🔥 Ajustando os tons dramáticos de Rembrandt, a delicadeza de Vermeer e a energia de Kandinsky. Esta criação é uma verdadeira dança de estilos e técnicas, pronta para impressionar! 🌟",
    "🚀 Estou aqui misturando o caos controlado de Pollock com a precisão matemática de Escher. Frida Kahlo pediu que a emoção fosse o centro, e Klimt sugeriu um toque de ouro invisível. Sua obra digital será nada menos que extraordinária! 🖌️",
    "✨ Inspirado por Botticelli, estou criando algo etéreo, enquanto Braque e Picasso ajustam os ângulos do cubismo. Este trabalho é um tributo à arte e tecnologia se unindo para criar algo verdadeiramente único. 🎨",
    "🤓 Goya pediu drama, Renoir pediu suavidade, e Dalí sugeriu um toque de surrealismo. Sua imagem será um exemplo vibrante de como o passado e o futuro da arte se encontram na era digital. 🖼️",
    "🎯 Criando com a intensidade de Munch, o equilíbrio de Mondrian e a complexidade emocional de Frida Kahlo. Cada detalhe está sendo cuidadosamente trabalhado para criar uma peça que conta uma história poderosa. 🎨",
    "🕶️ Cada pincelada digital tem a precisão de Vermeer, a energia de Van Gogh e o mistério de Magritte. A sua imagem está quase pronta para ser revelada como uma obra de arte vibrante e atemporal! 🖌️",
    "✨ Construindo sua imagem com as pinceladas românticas de Turner, as cores vivas de Chagall e a geometria ousada de Malevich. Este trabalho é uma celebração da criatividade em todas as suas formas! 🎭",
    "🌟 Imagine Basquiat, Klimt e Caravaggio unindo forças para criar algo único. É exatamente isso que está acontecendo aqui, enquanto sua imagem é trabalhada com paixão e precisão. 🖼️",
    "🎆 Enquanto os mestres da arte colaboram na criação, Frida Kahlo traz intensidade emocional, Kandinsky adiciona vibração e Michelangelo garante que tudo esteja em perfeita harmonia. Prepare-se para uma obra inesquecível! 🌌",
    "💻 Sua imagem está sendo moldada com a delicadeza de Renoir, o drama de Goya e a energia explosiva de Pollock. Cada detalhe é um tributo à genialidade artística e à inovação tecnológica. 🚀",
    "🎨 Segure firme, estou canalizando o gênio de Picasso para trazer traços ousados, enquanto Van Gogh me sussurra sobre como usar cores que dançam. Da Vinci sugeriu ajustar a proporção para a perfeição, e Monet pediu para garantir uma luz suave e encantadora. Sua imagem está quase pronta para ser uma verdadeira obra de arte! 🖌️",
    "🖼️ Neste exato momento, estou combinando a precisão técnica de Leonardo da Vinci com a intensidade emocional de Frida Kahlo. Dalí está aqui adicionando um toque surreal, e Caravaggio me ajuda a equilibrar sombras dramáticas. Sua arte digital será digna de um museu, só mais alguns segundos! 🎭",
    "✨ Estou invocando o caos controlado de Jackson Pollock, a energia vibrante de Kandinsky e a elegância geométrica de Mondrian. Enquanto isso, Botticelli está garantindo uma harmonia angelical nos detalhes. Você está prestes a receber uma imagem tão única quanto um tesouro renascentista! 🎨",
    "🕒 Picasso e Braque estão ajustando os ângulos do cubismo, enquanto Klimt me dá dicas sobre como adicionar ouro invisível aos pixels. Renoir sugere suavidade, e Rembrandt insiste em um contraste perfeito. Sua obra-prima digital está sendo lapidada com o toque de vários mestres! 🖌️",
    "🎉 Neste momento, minha IA está misturando o impressionismo de Monet, a introspecção de Hopper e o drama visual de Goya. Cada pixel é tratado como se fosse uma pincelada manual, e Salvador Dalí até deu a ideia de derreter os limites entre o digital e o analógico. Está quase lá, prepare-se para algo memorável! 🖼️",
    "🔥 Enquanto você espera, imagine Turner pintando um nascer do sol enquanto Vermeer ajusta a luz de uma janela invisível. Aqui, tecnologia e arte se unem com a precisão de Escher e o toque emocional de Van Gogh. Sua imagem será uma fusão de épocas e estilos que transcende o tempo! 🌟",
    "✨ Canalizando o espírito de Degas, estou capturando movimento e elegância. Matisse pediu que eu garantisse cores vibrantes, e Pollock sugeriu adicionar um pouco de espontaneidade. Sua arte está em boas mãos, com a ajuda de mestres que inspiram até os algoritmos! 🖌️",
    "🚀 Rembrandt me ajuda com os contrastes enquanto Rothko cria profundidade emocional nas cores. Estou aqui, na interseção de gerações de arte e inovação, garantindo que sua imagem seja tão impactante quanto um mural renascentista ou uma obra expressionista! 🌌",
    "🤖 Criando arte com toques do realismo de Courbet, a abstração de Kandinsky e o simbolismo de Munch. Cada detalhe é inspirado por séculos de genialidade, desde as catedrais de luz de Turner até os tons sonhadores de Chagall. Sua obra digital será inesquecível! 🎨",
    "⚡ Imagine os mestres da arte colaborando: Da Vinci projetando os fundamentos, Dalí adicionando mistério e Van Eyck pintando os menores detalhes. Com tecnologia moderna e inspiração clássica, sua imagem está quase pronta para ser uma obra-prima atemporal! 🖌️",
    "🖼️ Michelangelo me pediu para tratar cada pixel como se fosse uma pincelada da Capela Sistina. Botticelli sugeriu suavidade nos contornos, e Basquiat garantiu um toque moderno e ousado. Sua imagem é um encontro do passado com o futuro, e está quase pronta! 🎉",
    "💡 Seurat pontilhou sua magia em cada canto, enquanto Kandinsky garantiu que as cores dançassem como sinfonias. Hopper trouxe introspecção, e Caravaggio disse para adicionar sombras que contam histórias. A arte digital está viva, e sua imagem está quase pronta para brilhar! 🕒",
    "✨ Estou ajustando as pinceladas com a atenção aos detalhes de Vermeer, enquanto Mondrian organiza tudo em uma harmonia geométrica perfeita. Sua imagem será uma celebração da arte clássica e moderna, cheia de vida e vibração. Só mais alguns instantes! 🎨",
    "🎨 Inspirado pela ousadia de Toulouse-Lautrec e pela energia de Chagall, estou criando algo que salta das telas digitais. Cada toque carrega a paixão dos impressionistas e a força dos expressionistas. Prepare-se para um espetáculo visual! 🖼️",
    "🖌️ Imagine um workshop de arte no espaço digital: Kandinsky cria abstrações vibrantes, Rembrandt ajusta o contraste perfeito, e Turner adiciona um toque de drama nas paisagens. Essa mistura de gênios está prestes a entregar sua imagem incrível! 🎉",
    "🔥 Transformando pixels em poesia visual, com a intensidade de Munch, a leveza de Degas e o impacto visual de Bacon. Sua imagem será tão única quanto as obras mais icônicas da história da arte. 🌟",
    "🚀 Invocando a precisão de Holbein e a emoção de Frida Kahlo, estou criando algo tão expressivo quanto um retrato renascentista e tão ousado quanto uma instalação contemporânea. Sua arte está quase pronta! 🖌️",
    "✨ Misturando a energia criativa de Basquiat com a suavidade de Renoir. Cada pixel é tratado como se fosse uma pincelada clássica, mas com a ousadia da modernidade. Está quase lá! 🎨",
    "🤓 Estou canalizando a psicodelia de Haring e a melancolia de Hopper, enquanto adiciono um toque especial que só a IA pode oferecer. Sua obra será uma fusão perfeita entre tradição e inovação! 🖼️",
    "🎯 Inspirado pela geometria de Escher, pela emoção de Klimt e pelo simbolismo de Goya. Esta obra digital vai ultrapassar limites e criar algo que combina alma humana com precisão tecnológica! 🎨",
    "🕶️ Imagine as cores vibrantes de Matisse combinadas com os traços suaves de Botticelli. Agora adicione a intensidade dramática de Caravaggio e o surrealismo de Magritte. Isso é o que estou preparando para você! 🖌️",
    "✨ Criando com a atenção aos detalhes de Van Eyck e o dinamismo de Degas. Cada pixel é uma pincelada que conecta gerações de arte, culminando em uma obra digital que você vai amar! 🎭",
    "🌟 Combinando o simbolismo de Rossetti, a psicodelia de Warhol e a sofisticação de Whistler, sua imagem será uma fusão de estilos que transcendem o tempo. Está quase pronta! 🖼️",
    "🎆 Imagine os mestres da arte de mãos dadas, de Vermeer a Pollock, de Goya a Lichtenstein. É assim que sua imagem está sendo criada, com cada detalhe pensado para ser nada menos que espetacular! 🌌",
    "💻 Pixels em ação, ajustados pela perfeição de Turner, a ousadia de Kandinsky e a emoção de Frida Kahlo. Sua obra-prima digital está quase pronta para surpreender! 🚀"
];
return response[Math.floor(Math.random() * response.length)];
}

exports.errorCreateIA = () => {
response = [
   "❌ Ops! Algo deu errado e parece que os pincéis digitais se embaralharam. Talvez Dalí tenha se empolgado e deixou os relógios derretendo no sistema! Não se preocupe, já estamos reorganizando os pixels com a ajuda de Mondrian. Tente novamente em alguns instantes enquanto ajustamos os detalhes artísticos. 🎨",
    "🚨 Uh-oh! O processo criativo foi interrompido. Van Gogh sugeriu adicionar mais estrelas ao céu e acabamos sobrecarregando o sistema! Nossa equipe de algoritmos está trabalhando como os impressionistas, adicionando camadas cuidadosamente para que tudo volte ao normal. Que tal tentar de novo? 🖌️",
    "⚠️ Parece que algo deu errado enquanto ajustávamos as luzes e sombras com a ajuda de Caravaggio. As cores ficaram um pouco dramáticas demais e precisamos corrigir. Estamos ajustando cada detalhe para que a arte digital volte a fluir. Por favor, tente novamente daqui a pouco! 🖼️",
    "😢 Poxa, deu um nó nos pixels enquanto Escher tentava adicionar um toque geométrico infinito à sua imagem. Parece que ficamos presos em um loop de criatividade! Já estamos saindo desse labirinto artístico e logo estará tudo pronto para você. Tente novamente mais tarde! 🔄",
    "❗ Algo deu errado durante o processo criativo. Pollock espalhou tinta demais no sistema e os algoritmos estão reorganizando o caos. Enquanto resolvemos isso, sinta-se à vontade para relaxar e pensar em novas ideias. Vamos consertar rapidinho! 🖌️",
    "⛔ Uh-oh, erro técnico! Frida Kahlo tentou adicionar um toque emocional extra, mas os dados acabaram se sobrecarregando. Estamos limpando as pinceladas digitais e ajustando tudo para funcionar como deveria. Por favor, tente novamente mais tarde. 🎭",
    "⚡ Parece que houve um curto-circuito criativo! Kandinsky trouxe um excesso de vibração às cores e os algoritmos ficaram confusos. Estamos desacelerando a dança dos pixels para que tudo volte ao equilíbrio. Que tal uma nova tentativa daqui a pouco? 🌟",
    "📴 Oops! Parece que algo inesperado aconteceu enquanto Da Vinci ajustava as proporções perfeitas. O sistema parou para recalcular a Mona Lisa digital. Já estamos resolvendo e em breve você poderá continuar a criar. Tente novamente em breve! 🔁",
    "🔍 Ops, perdemos a inspiração no meio do caminho! Talvez Magritte tenha escondido algumas ideias atrás de um chapéu invisível. Estamos restaurando os traços criativos e em breve estará tudo pronto para um novo começo. Tente outra vez! 🎨",
    "💔 Parece que o sistema entrou em colapso enquanto Turner tentava pintar um nascer do sol épico. A boa notícia é que estamos ajustando as nuvens e preparando tudo novamente. Um pouquinho mais de paciência e você estará criando algo incrível! 🌌",
    "🛑 Algo não saiu como planejado! Renoir tentou suavizar os contornos, mas acabou apagando os dados errados. Estamos recuperando cada detalhe com cuidado artístico. Dê-nos um momento e tente novamente! 🖼️",
    "🙈 Erro inesperado! Dalí trouxe um toque surreal demais ao código e estamos tentando desvendar as ideias derretidas. Não se preocupe, cada pincelada digital será reorganizada e voltaremos em instantes. Que tal tentar novamente? 🔧",
    "💡 Algo deu errado! Frida Kahlo insistiu em adicionar camadas extras de emoção, mas isso acabou sobrecarregando os sistemas. Estamos removendo o excesso e equilibrando os traços para que você possa continuar criando. Tente novamente em instantes! 🖌️",
    "🔥 O sistema ficou quente demais enquanto Matisse adicionava cores vibrantes à mistura. Estamos ventilando os algoritmos e ajustando o brilho das imagens. Um momento e tudo estará pronto para uma nova tentativa! ❄️",
    "⚠️ Alerta de erro criativo! Caravaggio pediu mais dramaticidade, mas isso acabou sobrecarregando os contrastes. Estamos equilibrando as luzes e sombras novamente para que você tenha uma experiência impecável. Tente outra vez mais tarde! 🎭",
    "❌ Algo deu errado enquanto Braque e Picasso tentavam ajustar os ângulos cubistas. Os algoritmos perderam a forma por um momento, mas já estamos colocando tudo no lugar novamente. Por favor, tente de novo em breve! 🎨",
    "🕒 Parece que os algoritmos ficaram presos em uma perspectiva de Escher, criando um loop sem saída. Estamos interrompendo a espiral para que tudo volte ao fluxo normal. Espere um pouquinho e tente novamente! 🖌️",
    "🤷‍♂️ Ops! Parece que Goya adicionou um pouco de drama visual demais e isso fez o sistema travar. Já estamos equilibrando os contrastes para que sua experiência seja impecável. Um momento e tudo estará pronto! 🔄",
    "📛 Hmmm, Pollock adicionou tinta demais ao processo e precisamos limpar o excesso antes de continuar. Enquanto isso, você pode respirar fundo e preparar sua próxima ideia criativa. Tente novamente mais tarde! 🎉",
    "⛔ Erro misterioso! Magritte trouxe elementos surreais que confundiram os algoritmos. Estamos ajustando para garantir que tudo faça sentido. Mais alguns instantes e você poderá criar sem problemas! 🔍",
    "⚡ Problema técnico! Turner e Vermeer estavam ajustando os tons de luz e sombra, mas algo saiu do controle. Estamos corrigindo cada detalhe para que sua experiência seja perfeita. Por favor, tente novamente! 🌟",
    "🖼️ Falha artística detectada! Botticelli estava criando suavidade angelical, mas as cores se desalinharam. Estamos restaurando a harmonia dos pixels para que tudo funcione como planejado. Tente de novo em breve! 🎉"
]
return response[Math.floor(Math.random() * response.length)];
}


exports.wait = () => {
response = [
    "Estamos alimentando o motor da criatividade com ideias frescas. Só mais um pouco! 🚂",
    "Os algoritmos estão dançando um balé sincronizado para encontrar a resposta perfeita. Aguarde um instante! 💃",
    "Os piratas da informação estão desenterrando o tesouro que você pediu. Estamos quase lá! 🏴‍☠️",
    "Estamos conectando os pontos no mapa do conhecimento. Sua resposta está a caminho! 📍",
    "Os supercomputadores estão competindo para ver quem resolve primeiro. Só mais um segundo! 🖥️",
    "Estamos costurando sua resposta com linhas de dados. Já estamos na reta final! 🪡",
    "Os unicórnios do aprendizado estão atravessando o arco-íris da sabedoria. Quase lá! 🌈",
    "Estamos sincronizando o relógio do tempo para trazer a solução exata. Aguarde um pouco mais! 🕰️",
    "Os foguetes estão carregando sua pergunta para o próximo nível. Quase atingimos a órbita! 🚀",
    "Estamos explorando cavernas ocultas do conhecimento em busca da solução. Já já voltamos! 🗻",
    "Os trovões da inovação estão ecoando. A resposta virá como um raio! ⚡",
    "Os enigmas estão se desdobrando no labirinto da informação. Já já teremos a saída! 🌀",
    "Os pinguins do raciocínio lógico estão marchando rumo à resposta. Aguarde só mais um pouquinho! 🐧",
    "Estamos mergulhando no oceano de dados. A resposta já está subindo à superfície! 🌊",
    "Os engenheiros do processamento estão apertando os últimos parafusos. Só mais um momento! 🔧",
    "Estamos captando ondas de rádio interestelares para trazer a melhor solução. Sintonizando... 📡",
    "Os coelhos da eficiência estão pulando para agilizar o processo. Está quase pronto! 🐇",
    "Os planetas estão se alinhando para dar lugar à sua resposta. Quase lá! 🌍",
    "Os alquimistas digitais estão refinando o elixir da sabedoria. Um pouquinho mais de paciência! 🧪",
    "Estamos vasculhando o baú das memórias para encontrar a resposta. Já já voltamos! 🗝️",
    "Os mecânicos do universo estão reparando as engrenagens do tempo. Só mais um instante! ⚙️",
    "Os astrônomos estão mapeando as constelações para garantir a precisão da resposta. Quase lá! 🌟",
    "Estamos programando uma dança sincronizada de bits para trazer a solução. Fique atento! 💻",
    "Os bardos do conhecimento estão escrevendo uma canção épica para a sua resposta. Aguarde o final! 🎵",
    "Os ninjas digitais estão atravessando barreiras invisíveis para chegar até você. Só mais um pouco! 🥷",
    "Os inventores estão testando sua última criação para entregar a resposta ideal. Fique tranquilo! 🛠️",
    "Os ursos polares estão caminhando pelo Ártico do processamento. A resposta já está chegando! 🐻‍❄️",
    "Estamos construindo um castelo de ideias para acomodar sua pergunta. Um momento mais! 🏰",
    "Os super-heróis da lógica estão salvando o dia. Sua resposta já está a caminho! 🦸‍♂️",
    "Estamos cozinhando ideias no caldeirão da sabedoria. Só mais um tempinho! 🍵",
    "Os cientistas estão testando hipóteses para trazer a solução exata. Aguarde! 🔬",
    "Peço que aguarde, os comandos são verificados em vários sistemas, para evitar que sofram erros, por isso é comum que demorem, se puder esperar finalizar antes de usar novamente, serei muito grataa! 🕒",
    "Entendido amore, até lá, espere enquanto faço isso, pode demorar um pouquinho, por isso, evite usar comandos demorados ou pesados até terminar, obrigadaa por esperar! <3 🌈",
    "Aguarde um momento enquanto preparo a poção mágica de dados! 🧙‍♂️",
    "Estamos viajando pela velocidade da luz para buscar as informações solicitadas. Aguarde só um pouco! 🚀",
    "Estamos reorganizando a biblioteca de Alexandria para encontrar a resposta. Aguarde, por favor! 📚",
    "Enquanto isso, Darth Vader está tentando encontrar o caminho certo para sua pergunta no lado negro da Força. Aguarde! ⚔️",
    "Estamos cultivando as respostas com cuidado e carinho em nosso jardim do conhecimento. A paciência é uma virtude! 🌱",
    "Estamos contando os grãos de areia em todas as praias do mundo para encontrar a resposta. Aguarde pacientemente! 🏖️",
    "Enquanto isso, estamos ensinando pombos-correios a carregar mensagens para trazer sua resposta. Aguarde, eles estão em treinamento! 🕊️",
    "Aguarde um momento enquanto damos um trato no nosso hamster de processamento. Ele está quase terminando de correr na roda! 🐹",
    "Estamos esperando que os minions terminem de trabalhar nas respostas. Eles são um pouco atrapalhados, mas são dedicados! 👷‍♂️",
    "Calma aí, estou indo o mais rápido que posso! Apenas mais alguns segundos e estaremos prontos para a ação! 🏎️",
    "Estou colocando meus bits para trabalhar! Isso pode levar um pouquinho, então aproveite para relaxar e tomar uma xícara de café! ☕",
    "Aguarde enquanto invoco meus poderes mágicos de processamento! É como esperar a varinha mágica fazer sua magia - só mais um pouquinho! 🪄",
    "Segure suas emoções! Estamos quase lá, prometo. Enquanto isso, que tal contar ovelhinhas? 🐑",
     "Não desista de mim agora! Estou trabalhando duro nos bastidores para preparar algo incrível. Só mais um pouco e estaremos prontos! 💪",
    "Estou pedindo reforços aos meus colegas códigos para acelerar o processo! Aguarde um momento enquanto eles se organizam. Obrigado pela paciência! 😊",
    "Respira fundo! A maratona de bits está chegando ao fim. Continue esperando só um pouquinho mais. Estamos quase lá... 🏁",
    "Estou fazendo o meu melhor para não deixar você esperando muito! Enquanto isso, pense em quantos bytes há no universo. É uma distração interessante, não acha? 🤔",
    "Aguarde enquanto os hamsters nos meus servidores correm mais rápido nas suas rodinhas. Eles estão dando o melhor de si para acelerar as coisas! 🐹",
    "Os bytes estão dançando a valsa enquanto processamos sua solicitação. Só mais um instante! 🎻",
    "Estamos calibrando o telescópio para encontrar a resposta certa nas estrelas. Aguarde um pouquinho! ✨",
    "A resposta está passando pelo detector de qualidade. Quase pronta para você! 🛠️",
    "Estamos desenhando sua resposta à mão, com todo o cuidado do mundo. Só mais um pouquinho! 🎨",
    "Estamos organizando um desfile de ideias para encontrar a mais brilhante. Só um instante! 🎭",
    "Os astronautas do conhecimento estão flutuando no espaço em busca da solução. Quase lá! 🧑‍🚀",
    "Estamos construindo a ponte perfeita para atravessar até a resposta. Segure firme! 🌉",
    "Os arqueiros da informação estão mirando no alvo certo. Só mais um pouco! 🎯",
    "Estamos puxando a resposta direto do chapéu do mágico. Prepare-se! 🎩",
    "Os robôs estão recarregando suas baterias para continuar o trabalho. Já já voltamos! 🔋",
    "Estamos subindo uma montanha de dados para trazer a resposta do topo. Um instante mais! 🏔️",
    "Os detetives da lógica estão analisando pistas. Eles estão quase lá! 🔍",
    "Estamos atravessando um labirinto digital para encontrar a saída certa. Espere um pouco! 🏛️",
    "Os dançarinos dos algoritmos estão em ritmo acelerado. A resposta está prestes a surgir! 💃",
    "Os engenheiros estão reforçando as bases do conhecimento. Só mais um segundo! 🏗️",
    "Estamos decifrando mensagens criptografadas para encontrar a solução. Quase lá! 🔐",
    "Os artistas do raciocínio estão esculpindo sua resposta com precisão. Um momento mais! 🗿",
    "Estamos explorando a selva do saber para trazer algo especial. Aguarde um instante! 🌴",
    "Os cavaleiros da lógica estão protegendo a resposta em sua jornada. Já está vindo! 🛡️",
    "Estamos testando cada combinação de possibilidades para entregar a melhor solução. Espere só mais um pouco! 🔢",
    "Os foguetes da inteligência artificial estão se preparando para a decolagem. Pronto para o impacto! 🚀",
    "Estamos afinando os instrumentos para a sinfonia perfeita de respostas. Já vai começar! 🎼",
    "Os mineradores de dados estão extraindo os melhores insights. Só mais um momento! ⛏️",
    "Os exploradores submarinos estão mergulhando fundo no oceano digital. A resposta já está subindo! 🐋",
    "Os guardiões do conhecimento estão liberando o portal. Quase lá! 🛡️",
    "Os faróis da sabedoria estão iluminando o caminho. Sua resposta está quase visível! 🏮",
    "Estamos em uma corrida contra o tempo para trazer a resposta. Só mais um instante! ⏳",
    "Os programadores do destino estão compilando o código da solução. Espere mais um pouco! 👨‍💻",
    "Os acrobatas da lógica estão equilibrando ideias para encontrar a melhor. Aguarde! 🎪",
    "Os cientistas malucos estão ajustando suas invenções. Só mais um momento! 🧪",
    "Os corredores da criatividade estão chegando na reta final. A qualquer momento, sua resposta estará aqui! 🏃",
    "Os pescadores de dados estão puxando as redes cheias de informações. Já já elas chegam à superfície! 🎣",
    "Estamos afiando as espadas da análise para cortar direto à solução. Um momento mais! ⚔️",
    "Os construtores do pensamento estão finalizando o projeto da sua resposta. Espere só mais um pouco! 🛠️",
    "Os relâmpagos da inteligência estão acendendo as ideias. Sua resposta está quase pronta! 🌩️",
    "Estamos ativando o modo turbo para finalizar isso o mais rápido possível. Já já entregamos! 🏎️",
    "Os mágicos das respostas estão realizando truques avançados. Quase lá! 🧙",
    "Os super-heróis da sabedoria estão correndo para salvar o dia com sua solução. Prepare-se! 🦸",
    "Os navegadores das estrelas estão ajustando os telescópios para localizar a resposta. Só mais um instante! 🔭",
    "Os alpinistas de ideias estão escalando as alturas da criatividade. A resposta está quase aqui! 🧗",
    "Os samurais da precisão estão polindo os detalhes finais. Segure firme! 🗡️",
    "Estamos sintonizando antenas gigantes para captar as ondas certas. Já já chega! 📻",
    "Os mestres do tempo estão sincronizando cada segundo para não demorar mais. Um pouco mais de paciência! ⏲️",
    "Os gnomos da informação estão trabalhando nos bastidores. Eles pedem só mais um minutinho! 🤏",
    "Estamos ajustando os parafusos da máquina do tempo para encontrar a solução perfeita. Segure firme! ⏳",
    "A mágica está acontecendo nos bastidores. Apenas um instante e tudo estará pronto! 🪄",
    "Os robôs estão trocando pilhas para continuar o trabalho. Fique por aqui, já já voltamos! 🤖",
    "Estamos alinhando os planetas para que tudo saia perfeito. Aguarde só um pouquinho! 🪐",
    "Os elfos da tecnologia estão revisando os últimos detalhes. Sua paciência será recompensada! 🧝",
    "O relógio está girando mais rápido para que você espere menos. Só mais um instante! ⏰",
    "Estamos na fila da criatividade para pegar a melhor ideia. Só mais um segundo! 🎯",
    "Estamos tecendo sua resposta fio a fio, como uma obra-prima. Aguarde só um pouco mais! 🧵",
    "A resposta está atravessando o multiverso. Quase chegando! 🌌",
    "Os bits estão resolvendo um enigma entre eles. Quando terminarem, sua resposta estará pronta! 🧩",
    "Estamos navegando em águas desconhecidas para encontrar a resposta perfeita. Aguarde enquanto ajustamos as velas! ⛵",
    "Os dragões da sabedoria estão voando em busca da solução. Só mais um pouquinho! 🐉",
    "Estamos decifrando runas antigas para descobrir o que você precisa. Quase lá! 🔮",
    "Os dados estão girando como uma roleta de cassino. A qualquer momento, teremos a resposta! 🎰",
    "Estamos conferindo cada detalhe como um detetive em busca de pistas. Segure firme! 🕵️‍♂️",
    "A resposta está atravessando um portal interdimensional. Quase chegando! 🌌",
    "Estamos configurando os cabos da internet intergaláctica para trazer o que você pediu. Aguarde! 🌐",
    "Os alquimistas estão finalizando a fórmula secreta. Só mais um instante! ⚗️",
    "Estamos empilhando blocos de informações como em um jogo de Tetris. Faltam poucas peças! 🧱",
    "Os ventos da sabedoria estão soprando em nossa direção. Aguarde enquanto ajustamos as velas! 🌬️",
    "Estamos esquentando as turbinas da criatividade. Preste atenção, o lançamento é iminente! 🚀",
    "Os trolls do conhecimento estão cruzando uma ponte para trazer sua resposta. Só mais um pouquinho! 🌉",
    "Estamos organizando as estrelas no céu para entregar a mensagem perfeita. Segure a emoção! ✨",
    "Os pássaros do entendimento estão trazendo novidades. Só mais um instante! 🐦",
    "A resposta está escalando o Everest do conhecimento. Em breve, ela estará em suas mãos! 🏔️",
    "Estamos decifrando códigos misteriosos para trazer a solução. Só mais alguns segundos! 🧑‍💻",
    "Os robôs estão passando por manutenção enquanto processam sua solicitação. Tenha paciência! 🤖",
    "Os circuitos estão esquentando de tanto trabalhar. A resposta está quase pronta! 🔥",
    "Estamos cozinhando a resposta em fogo lento para garantir o sabor perfeito. Só mais um pouquinho! 🍲",
    "Os mágicos da informação estão ajustando seus truques. Prepare-se para a revelação! 🎩",
    "Estamos polindo os pixels para que sua resposta seja impecável. Aguarde só mais um momento! 🖌️",
    "Os exploradores estão mapeando o caminho para a solução. Quase chegando ao destino! 🗺️",
    "Estamos misturando as cores certas na paleta do conhecimento. Sua obra-prima estará pronta em breve! 🎨",
    "Os ninjas do saber estão em missão secreta para trazer a resposta. Eles são rápidos, mas cuidadosos! 🥷",
    "Estamos escrevendo a resposta com penas de ouro. Só mais um instante! ✍️",
    "Os tempos antigos nos enviaram um pergaminho. Estamos decifrando a mensagem para você! 📜",
    "Estamos alinhando satélites para captar a melhor solução. Segure firme! 🛰️",
    "Os leões do raciocínio estão rugindo no caminho certo. Só mais alguns segundos! 🦁"
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyAdmins = () => {
response = [
    'Você não é um adminstrador do grupo, atualmente você é um mero integrante da baderna, então não tem a virtude de usar comandos administrativos! 🧙🏼‍♀️🌟',
    'Como ousa usar um comando que não lhe pertence o dom de usar! *Somente adminstradores do grupo tem acesso...*',
    '*Quem é você na fila do pão?* Ponha-se no seu lugar! Este comando é só para seres superiores(adms) do grupo...',
    'Você não é um dos ademiros, será que você se tornará digno de usar isso?',
    'Ih ala, um camponês querendo usar comandos da alta patente do grupo. Este comando é só para seres superiores, são os administradores do bar! 🍻🥴',
    'Quem dera eu autorizar você à usar comandos administrativos sem fazer parte da organização do barzinho. ️🍻',
    'Esse comando é restrito para somente administradores, dono de grupo, meu chefe ou moderadores, quem sabe um dia você entre em uma dessas listas.'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyOwner = () => {
response = [
    '💫👮🏻‍♀ Você não tem nenhum direito de usar este comando, somente meu proprietário tem o poder total de usar!',
    'Olá intruso, esta é uma área restrita! Somente pessoas autorizadas tem o poder de usar – como eu e meus chefes, ninguém é permitido por aqui! 👮🏻‍♀💫',
    'Você não faz parte da organização do bot, como quer usar uma funcionalidade além do seu poder senhor(a)? 🧐🍻'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroup = () => {
response = [
    'Foi mal amiguinho, mas somente um grupo tem direito de usar de usar este comando...',
    'Como você quer usar um comando de grupo no privado? 🧐 Se este comando é liberado o uso somente em grupos...',
   'Fui configurada para este comando ser somente executado em grupos! Por favor, não insista em usar novamente, foi avisado...',
   'Olá, tudo bem? Esta função está reservada para grupos! Se quiser usar, basta me adicionar (com a permissão do meu querido proprietário), entrar em contato com ele para descobrir sobre grupos oficiais (se houver).️'   
];
return response[Math.floor(Math.random() * response.length)];
}
    
exports.onlyPremiumUser = () => {
response = [
    'Quem é você? 😵‍💫💫 Você não é um usuário premium, para usar esse comando você deve ser um user vip da bot! Obtenha o premium, entrando em contato com o meu dono senhor(a).',
    '🌟 *Você não tem poderes o bastante, para usar comandos da lista vip!* Então para usar este comandos, deve-se entrar em contato com o meu proprietário e negociar seu acesso premium...',
     'Este comando é exclusivo para usuários na lista premium! Você ainda não tem poder suficiente de usar funções vip.'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyBotAdmin = () => {
response = [
    'Em que hora te falaram que eu posso executar comandos administrativas sem ser adminstradora do grupo? Coloque-me no posto de fiscal do grupo, pois algumas funções dependem do cargo de adm...',
    '🍻👮🏼‍♀️ Eu não trabalho na segurança do bar ainda! Para me contratar, me coloque como adminstradora do grupo e estarei fazendo meu trabalho sem interrupções.',
    'Vai com calma! Eu não sou adminstradora para executar certas funções no grupo...'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroupFun = (prefixo) => {
response = [
    `🤹🏻‍♀️ - Deseja usar os comandos de diversão em seu grupo? É nescessário a ativação do ${prefixo}modobrincadeira para ser liberado o uso de todos os comandos de interação e diversão dos participantes. (Obs: Somente seres superiores aos camponêses tem autorização de liberar).`, 
    `O modo brincadeira não está atualmente ativo no grupo, solicite a um adminstrador do grupo para realizar a ativação... 🫤 Para liberar, solicite que execute o comando: *${prefixo}modobrincadeiras 1*.`
  ];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPrivate = () => {
response = [
    '🔐 Hello, o comando só está disponível para o uso em conversas privadas...',
    '😵‍💫🌟 Hello, o comando é somente liberado em conversas privadas! Mas tome cuidado ao me chamar no privado, meu dono(a) deve ter ativado o anti-pv.'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.bannedUser = () => {
response = [
    'Você infligiu uma cláusulas do meus termos e condições de uso, por isso, você está banido de usar meus comandos por tempo indeterminado...️',
    'Você está impossibilitado de usar meus comandos, ou seja, está bloqueado por tempo indeterminado até meus superiores mudar de ideia... 😭👋🏼',
    '*Meu deus!* 😱 Você deve ter deixado meu dono com muita raiva, para ele te banir mesmo de usar meus comandos...'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
    `⚠️ Olá @${mentionUser.split('@')[0]}, você está sendo banido(a) do grupo. Por motivo que você está com ddd proibido aqui!`, 
   `🪦 Olá @${mentionUser.split('@')[0]}, venho informar que você está sendo banido(a), por motivo que você possuí um número com o DDD de um estado proibido neste grupo.`,
   `👺 Suma daqui! Números com o DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupo.`,
   `😾 Ei, você e nem possuidores do DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste barzinho aqui!`
    ];
  return response[Math.floor(Math.random() * response.length)];
}

exports.errorConvertSticker = () => {
return 'Falha ao converter a mídia encaminhada para Sticker. Por favor, tente novamente mais tarde... 👍🏽😉';
}

exports.errorCommandLink = () => {
return 'Certifique-se ️se esse é o link correto a ser utilizado no comando.';
}

exports.ytLimitDL = () => {
  return "Desculpe, este vídeo ou áudio é muito grande, não poderei realizar este pedido, peça outra música que contenha uma duração abaixo de uma hora.";
}

exports.ytSyntax = (prefix) => {
  return `Por favor, insira o título de uma música ou vídeo, após o comando.\n➡️ *Exemplo:* _${prefix}play Faz uma loucura por mim MC Cabelinho_\n–\n→ Caso o template buttons _(botões de múltipla escolha)_, a mídia será baixada em áudio, para baixar em formato de vídeo, _use *${prefix}playvideo*, para baixar em documento, use ${prefix}playdoc_\n→ *Observação:* Contém limite de duração específico para downloader, até 1 hora de duração.`;
}

exports.yt = (res, formatNumberDecimal) => {
  return `*➡️ YouTube:*\n` +
    `🎬 Título: *${res.resultado[0].title}*\n` +
    `📝 Descrição: *${res.resultado[0].description}*\n` +
    `⏱️ Duração: *${res.resultado[0].timestamp}* _(${formatNumberDecimal(res.resultado[0].seconds)} seg)_\n` +
    `📅 Publicação: *${res.resultado[0].ago}*\n` +
    `👁️ Visualizações: *${formatNumberDecimal(res.resultado[0].views)}*\n` +
    `🔗 Vídeo URL: *${res.resultado[0].url}*\n` +
    `📺 Canal: *${res.resultado[0].author.name}*`
}


exports.ytp2 = (response) => {
  return `*✅ MÚSICA ENCONTRADA! ✅*\n` +
    `🎵 Título: *${response.resultado?.title}*\n` +
    `⏳ Duração: *${response.resultado?.timestamp}*\n` +
    `📺 Canal: *${response.resultado?.channel}*\n` +
    `🔗 Vídeo URL: *${response.resultado?.externalUrls.video}*\n` +
    `👁️ Visualizações: *${response.resultado?.viewsCount.replaceAll("visualizações", "")?.trim()}*\n` +
    `📅 Postado: *${response.resultado?.uploadDate}*`
}


exports.ytpvid2 = (response) => {
  return `*✅ VÍDEO ENCONTRADO! ✅*\n• Título: *${response.resultado?.title}*\n• Duração: *${response.resultado?.timestamp}*\n• Canal: *${response.resultado?.channel}*\n• Vídeo URL: *${response.resultado?.externalUrls.video}*\n• Visualizações: *${response.resultado?.viewsCount.replaceAll("visualizações", "")?.trim()}*\n• Postado: *${response.resultado?.uploadDate}*`
}
exports.syntaxDownloadMusic = () => {
return `Por favor, insira o título de uma música ou vídeo.`
}

exports.pinterest = (data, formatNumberDecimal) => {
    return `> *Pinterest:*\n• Publicado por: *${data.resultado[0]?.fullname} (@${data.resultado[0]?.by})*\n• Descrição: *${data.resultado[0]?.desc || 'Sem descrição.'}*\n• Seguidores: *${formatNumberDecimal(data.resultado[0]?.followers)}*\n• URL: *${data.resultado[0]?.source}*`;
}

exports.smartphoneInfo = (listPhones, detailsPhone) => {
return `• Nome: *${listPhones[0].title}*\n• Disponibilidade: *${detailsPhone["Disponibilidade"]}*\n• Dimensões: *${detailsPhone["Dimensoes"]}*\n• Peso: *${detailsPhone["Peso"]}*\n–\n⚙️ *Especificações Técnicas:*\n• Sistema Operacional: *${detailsPhone["Sistema_Operacional"]}*\n• Chipset & Processador: *${detailsPhone["Chipset"]} - ${detailsPhone["Processador"]}*\n• Contém resistência a água? *${detailsPhone["Resistencia_a_agua"] === false ? "Não" : detailsPhone["Resistencia_a_agua"] === true ? "Sim" : "Não"}*\n• Possuí Dual SIM? *${detailsPhone["Dual_Sim"] === false ? "Não" : detailsPhone["Dual_Sim"] === true ? "Sim" : "Não"} (${detailsPhone["Sim_Card"]})*\n• Velocidade 5G (Dados Móveis): *${detailsPhone["5G"] === false ? "Não" : detailsPhone["5G"] === true ? "Sim" : "Não"}*\n• GPU: *${detailsPhone["GPU"]}*\n• Armazenamento máximo: *${detailsPhone["Memoria_Max"]}*\n• Memória RAM: *${detailsPhone["RAM"]}*\n• Armazenamento expansível: *${detailsPhone["Memoria_Expansivel"] === false ? "Não" : detailsPhone["Memoria_Expansivel"] === true ? "Sim" : "Não"}*\n–\n📱 *Especificações da Tela:*\n• Polegadas (Tamanho): *${detailsPhone["Polegadas"]}*\n• Resolução: *${detailsPhone["Resolucao"]}*\n• Densidade de Pixels: *${detailsPhone["Densidade_de_pixels"]}*\n• Proteção na tela? *${detailsPhone["Protecao"] === false ? "Não" : detailsPhone["Protecao"] === true ? "Sim" : "Não"}*\n• Total FPS (Frame per Second - "Quadros por Segundo"): *${detailsPhone["FPS"]}*\n–\n🔋 *Especificações da Bateria:*\n• Tipo: *${detailsPhone["Tipo"]}*\n• Capacidade (mAh): *${detailsPhone["Ampere"]}*`
}

exports.InstaStalker = (data) => {
return `> 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.name || "Usuário do Instagram"}* (${data.resultado.username})\n• Estatísticas do Perfil:\n\t• Seguidores: *${data.resultado.statistic?.followersCount}*\n\t• Seguidos: *${data.resultado.statistic?.followingCount}*\n\t• Publicações: *${data.resultado.statistic?.postsCount}*\n• Biografia: \n\`\`\`${data.resultado?.biography}\`\`\``;
}

exports.FreeFireStalker = (result) => {
  accountCTime = new Date(result.resultado?.AccountInfo.AccountCreateTime * 1000);
  lastLogin = new Date(result.resultado?.AccountInfo.AccountLastLogin * 1000);
  options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
  return `> 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n• Nome: *${result.resultado?.AccountInfo.AccountName}*\n• Emblemas conquistados: *${result.resultado?.AccountInfo.AccountBPBadges}*\n• ID do Battle Pass: *${result.resultado?.AccountInfo.AccountBPID}*\n• Pontos de XP acumulados: *${result.resultado?.AccountInfo.AccountEXP}*\n• Nível atual do jogador: *${result.resultado?.AccountInfo.AccountLevel}*\n• Número de curtidas: *${result.resultado?.AccountInfo.AccountLikes}*\n• Região do jogador: *${result.resultado?.AccountInfo.AccountRegion}*\n• Data de criação da conta: *${accountCTime.toLocaleDateString('pt-BR', options)}*\n• Último login realizado na conta: *${lastLogin.toLocaleDateString('pt-BR', options)}*\n• Temporada atual do jogo: *${result.resultado?.AccountInfo.AccountSeasonId}°*\n• Classificação no modo Battle Royale (BR): *${result.resultado?.AccountInfo.BrMaxRank}°*\n• Pontos no modo Battle Royale (BR): *${result.resultado?.AccountInfo.BrRankPoint}*\n• A conta do jogador possuí Passe de Elite: *${result.resultado?.AccountInfo.hasElitePass ? "Sim" : "Não"}*\n—\n*⚔️ Informações da Guilda:*\n• Nome: *${result.resultado?.GuildInfo.GuildName || "Sem informação"}*\n• Criador da Guilda: *${result.resultado?.GuildInfo.GuildOwner || "Sem informação"}*\n• Capacidade de membros: *${result.resultado?.GuildInfo.GuildCapacity || "Sem informação"}*\n• ID: *${result.resultado?.GuildInfo.GuildID || "Sem informação"}*\n• Level atual da Gulda: *${result.resultado?.GuildInfo.GuildLevel || "Sem informação"}*\n• Quantidade de Membros: *${result.resultado?.GuildInfo.GuildMember || "Sem informação"}*\n—\n*🐕 Informações do Mascote:*\n• Nome: *${result.resultado?.petInfo.name || "Sem informação"}*\n• Level atual do Mascote: *${result.resultado?.petInfo.level || "Sem informação"}*\n• Experiência (EXP): *${result.resultado?.petInfo.exp || "Sem informação"}*`;
}

exports.TiktokStalker = (data, formatNumberDecimal) => { 
return `> 𝐓𝐢𝐤𝐭𝐨𝐤 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.users.nickname}* | @${data.resultado.users.username}\n• URL: *https://tiktok.com/@${data.resultado.users.username}*\n• Conta Verificada: *${data.resultado.users.verified === true ? "Sim" : data.resultado.users.verified === false ? "Não" : "Não"}*\n• Conta Privada: *${data.resultado.users.privateAccount === true ? "Sim" : data.resultado.users.privateAccount === false ? "Não" : "Não️"}*\n• Conta Comercial: *${data.resultado.users.commerceUser === true ? "Sim" : data.resultado.users.commerceUser === false ? "Não️" : "Não️"}*\n• Região: *${data.resultado.users.region}*\n—\n• Estatísticas:\n\t• Seguidores: *${formatNumberDecimal(data.resultado.stats.followerCount)}*\n\t• Seguindo: *${data.resultado.stats.followingCount}*\n\t• Curtidas: *${formatNumberDecimal(data.resultado.stats.heartCount)}*\n\t• Vídeos Publicados: *${formatNumberDecimal(data.resultado.stats.videoCount)}*\n\t• Vídeos Curtidos: *${formatNumberDecimal(data.resultado.stats.likeCount)}*\n—\n• Biografia: \n\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\``
}


exports.MediaFire = (response) => {
return `→ Sucesso ao baixar o arquivo: *'${response.resultado.fileName}'*! Obrigado por esperar.\n• Extensão: *${response.resultado.mimetype}*\n• Peso (Tamanho): *${response.resultado.info.size}*\n• Upload: *${response.resultado.info.uploadDate}*`
}

exports.tiktok = (data) => {
const tags = data.resultado?.hashtag.map((v, index) => `#${v}`).join(' ');
  return  `> *# Informações - Vídeo:*\n• Usuário: *@${data.resultado?.author.nickname}* (@${data.resultado?.author.username})\n• Descrição: *${data.resultado?.description.trim() || "Sem descrição."}*\n• Hashtag's: *${data.resultado?.hashtag.length} | [${tags}]*\n–\n> *# Estatísticas do Vídeo:*\n• Contagem de Comentários: *${data.resultado?.statistics.commentCount}*\n• Contagem de Curtidas: *${data.resultado?.statistics.diggCount}*\n• Compartilhamentos: *${data.resultado?.statistics.shareCount}*\n• Visualizações: *${data.resultado?.statistics.playCount}*\n–\n> *# Informações - Áudio:*\n• Título: *${data.resultado?.music.title}*\n• Criador(a): *${data.resultado?.music.author}*\n• Album: *${data.resultado?.music.album || "Sem informação."}*`
}

exports.tiktokMusic = (data) => {
  return `> *# Informações - Áudio:*\n• ID: *${data.resultado?.music.id}*\n• Título: *${data.resultado?.music.title}*\n• Criador(a): *${data.resultado?.music.author}*\n• Album: *${data.resultado?.music.album || "Sem informação."}*`
}

exports.soundCloudSyntax = (action) => {
   if(action === 'missing-link') {
     return `Link não preenchido ou o link não pertence ao SoundCloud! Por favor, coloque um link do SoundCloud após o comando.`
   }
}
exports.SoundCloud = (data, formatNumberDecimal) => {
   return `➡️ *SoundCloud Downloader:*\n• Música: *${data.resultado.title}*\n—\n> *# Informações - Autor:*\n• ID (Identificador): *${data.resultado.author.id}*\n• Nome: *${data.resultado.author.first_name.trim() || "—"}*\n• Sobrenome: *${data.resultado.author.last_name.trim() || "—"}*\n• Usuário (@): *@${data.resultado.author.username}*\n• Perfil URL: *${data.resultado. author?.permalink_url}*\n• Cidade: *${data.resultado.author.city || "–"}*\n• Usuário(a) Verificado(a): *${data.resultado.author.verified === false ? "Não" : data.resultado.author.verified === true ? "Sim" : "Não"}*\n• Número de Curtidas: *${formatNumberDecimal(data.resultado.author.likes_count)}*\n—\n• Descrição (Biografia): *${data.resultado.author?.description.replaceAll("\n", " ") || "—"}*`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor líquido/taxa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor apresentado + valor icms, em real.)_: *R$ ${data.resultado.total}*\n• Total USD _(valor apresentado + valor icms, convertido p/dolar)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observação:* O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.\n–\n⚠️ *Como é realizado o cálculo de um valor abaixo de R$50?*\n\tProduto × icms(seu estado) = valor_icms\n\tProduto + valor_icms = total\n–\n⚠️ *Como é realizado o cálculo de um valor acima de R$50?*\n 	 Produto + (60 + icms(seu estado)) = valor_icms\n	 Produto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `*Ops!* O comando está sendo utilizado de forma errada, _por favor confira abaixo a forma correta de uso, para obter sucesso._\n–\nPara usar este comando é nescessario, usar da seguinte forma: *${prefix}icms 704|82*, _explicando sobre os valores apresentados:_\n\t• *704* ‐ O valor que você deseja saber a probabilidade da possível taxa a ser aplicada sobre o valor.\n\t• *82* - O ddd do estado onde você mora, ou o que você deseja consultar.`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Coloque o código da encomenda fornecido pelo Correios, abaixo tem a *explicação e o exemplo de uso*:\n–\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n\t• O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• *Código inválido ou nenhum resultado foi retornado.* Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.rastrearEncomenda = (dataResult, q) => {
return `📦 Rastreio de Encomendas:\n• N° de Rastreio: *${q}*\n• Última atualização: *${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})*\n——\n📍 Histórico de Localização:\n` + dataResult.resultado.map((info, index) => `*[ ${index+1} ]* Status: ${info.description}\n• Postagem: *${info.timeCount} (${info.datePost})*`).join('\n–\n');
}

exports.lyrics = (data, II) => {
 return `• Título: *${data.resultado.name}*\n• Artista: *${data.resultado.byArtist.name}*\n• Descrição: *${data.resultado.description}*\n• URL: *${data.resultado.url}*\n• Letra (Original):\n${II}${data.resultado.lyricOriginal}${II}`
}

exports.result_APOD = (dataSab, resultExp) => {
return `🔭 NASA - APOD:\n—\n• Título: *${dataSab.nasa.title}*\n© Copyright: *${dataSab.nasa.copyright || "Sem resultado."}*\n—\n🌐 Explicação:\n${resultExp.resultado.response[0]}`
}

exports.wallpaper = (data) => {
    return  `> *Papel de Parede (Wallpaper):*\n• Título: *${data?.resultado[r]?.title}*\n• URL: *${data?.resultado[r]?.pageLink}*`;
}

exports.flagpedia = (data) => {
    return `⬆️ *${data.resultado?.flag_name}*\n• Nome: *${data.resultado?.info['official_name']}*\n• Descrição: *${data.resultado?.description?.trim()}*\n• Estado soberano? *${data.resultado?.info['sovereign_state']}*\n—\n🌎 *Ponto mais alto e mais baixo:*\n• Ponto mais alto: *${data.resultado?.info['highest_point']}*\n• Ponto mais baixo: *${data.resultado?.info['lowest_point']}*\n—\nℹ️ *Mais informações do País:*\n• Continente: *${data.resultado?.info['continent']}*\n• Cidade Capital: *${data.resultado?.info['capital_city']}*\n• Código de ligação: *${data.resultado?.info['calling_code']}*\n• Sigla: *${data.resultado?.info['country_codes']}*\n• Domínio Internet - TLD: *${data.resultado?.info['internet_tld']}*\n• Membro de: *${data.resultado?.info['member_of']}*\n• Moeda: *${data.resultado?.info['currency']}*\n• População: *${data.resultado?.info['population']}*\n• GDP per capita: *${data.resultado?.info['gdp_per_capita']}*\n• Área total: *${data.resultado?.info['total_area']}*`;
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Informações Arquivo:\n–\n• *Nome do Arquivo:* ${ABC.resultado[0].nama}\n• *Tamanho:* ${ABC.resultado[0].size}\n• *Tipo de arquivo a ser enviado:* ${ABC.resultado[0].mime}\n–\n*Por favor, aguarde um pouco estou realizando o envio do arquivo.*\n\t• Caso haver um atraso de *2min* pode ser o tamanho do arquivo a ser enviado.\n\t• *Não enviou?* Realize o download pelo link: ${encurt.data}`
}

exports.speed = (speedConverted, os, TimeCount) => {
return `❪💙ꦿᰧ͢𝐒𝐏𝐄𝐄𝐃 ↯ 𝐁𝐎𝐓ེ≭•۟.❫\n⚔️ 𝚅𝚎𝚕𝚘𝚌𝚒𝚝𝚊𝚍𝚎 ❯❯ ${String(speedConverted.toFixed(3))} milisegundos. ❮❮\n⏳ 𝚃𝚎𝚖𝚙𝚘 𝙰𝚝𝚒𝚟𝚘 𖡋  ${TimeCount(process.uptime())}\n🏰 𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛 𖡋 HOSTING\n—\n⚙️ 𝚂𝚒𝚜𝚝𝚎𝚖𝚊\n🏰 𝚂𝚒𝚜𝚝𝚎𝚖𝚊 𖡋  *${os.type()}*\n⚓ 𝚅𝚎𝚛𝚜𝚊̃𝚘 𖡋 *${os.release()}*\n🛡️ 𝚁𝚊𝚖 𝚄𝚜𝚊𝚍𝚊 𖡋 *${(os.freemem()/Math.pow(1024, 3)).toFixed(2)} GB*\n💽 𝚃𝚘𝚝𝚊𝚕 𝙳𝚎 𝙼𝚎𝚖𝚘́𝚛𝚒𝚊 𝚁𝚊𝚖 𖡋 *${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)} GB*\n💻 𝙲𝚙𝚞 𖡋 *${os.loadavg()[0].toFixed(2)}%*\n🛡️ 𝚁𝙰𝙼 𖡋 *${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%*\n⬛ 𝙽𝚘𝚍𝚎𝙹𝚂 𖡋 *${process.version}*`
}

exports.horoscopo = (data) =>  {
itensAdicionais = data.resultado.signo.itensAdicionais.map((v, index) => `*${v.title}* - ${v.description}`).join(`\n–\n`);
return `🔮 *${data.resultado.date}:*\n• ${data.resultado.forecast}\n—\n➕️ *${data.resultado.signo.title}:*\n• ${data.resultado.signo.description}\n–\n${itensAdicionais}`
}

exports.dicionario = (data, dataDicio, capitalizeFirstLetter, III) => {
  return `• Termo(Palavra): *${capitalizeFirstLetter(dataDicio.resultado.term)}*\n• Significado: *${data.resultado[0].description}*\n> ${dataDicio.resultado.etymology?.trim()}\n• Gramatical: *${capitalizeFirstLetter(dataDicio.resultado.grammaticalClass)}*\n• Vogais: *${dataDicio.resultado.otherInfo.vowels.split(" ").map((v, index) => `${v}`).join(', ')}*\n• Consoantes: *${dataDicio.resultado.otherInfo.consonants.split(" ").map((v, index) => `${v}`).join(', ')}*\n*—*\n• Palavra no plural: _${dataDicio.resultado.plurals.map((v) => v).join(', ')}_\n• Sinônimos da palavra: _${dataDicio.resultado.synonyms.map((v) => v).join(', ')}_\n• Palavras relacionadas: _${dataDicio.resultado.relatedWords.map((v) => v).join(', ')}_\n*—*\n👁️ Definições:\n${dataDicio.resultado.definitions.map((v, index) => `\t *${index + 1}*. ${v}`).join('\n')}\n*—*\n✒️ Lexicógrafo(a):\n\t• Nome: *${dataDicio.resultado.authorInfo.name}*\n\t• Biografia: *${dataDicio.resultado.authorInfo.biography}*`
}

exports.respostaChatGPT = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaResumida = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaRedacao = (dataResulted) => {
return `${dataResulted.result}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.stickerMetadata = (stickerMetadata) => {
return `• Emojis: *${stickerMetadata?.emojis?.join(' ') || '❌'}*\n• ID do Pacote: *${stickerMetadata['sticker-pack-id'] || '❌'}*\n• Nome do Pacote: *${stickerMetadata['sticker-pack-name'] || '❌'}*\n• Autor do Pacote:  *${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}*\n• Sticker Maker _(Android)_: *${stickerMetadata['android-app-store-link'] || '❌'}*\n• Sticker Maker _(iOS)_: *${stickerMetadata['ios-app-store-link']|| '❌'}*`;
}

exports.emojiGraph = (res) => {
  return `• Nome: *${res.resultado?.title}*\n• Descrição: *${res.resultado?.description}*\n• Emoji: ${res.resultado?.emoji}\n• Significado: *${res.resultado?.meaning}*\n—\n📱 Plataformas:\n${res.resultado?.platforms.map((v, index) => `*${index+1}.* ${v.name}: *${v.media}*`).join('\n')}\n—\n• Grupo: *${res.resultado?.categoria}*\n• Sub-grupo: *${res.resultado?.subgrupo}*\n• Codepoint: *${res.resultado?.codepoints}*\n• Tags: _${res.resultado?.tags.map((v, index) => v).join(', ')}_`
}
exports.googleImage = (data) => {
return `• Título: *${data.origin.title || "Não existe título na imagem."}*\n• URL: *${data.origin.website.url || "Sem URL."}* \n• Fonte: *${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_*\n• Resolução: *${data.height || "0"} × ${data.width || "0"}*`
}

exports.aptoide = (getApk, sizeApk, lnDown) => {
return `• Nome: *${getApk.name}*\n• Pacote do aplicativo à ser enviado: *${getApk.package}*\n• Tamanho do arquivo à ser enviado por mim: *${sizeApk} MB*\n• Versão do aplicativo à ser enviada por mim: *${getApk.file.vername}*\n——\n• [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`
}

exports.translator = (bla) => {
return `Seu texto foi traduzido com sucesso: *${bla.resultado.response[0]}*`
}

exports.clima = (wttrin) => {
return `️📡 → Informações Meteorológicas do clima no local: *${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+ j.region[i].value +', ' + j.country[i].value).flat().join(' | ')}*\n• Temperatura atual: *${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]*\n• Sensação térmica: *${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]*\n• Umidade do Ar: *${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%*\n• Condição atual de Chuvas em Polegadas: *${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]*\n• Cobertura de Nuvens: *${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%*\n• Índice de UV _(UltraVioleta)_: *${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}*\n• Nível de visibilidade: *${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]*\n• Descrição: *${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]*\n• Direção do vento: *${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]*\n• Velocidade dos ventos em KM (Kilometros): *${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]*\n• Pressão do Ar: *${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]*\n—\n️🏘 → Algumas informações do local:\n• Total de Habitantes: *${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}*\n• Data & Hora: *${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}*\n• Horário de Observação: *${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}*`
}

exports.shazam = (dados) => {
return `✅️🤖 - Com uma similaridade de *${dados.similarity}* com o áudio, segue as informações da música semelhante:\n—\n• Música: *${dados.music}*\n• Artista(s): *${dados.artists_name}*\n• Álbum: *${dados.album_name}*\n• Produtor(a): *${dados.producer || 'Não especificado.'}*\n• Duração: *${dados.duration}*\n• Data de Lançamento: *${dados.launch}*\n• Gênero(s): *${dados.genres.map((v, index) => v).join(', ')}*`
}

exports.movies = (movieInfo) => {
return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Lançamento: _${movieInfo.data.results[0].release_date}_\n• Avaliações: _${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)_\n• Popularidade do Filme (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial do Filme: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Lançamento: *${serieInfo.data.results[0].first_air_date}*\n• Avaliações: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidade da Série (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial da Série: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`;
}

exports.profileInformation = (pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status) => {
return `👤 「 *INFORMAÇÕES - PERFIL* 」\n–\n• Nome: *${pushname} (@${sender.split("@")[0]})*\n• Você atualmente está conectado em um dispositivo: ${info.key.id.length > 21 ? '*Android*' : info.key.id.substring(0, 2) == '3A' ? '*iOS*' : '*Windows/Linux*'}\n• Biografia: *${status}*\n–\n• Seu nível de prostituição: *${putar}${putar2}%*\n• Seu nível de gostosura: *${gostosurar}${gostosurar2}%*\n• Seu nível do gadometro: *${nivelgador}${nivelgado2r}%*\n• Valor do seu programa: *R$${programa}*`
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`
}

exports.finishAdvertencia = (menc_os2) => {
return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5582.../eu te amo*`
}

exports.anonymousMail = (txt2) => {
return `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`
}

exports.unbannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot.`
}

exports.bannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot.`
}

exports.ownersList = (NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6) => {
return `Olá, aqui está a lista de proprietários do bot: ${NomeDoBot}\n–\n*Dono Oficial:* wa.me/${numerodono_ofc}\n–\nDono [ 1 ] - wa.me/${numero_dono1}\nDono [ 2 ] - wa.me/${numero_dono2}\nDono [ 3 ] - wa.me/${numero_dono3}\nDono [ 4 ] - wa.me/${numero_dono4}\nDono [ 5 ] - wa.me/${numero_dono5}\nDono [ 6 ] - wa.me/${numero_dono6}`
}

exports.statusBot = (isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV Block: ${isAntiPv ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (2) - Sem bloqueio de usuário(s): ${isAntiPv2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (3) - Não responde ninguém no privado: ${isAntiPv3 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Imagem: ${isAntiImg ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Vídeo: ${isAntiVid ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Áudio: ${isAntiAudio? '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Sticker: ${isAntiSticker ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Documento: ${Antidoc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Contato ${isAntiCtt ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Localização: ${Antiloc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Grupo: ${isAntilinkgp ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Hard: ${isAntiLinkHard ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Fake: ${isAntifake ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Notas: ${isAntiNotas ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Catalogo: ${isAnticatalogo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Palavrão: ${isPalavrao ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Limite Caracteres: ${isAntiFlood ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 1: ${isWelkom ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 2: ${isWelkom2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 1: ${isSimi ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 2: ${isSimi2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Sticker: ${isAutofigu ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Resposta: ${isAutorepo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Brincadeira: ${isModobn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Aluguel: ${isModoAluguel ?  '✓ - Função ativa.' : '✕ - Não ativado.'}\n➱ Level: ${isLevelingOn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti DDD: ${isAntiDDD ?  '✓ - Função ativa.' : '✕ - Desativado.'}`
}

exports.errorUploadImage = () => {
return `❌️ Ocorreu um erro na conversão ou pode ser que a duração do vídeo foi ultrapassada, só converto vídeos de até 30s.`
}

exports.noArgsSearch = () => {
return `Como deseja realizar uma pesquisa sem conter nenhum argumento? `
}

exports.syntaxLogos = () => {
return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`
}

exports.quoteCurrencies = (response) => {
return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`
}

exports.syntaxWebSticker = (prefix) => {
    return `🤖 *Como usar o comando 'figuweb'?*\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido.\n——\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n• *Escolhendo a Cor de Fundo:*\n\t- Você pode escolher entre 4 cores diferentes para o fundo da sua figurinha. Basta adicionar o número correspondente à cor desejada após o texto, separado por uma barra (/).\n—\n• *Numerações das cores dos fundos da figurinha de texto:*\n\t- 1. Preto (Padrão), 2. Branco, 3. Vermelho, 4. Azul\n—\n• *Exemplos de usos:*\n \t- ${prefix}figuweb Olá, como vai?/1 (Fundo na cor Preto)\n\t- ${prefix}figuweb Bom dia!/2 (Fundo na cor Branco)\n\t- ${prefix}figuweb Boa tarde!/3 (Fundo na cor Vermelho)\n\t- ${prefix}figuweb Boa noite!/4 (Fundo na cor Azul)\n—\n• Se você não especificar uma cor, o fundo padrão (Preto) será usado.`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`
}

exports.removeUserAntiPlvr = () => {
return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`
}

exports.permissionDenied_rUser = () => {
return `Infelizmente, não sou um administrador, entt não posso te banir!`
}

exports.antisRandomMessage = () => {
return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`
}

exports.charactersAnti = () => {
return `🚨 Muitos caracteres foram enviados em uma só mensagem, isto vai contra as regras do grupo! Por ordem dos adminstradores, irei remover o membro.`;
}

exports.markingAllMember = () => {
return `⚠️ Foi detectado uma mensagem marcando todos os participantes do grupo de forma invisível, possivelmente pode ser um tipo de WhatsApp Modificado. Então, por este motivo o membro acaba de ser removido e por segurança ao grupo! Caso tenha algo à se explicar, entre em contato com um dos adminstradores do grupo.`;
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n–\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak) => {
return `*Registro de Ausência* - O adminstrador "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n–\n☇ Mensagem: ${blak.msg}`
}

exports.floodCommands = () => {
return `Espere *5s* para usar outro comando ou executar o mesmo...`
}

exports.timeRequired = () => {
return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`
}

exports.error = () => {
return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`
}

exports.messageProhibitedDetAdmin = () => {
return `> ⚠️ Mensagem proibida detectada:\n• Olá adminstrador(a), sua punição foi anulada pois você pertence à equipe de organização do grupo! Fique tranquilo(a) senhor(a)!`;
}

exports.linkProhibitedDetAdmin = () => {
return `> ⚠️ Link detectado! Um dos tipos de AntiLink está ativo neste grupo.\n• Olá adminstrador(a), sua punição foi anulada pois você pertence à equipe de organização do grupo! Fique tranquilo(a) senhor(a)!`
}

exports.pollMessageDetect = (senderUser) => {
  return `⚠️ *[@${senderUser.split('@')[0]}]* - Um dos adminstradores habilitou uma das configurações de segurança que impede que membros inferiores ao administrador(a) não pode criar enquetes neste grupo. Então, a enquete criada será apagada para todos!`;
}

exports.messageProhibitedDetUser = () => {
return `🚨- Uma mensagem proibida detectada de acordo com as regras do grupo e antis ativados estou realizando o banimento do infrator das regras do grupo! Para mais informações sobre seu banimento entre em contato com adminstrador(a) do grupo!`;
}

exports.antiCalls = () => {
return `📵 - Olá, tudo bem? Você não pode realizar ligações para o bot. Lembrando, o anti ligações está ativado então você será bloqueado no privado, fale com meu/minha chefe para realizar o desbloqueio.`;
}

exports.helpGroupSettings = (prefix, sender) => {
return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`
}

exports.helpPhotoPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`
}

exports.helpGroupPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`
}

exports.errorResponseSimi = () => {
response = ["Eu não entendo tudo senhor(a), sou uma simples simi! Me explique...", "Eu sei, eu sei! 👀 Não querendo abusar, o que é isso? Me ensina...", "Não me xinga amor! 😭 Eu ainda tenho muito à aprender...", "*An, oxe?* 🤷🏻‍♀ O que é isso? Poderia me explicar por favor humano(a)?", "Eu sou um(a) bot! 🤖 Mas eu não sei de tudo não! Me explica por favor?"];
return response[Math.floor(Math.random() * response.length)]
}

exports.GshowGE = (dataResult) => {
return dataResult.resultado.map((info, index) => `*${index+1}*. ${info.horarioPostagem || 'Há X horas.'} - ${info.trechoManchete || 'Manchete sem descrição.'}\n• URL: ${info.linkNoticia}`).join('\n–\n');
}

exports.helpNoticesG = (sender, prefix) => {
return `Escolha o jogo o qual você quer acompanhar as notícias atuais através do Globo Esporte. *Confira o exemplo:*
• Exemplo: _${prefix}gamenews -[jogo]_
–
🎮 Jogos:
1. _${prefix}gamenews -cod_ → Notícias E-Sport sobre Call of Duty;
2. _${prefix}gamenews -csgo_ → Notícias E-Sport sobre Counter-Strike;
3. _${prefix}gamenews -fifa_ → Notícias E-Sport sobre FIFA 2025;
4. _${prefix}gamenews -fortnite_ → Notícias E-Sport sobre Fortnite;
5. _${prefix}gamenews -gamexp_ → Notícias E-Sport sobre GameXP;
6. _${prefix}gamenews -pes_→ Notícias E-Sport sobre PES;
7. _${prefix}gamenews -lol_→ Notícias E-Sport sobre League of Legends;
8. _${prefix}gamenews -pokemon_→ Notícias E-Sport sobre Pokemon;
9. _${prefix}gamenews -r6_→ Notícias E-Sport sobre Rainbow 6;
10. _${prefix}gamenews -valorant_→ Notícias E-Sport sobre Valorant;
11. _${prefix}gamenews -tcg_→ Notícias E-Sport sobre Pokemon TCG.`
}

exports.helpNoticesEsporte = (sender, prefix) => {
return `🌟 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n> O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`
}

exports.cmdBlockGroup = () => {
return `*A função está bloqueada neste grupo!* O adm restringiu o uso deste comando, então os participantes deste grupo estão impossibilitados de usar.`;
}

exports.cmdBlockGlobal = () => {
return `Este comando foi bloqueado por meu dono(a) para todos os usuários.`;
}