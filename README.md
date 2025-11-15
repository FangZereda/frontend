🧩 Projeto Front-End: PokéAPI — Cards Dinâmicos

Este projeto foi desenvolvido como parte da avaliação na disciplina de Desenvolvimento Web Front-End, com o objetivo de consumir dados de uma API pública usando apenas HTML, CSS e JavaScript puro, sem o uso de frameworks.

A aplicação consome a PokéAPI, exibe cards de Pokémon gerados dinamicamente e possui recursos como paginação e busca por nome.

🚀 Tecnologias Utilizadas

HTML5

CSS3 (responsivo e com tema Pokémon)

JavaScript (DOM + Fetch API)

PokéAPI

Git e GitHub

📡 Sobre a API utilizada

A PokéAPI (https://pokeapi.co/
) é uma API pública que fornece informações sobre o universo Pokémon.
Não precisa de token ou autenticação para acessar os dados.

Endpoints principais utilizados:

GET /api/v2/pokemon?offset=0&limit=12 → lista inicial de Pokémon

GET /api/v2/pokemon/{id} → detalhes como imagem, tipo e habilidades

🖥️ Funcionalidades do projeto

Exibição de cards com imagem + nome + tipo do Pokémon

Carregamento dinâmico (fetch) com paginação ("Carregar mais")

Busca por nome (filtra os cards já carregados)

Estilo responsivo com tema Pokémon

Fundo temático utilizando imagem local

📁 Estrutura do projeto
meu-projeto/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ script.js
├─ assets/
│  └─ background.jpg
└─ teoria.pdf

▶️ Como rodar o projeto localmente

Clone este repositório:

git clone https://github.com/seu-usuario/nome-do-repo.git


Acesse a pasta:

cd nome-do-repo


Abra o arquivo index.html diretamente no navegador
(ou use o plugin Live Server do VS Code para facilitar)

🎥 Vídeo Pitch

📌 Link para o vídeo explicando o projeto (funcionamento, console e código):

🔗 https://youtu.be/SEU_VIDEO_AQUI

🧪 Prints ou GIF do Projeto (opcional)

Coloque aqui prints do site em funcionamento ou um GIF.

✨ Melhorias Futuras (opcional)

Buscar Pokémon por tipo (fire, water, etc.)

Exibir mais informações: peso, habilidades

Transições e animações nos cards

Dark mode / alternância de tema
